import React, { useEffect, useRef, useState } from "react";

// Custom cursor: a faceted diamond that follows the mouse.
// States: default, link (smaller, optional label), text (thin line).
// Inputs keep the native cursor. Touch devices never see it.

const FINE_POINTER = "(hover: hover) and (pointer: fine)";
const NATIVE = "input, textarea, select, [contenteditable='true'], [data-cursor='native']";
const LINK = "a[href], button, summary, [role='button'], [data-cursor-text]";
const TEXT = "p, h1, h2, h3, h4, li, blockquote, pre, code, figcaption, dt, dd, span";

// True only when the pointer is on the glyphs, not on blank space in a block.
const overText = (x, y) => {
  let node = null;
  if (document.caretPositionFromPoint) {
    const pos = document.caretPositionFromPoint(x, y);
    node = pos && pos.offsetNode;
  } else if (document.caretRangeFromPoint) {
    const range = document.caretRangeFromPoint(x, y);
    node = range && range.startContainer;
  }
  if (!node || node.nodeType !== 3 || !node.textContent.trim()) return false;

  const range = document.createRange();
  range.selectNodeContents(node);
  return Array.from(range.getClientRects()).some(
    (r) => x >= r.left && x <= r.right && y >= r.top && y <= r.bottom,
  );
};

const Cursor = () => {
  const [enabled, setEnabled] = useState(
    () => typeof window !== "undefined" && window.matchMedia(FINE_POINTER).matches,
  );
  const rootRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const query = window.matchMedia(FINE_POINTER);
    const onChange = () => setEnabled(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    const root = rootRef.current;
    const label = labelRef.current;
    const html = document.documentElement;
    html.classList.add("has-cx");

    const pos = { x: 0, y: 0 }; // pointer
    const shown = { x: 0, y: 0 }; // eased position
    let seen = false;
    let frame = 0;
    let scrollFrame = 0;
    let state = "";
    let text = "";

    const paint = () => {
      frame = 0;
      shown.x += (pos.x - shown.x) * 0.35;
      shown.y += (pos.y - shown.y) * 0.35;
      root.style.transform = `translate3d(${shown.x}px, ${shown.y}px, 0)`;
      if (Math.abs(pos.x - shown.x) > 0.1 || Math.abs(pos.y - shown.y) > 0.1) {
        frame = requestAnimationFrame(paint);
      }
    };

    const classify = (el) => {
      if (!el || el.closest(NATIVE)) return ["native", ""];
      if (el.closest(LINK)) {
        const holder = el.closest("[data-cursor-text]");
        return ["link", holder ? holder.dataset.cursorText : ""];
      }
      if (el.closest(TEXT) && overText(pos.x, pos.y)) return ["text", ""];
      return ["default", ""];
    };

    const apply = (el) => {
      const [next, nextText] = classify(el);
      if (next !== state) {
        root.classList.remove("cx-link", "cx-text", "cx-native");
        if (next !== "default") root.classList.add(`cx-${next}`);
        state = next;
      }
      if (nextText !== text) {
        label.textContent = nextText;
        root.classList.toggle("cx-has-label", Boolean(nextText));
        text = nextText;
      }
      // Keep the label on screen near the right edge.
      root.classList.toggle("cx-flip", pos.x > window.innerWidth - 180);
    };

    const onMove = (e) => {
      if (e.pointerType === "touch") return;
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (!seen) {
        shown.x = pos.x;
        shown.y = pos.y;
        seen = true;
      }
      root.classList.add("cx-on");
      apply(e.target);
      if (!frame) frame = requestAnimationFrame(paint);
    };

    // Content can scroll under a still pointer, so check again.
    const onScroll = () => {
      if (!seen || scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        apply(document.elementFromPoint(pos.x, pos.y));
      });
    };

    const onDown = () => root.classList.add("cx-down");
    const onUp = () => root.classList.remove("cx-down");
    const onLeave = () => root.classList.remove("cx-on");

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    window.addEventListener("scroll", onScroll, { passive: true });
    html.addEventListener("mouseleave", onLeave);

    return () => {
      html.classList.remove("has-cx");
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      window.removeEventListener("scroll", onScroll);
      html.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(scrollFrame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={rootRef} className="cx" aria-hidden="true">
      <div className="cx-body">
        <div className="cx-bar" />
        <div className="cx-spin">
          <svg className="cx-dia" viewBox="0 0 16 24">
            <polygon className="cx-base" points="8,0 16,12 8,24 0,12" />
            <polygon points="8,0 8,12 0,12" fill="#fff" fillOpacity="0.3" />
            <polygon points="8,0 16,12 8,12" fill="#fff" fillOpacity="0.08" />
            <polygon points="8,24 8,12 0,12" fill="#000" fillOpacity="0.22" />
            <polygon points="8,24 16,12 8,12" fill="#000" fillOpacity="0.38" />
          </svg>
        </div>
        <span ref={labelRef} className="cx-label" />
      </div>
    </div>
  );
};

export default Cursor;

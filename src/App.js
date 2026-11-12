import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Rail from "./components/Rail";
import Notes from "./components/Notes";
import { useHash } from "./utils/useHash";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Leadership from "./components/Leadership";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Afterhours from "./components/Afterhours";
import Social from "./components/Social";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import Chatbot from "./components/Chatbot/Chatbot";
import ImageModal from "./components/Modal/ImageModal";
import Cursor from "./components/Cursor";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const hash = useHash();
  const onNotes = hash.startsWith("#/notes");
  const wasOnNotes = useRef(false);

  // New key per page replays the transition. Section links on the home page
  // share one key, so scrolling to a section does not replay it. The first
  // render skips it, because the hero has its own entrance.
  const pageKey = onNotes ? hash : "home";
  const lastKey = useRef(null);
  const animatePage = useRef(false);
  if (lastKey.current !== pageKey) {
    animatePage.current = lastKey.current !== null;
    lastKey.current = pageKey;
  }

  // Notes open at the top. Leaving Notes for a section link scrolls to it,
  // because that section did not exist when the browser tried to jump.
  useEffect(() => {
    if (onNotes) {
      window.scrollTo(0, 0);
    } else if (wasOnNotes.current) {
      const target =
        hash.length > 1 ? document.getElementById(hash.slice(1)) : null;
      if (target) target.scrollIntoView();
      else window.scrollTo(0, 0);
    }
    wasOnNotes.current = onNotes;
  }, [hash, onNotes]);

  return (
    <div className="min-h-screen">
      <Cursor />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Main Content */}
      <div id="top" className="section-container">
        <div className="lg:flex lg:gap-10">
          <Rail onNotes={onNotes} />

          <div className="min-w-0 max-w-4xl flex-1">
            <div
              key={pageKey}
              className={animatePage.current ? "page-in" : undefined}
            >
              {onNotes ? (
                <Notes hash={hash} />
              ) : (
                <>
                  <Header />

                  <div className="mt-24 space-y-24">
                    <Projects />
                    <About />
                    <Experience />
                    <TechStack />
                    <Leadership />
                    <Certifications />
                    <Afterhours />
                    <Social />
                    <Contact />
                    <Gallery onImageClick={setSelectedImage} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Chatbot */}
      <Chatbot />

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

export default App;

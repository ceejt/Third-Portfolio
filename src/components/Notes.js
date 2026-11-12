import React from "react";
import { portfolioData } from "../data/portfolioData";

const isReady = (note) => note.status !== "soon";

const NoteList = () => {
  const { notes } = portfolioData;

  return (
    <div className="blur-in max-w-3xl pb-16">
      <h1 className="pt-8 text-3xl font-semibold leading-tight tracking-[-0.01em] md:text-5xl">
        Notes
      </h1>
      <p className="mt-4 max-w-xl text-ui leading-snug text-muted">
        Short writing on building software with AI.
      </p>

      <ul className="mt-12 space-y-10">
        {notes.map((note) => {
          const body = (
            <>
              <p className="flex items-center gap-2 text-h4 font-fira text-muted">
                <span>{isReady(note) ? note.date : "Coming soon"}</span>
              </p>
              <h2 className="mt-2 text-h2 transition-colors duration-200 group-hover:text-accent">
                {note.title}
              </h2>
              <p className="mt-1 text-ui leading-snug text-muted">
                {note.summary}
              </p>
            </>
          );

          return (
            <li key={note.slug}>
              {isReady(note) ? (
                <a
                  href={`#/notes/${note.slug}`}
                  className="group block"
                  data-cursor-text="Read note"
                >
                  {body}
                </a>
              ) : (
                <div>{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Note = ({ slug }) => {
  const { notes } = portfolioData;
  const note = notes.find((n) => n.slug === slug && isReady(n));

  if (!note) {
    return (
      <div className="blur-in max-w-3xl pb-16 pt-8">
        <p className="text-ui">
          That note does not exist.{" "}
          <a href="#/notes" className="underline underline-offset-2 hover:text-accent">
            Back to notes
          </a>
        </p>
      </div>
    );
  }

  return (
    <article className="blur-in max-w-2xl pb-16 pt-8">
      <a
        href="#/notes"
        className="text-ui text-muted transition-colors duration-200 hover:text-accent"
      >
        Notes
      </a>
      <h1 className="mt-6 text-3xl font-semibold leading-tight tracking-[-0.01em] md:text-4xl">
        {note.title}
      </h1>
      <p className="mt-3 text-h4 font-fira text-muted">
        {note.date}
      </p>
      <div className="mt-10 space-y-5">
        {note.body.map((block, i) =>
          block.type === "h2" ? (
            <h2 key={i} className="pt-4 text-h2">
              {block.text}
            </h2>
          ) : (
            <p key={i} className="max-w-[54ch] text-p">
              {block.text}
            </p>
          ),
        )}
      </div>
    </article>
  );
};

// Route is the URL hash: "#/notes" or "#/notes/<slug>".
const Notes = ({ hash }) => {
  const slug = hash.split("/")[2];
  return slug ? <Note slug={slug} /> : <NoteList />;
};

export default Notes;

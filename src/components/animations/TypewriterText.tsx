import { useEffect, useState } from "react";

const WORDS = [
  "ELECTRIFIED\nSTREET ART",
  "INERACTIVE\nPROVOCATIONS",
  "VIDEO\nACTIONS",
  "RESSURRECTIVE\nMAPPING",
];

const TYPING_SPEED = 70;
const PAUSE_AFTER_TYPED = 1200;
const PAUSE_AFTER_DELETED = 1400;
const GLITCH_DURATION = 600;

export default function TypewriterText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const currentWord = WORDS[wordIndex];
    let timeout: number;

    if (!isDeleting) {
      //typing
      setIsHidden(false);

      timeout = window.setTimeout(() => {
        const next = currentWord.slice(0, displayed.length + 1);
        setDisplayed(next);

        if (next === currentWord) {
          setIsPaused(true);

          // 👇 DRAMATIC GLITCH MOMENT
          setTimeout(() => {
            setIsGlitching(true);

            setTimeout(() => {
              setIsGlitching(false);
              setIsDeleting(true);
              setIsPaused(false);
            }, GLITCH_DURATION);
          }, PAUSE_AFTER_TYPED);
        }
      }, TYPING_SPEED);
    } else {
      //deleting
      timeout = window.setTimeout(() => {
        const next = currentWord.slice(0, displayed.length - 1);
        setDisplayed(next);

        if (next === "") {
          setIsHidden(true);

          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(false);
            setWordIndex((i) => (i + 1) % WORDS.length);
            setIsPaused(false);
          }, PAUSE_AFTER_DELETED);
        }
      }, TYPING_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, isPaused, wordIndex]);

  if (isHidden) return null;

  return (
    <div
      className={`font-digital text-center text-tech-green/90 drop-shadow-[0_0_12px_rgba(22,245,135,0.85)]
 text-6xl md:text-9xl tracking-widest ${isGlitching ? "glitch" : ""}`}
    >
      {displayed.split("\n").map((line, i, arr) => (
        <span key={i} className="block">
          {line}
          {i === arr.length - 1 && (
            <span className="inline-block w-[0.6ch] animate-pulse">|</span>
          )}
        </span>
      ))}
    </div>
  );
}
//0_0_12px_rgba(172,34,242,0.85)]

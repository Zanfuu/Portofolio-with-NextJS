import { useState, useEffect, useRef } from 'react';

interface UseTypewriterOptions {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
}

export function useTypewriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000,
  loop = true,
}: UseTypewriterOptions) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      };
    }

    const currentFullText = texts[currentTextIndex] || '';
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    timeoutRef.current = setTimeout(() => {
      if (isDeleting) {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => {
            const nextIndex = prev + 1;
            if (nextIndex >= texts.length) {
              return loop ? 0 : prev;
            }
            return nextIndex;
          });
        }
      } else {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText((prev) => currentFullText.slice(0, prev.length + 1));
        } else {
          // Finished typing, pause then delete
          setIsPaused(true);
        }
      }
    }, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime, loop]);

  return currentText;
}


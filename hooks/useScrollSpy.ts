import { useState, useEffect } from 'react';
import { SECTION_IDS, SCROLL_THRESHOLD } from '@/constants/navigation';

export function useScrollSpy() {
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          for (const id of SECTION_IDS) {
            const el = document.getElementById(id);
            if (!el) continue;
            const rect = el.getBoundingClientRect();
            if (rect.top <= SCROLL_THRESHOLD && rect.bottom >= SCROLL_THRESHOLD) {
              setActive((prevActive) => {
                if (prevActive !== id) return id;
                return prevActive;
              });
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return active;
}


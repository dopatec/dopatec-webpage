import { useEffect, useRef, useState } from 'react';

type UseFadeInReturn = [React.RefObject<HTMLDivElement>, boolean];

export const useFadeIn = (options = {}): UseFadeInReturn => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once the animation is triggered, we can disconnect the observer
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      });
    }, options);

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [domRef, isVisible];
};

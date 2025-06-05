
import { useEffect, useRef } from 'react';

export const useIntersectionAnimation = (
  animationClass: string = 'animate-fade-in',
  threshold: number = 0.1
) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animationClass, threshold]);
  
  return elementRef;
};

export const useDelayedAnimation = (delay: number = 100) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (elementRef.current) {
        elementRef.current.style.opacity = '1';
      }
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return elementRef;
};

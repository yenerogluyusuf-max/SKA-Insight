import React, { useRef, useEffect } from 'react';

const AnimatedWrapper = ({ children, className = "", style = {}, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div 
      ref={ref} 
      style={{ 
        ...style, 
        transitionDelay: `${delay}ms` 
      }} 
      className={`opacity-0 translate-y-10 transition-all duration-700 ease-in-out ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;

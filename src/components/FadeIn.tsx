import React, { useState, useEffect, useRef, ReactNode } from "react";

interface FadeInSectionProps {
  delay?: string;
  children: ReactNode;
  width?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = (props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${props.delay}`, width: props.width || "100%"}}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeInSection;

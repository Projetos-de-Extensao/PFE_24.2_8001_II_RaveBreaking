import React, { useState, useRef } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Referência para o conteúdo

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className={`accordion ${isOpen ? "active" : ""}`} onClick={toggleAccordion}>
        {title}
      </button>
      <div
        ref={contentRef}
        className="panel"
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;

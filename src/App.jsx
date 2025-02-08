import { useState, useRef, useEffect } from "react";
import "./App.css"

export default function MeasureDiv() {
  const divRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (divRef.current) {
        setWidth(divRef.current.offsetWidth);
      }
    };

    updateWidth(); // Set initial width
    window.addEventListener("resize", updateWidth); // Update on resize

    return () => window.removeEventListener("resize", updateWidth); // Cleanup
  }, []);

  return (
    <div className="main-dev">
      <h2>Div Width: {width}px</h2>
      <div ref={divRef} className="measured-div">
        Full Width Div
      </div>
    </div>
  );
}

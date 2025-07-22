import React, { useState } from "react";

const StackedCard = ({img1, img2, img3}) => {
  const [divs, setDivs] = useState([
    { id: 1, rotate: 10, x: 10, y: 10, order: 1 , color: "#3498db", image: img1, isDragging: false },
    { id: 2, rotate: 15, x: 40, y: 40, order: 2 , color: "#e74c3c", image: img2, isDragging: false },
    { id: 3, rotate: 20, x: 70, y: 70, order: 3 , color: "#2ecc71", image: img3, isDragging: false },
  ]);

  const handleMouseDown = (id, e) => {
    setDivs(divs.map(div => 
      div.id === id 
        ? { ...div, order: 1 , isDragging: true, offsetX: e.clientX - div.x, offsetY: e.clientY - div.y } 
        : div
    ));
  };

  const handleMouseMove = (e) => {
    const draggedDiv = divs.find(div => div.isDragging);
    if (!draggedDiv) return;

    setDivs(divs.map(div =>
      div.id === draggedDiv.id
        ? { ...div, x: e.clientX - div.offsetX, y: e.clientY - div.offsetY }
        : div
    ));
  };

  const handleMouseUp = () => {
    setDivs(divs.map(div => ({ ...div, isDragging: false })));
  };

  return (
    <div
      className="relative h-[400px] w-[400px] translate-x-[20px] mx-auto"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {divs.map((div, index) => (
        <div
          key={div.id}
          style={{
            transform: `rotate(${div.rotate}deg)`,
            width: "200px",
            height: "200px",
            backgroundColor: div.color,
            color: "white",
            textAlign: "center",
            lineHeight: "150px",
            cursor: div.isDragging ? "grabbing" : "grab",
            position: "absolute",
            left: `${div.x}px`,
            top: `${div.y}px`,
            zIndex: index,
            userSelect: "none",
            borderRadius: "10px",
          }}
          onMouseDown={(e) => handleMouseDown(div.id, e)}
        >
          <img src={div.image} className="rounded-xl pointer-events-none" />
        </div>
      ))}
    </div>
  );
};

export default StackedCard;
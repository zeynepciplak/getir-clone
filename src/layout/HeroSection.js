import React from "react";
import Card from "../components/Card";

export const HeroSection = ({ hero, design, style }) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          {hero?.map((hero, index) => (
            <div
              key={hero?.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img src={hero?.img} className="d-block w-100" alt="..." />
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "100px",
        }}
      >
        <img style={style} src={design} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "10%",
          transform: "translateY(70%)",
          right: "100px",
          width: "30%",
        }}
      >
        <Card></Card>
      </div>
    </div>
  );
};

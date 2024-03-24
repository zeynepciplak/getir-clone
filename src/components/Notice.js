import React from "react";
import background from "../assets/partners-background.jpg";
export default function Notice({noticeTitle , noticeDesc }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        maxWidth: "1270px",
        borderRadius: "10px",
        margin: "0 auto",
        maxHeight: "300px",
        backgroundImage: `url(${background})`,
      }}
      className="d-flex flex-column flex-md-row justify-content-between align-items-center rounded-lg text-white mb-6 p-md-10 mt-2"
    >
      <div
        style={{ marginLeft: "4rem" }}
        className="d-flex flex-column gap-3 p-4  text-md-left"
      >
        <h3
          style={{ color: "#5D3EBC", fontWeight: "bold" }}
          className="text-2xl font-bold tracking-tight"
        >
          {noticeTitle}
        </h3>
        <p
          style={{ color: "#697488", fontWeight: "bold" }}
          className="text-base font-semibold"
        >
          {noticeDesc}
        </p>
      </div>
      <div className="pt-6 d-none d-md-block">
        <button
          style={{
            color: "#5D3EBC",
            backgroundColor: "#FFD300",
            height: "3rem",
          }}
          className="btn bg-brand-yellow w-100"
          type="button"
        >
          Hemen Başvur
        </button>
      </div>
    </div>
  );
}

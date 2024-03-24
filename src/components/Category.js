import React from "react";

export default function Category({ category: { id, title, image } }) {
  return (
    <a
      href="/"
      className="d-flex flex-column align-items-center text-center px-2 py-1"
      style={{ textDecoration: "none", margin: "0", padding: "0" }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "4rem", height: "4rem" }}
        className="rounded border border-gray-200"
      />
      <span style={{ color: "black", fontWeight: "bold" }}>{title}</span>
    </a>
  );
}

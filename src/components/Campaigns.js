import React from "react";

export default function Campaigns({card}) {



  return (
    <div className="container mx-auto md:pt-8 d-flex p-3 gap-4 justify-content-between h-100">
      {card?.length &&
        card?.map((cards) => (
          <div className="card" style={{ width: "25rem" }}>
            <img
              style={{ height: "10rem" }}
              src={cards?.image}
              className="card-img-top mt-5"
              alt="..."
            />
            <div className="card-body">
              <h5
                style={{ color: "#5D3EBC" }}
                className="card-text d-flex justify-content-center"
              >
                {cards?.title}
              </h5>
              <p
                style={{ color: "#697488" }}
                className="d-flex justify-content-center"
              >
                {cards?.description}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}

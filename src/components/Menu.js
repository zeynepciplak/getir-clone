import React from "react";

export default function Menu({ menus }) {
  return (
    <div className="container">
      <div className="row">
        {menus?.map((menu, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h5 style={{ color: "#5D3EBC" }}>{menu.title}</h5>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                {menu?.items.map((item, idx) => (
                  <li style={{ color: "#191919" }} className="mt-2" key={idx}>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

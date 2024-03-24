import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

export default function Card() {
const [selected, setSelected] = useState("TR");
const phones = {
  US: "+45",
  DE: "+65",
  TR: "+90",
  GB: "+256",
  FR: "+82",
  IT: "+27",
};

  return (
    <div className="card" style={{ height: "13rem"}}>
      <div className="card-body">
        <h6
          className="d-flex justify-content-center"
          style={{ color: "#5D3EBC" , fontWeight:"bold" }}
        >
          Giriş yap veya kayıt ol
        </h6>
        <div style={{marginTop:"1rem"}} className="d-flex justify-content-between align-items-start">
          <div className="flag-select-container" style={{ width: "30%" }}>
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
            </div>
          <div style={{ width: "60%" }} className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              style={{ height: "100%" }} 
            />
            <label htmlFor="floatingInput">Telefon Numarası</label>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            style={{ color: "#5D3EBC", backgroundColor: "#FFD300" , height:"3rem", fontWeight:"bold" }}
            className="btn bg-brand-yellow w-100" 
            type="button"
          >
            Telefon numarası ile devam et
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { BiGlobe } from "react-icons/bi";
import { RiUserFill, RiUserAddFill } from "react-icons/ri";

export default function Header() {
  const tabs = [
    { key: "0", name: "getir", href: "/" },
    { key: "1", name: "getiryemek", href: "/yemek" },
    { key: "2", name: "getirbüyük", href: "/buyuk" },
    { key: "3", name: "getirsu", href: "/su" },
    { key: "4", name: "getirçarşı", href: "/carsi" },
    { key: "5", icon: BiGlobe, name: " Türkçe (TR)", href: "#" },
    { key: "6", icon: RiUserFill, name: " Giriş yap", href: "#" },
    { key: "7", icon: RiUserAddFill, name: "Kayıt Ol", href: "#" },
  ];

  return (
    <div>
      <div
        className="nav nav-tabs"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center", 
          backgroundColor: "#4c3398",
          paddingRight: "100px",
          paddingLeft: "100px",
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "1000",
          borderColor:"transparent"
        }}
      >
        <div
          style={{
            listStyle: "none",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          {tabs.slice(0, 5).map((tab) => (
            <li  className="nav-item" key={tab.key}>
              <a className="nav-link" aria-current="page" href={tab.href}>
                {tab.name}
              </a>
            </li>
          ))}
        </div>
        <div className="d-flex">
          {tabs.slice(5).map((tab) => (
            <a
              key={tab.key}
              className="nav-link d-flex align-items-center"
              href={tab.href}
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <tab.icon style={{ marginRight: "5px" }} />
              {tab.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

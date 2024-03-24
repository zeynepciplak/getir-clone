
import Menu from "../components/Menu";
import footer from "../api/footer.json"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BiGlobe } from "react-icons/bi";
export default function Footer() {
 const [menus , setMenus] = useState([]);
 useEffect(()=> {
  setMenus(footer)
 },[])

  return (
    <div>
      <div className="container d-flex mt-4">
        <div className="row d-flex">
          <div className=" col-md col-sm-12">
            <h5 style={{ color: "#5D3EBC" }}>Getir'i indirin!</h5>
            <nav>
              <a href="/">
                <img
                  className="mt-1"
                  src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="mt-1"
                  src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className="mt-1"
                  src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                  alt=""
                />
              </a>
            </nav>
          </div>
        </div>
        <Menu menus={menus} />
        <div>
          <nav>
            <a href="/">
              <img
                style={{ width: "6rem" }}
                className="mt-1"
                src="https://cdn.getir.com/getirweb-images/common/etbis.png"
                alt=""
              />
            </a>
          </nav>
        </div>
      </div>
      <div className="container">
        <div className="d-flex flex-column flex-md-row gap-y-4 justify-content-between align-items-center border-top border-gray-200 mt-6 py-6">
          <div className="text-sm text-gray-700 d-flex gap-4">
            &copy; 2024 Getir
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: "#5D3EBC" }}
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="d-flex gap-3">
            <a
              href="/"
              className="w-8 h-8 rounded-circle text-gray-500 transition  hover-bg-opacity-10  d-flex align-items-center justify-content-center"
            >
              <FaFacebook size={21} style={{ color: "#666666" }} />
            </a>
            <a
              href="/"
              className="w-8 h-8 rounded-circle text-gray-500 transition  hover-bg-opacity-10  d-flex align-items-center justify-content-center"
            >
              <FaTwitter size={21} style={{ color: "#666666" }} />
            </a>
            <a
              href="/"
              className="w-8 h-8 rounded-circle text-gray-500 transition  hover-bg-opacity-10  d-flex align-items-center justify-content-center"
            >
              <FaInstagram size={21} style={{ color: "#666666" }} />
            </a>
            <a
              href="/"
              className="h-8 d-flex align-items-center px-2 border border-gray-100 rounded text-13px gap-2 text-gray-500 transition  hover-bg-opacity-10 "
              style={{ color: "#666666" }}
            >
              <BiGlobe size={18} style={{ color: "#666666" }} />
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
      <br />
    </div>
  );
}

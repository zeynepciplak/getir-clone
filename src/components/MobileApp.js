import background from "../assets/doodle.png"

export default function MobileApp({backgroundPhone}) {
  return (
    <div
      style={{
        backgroundColor: "#5D3EBC",
        maxWidth: "1270px",
        borderRadius: "10px",
        margin: "0 auto",
        maxHeight: "300px",
        backgroundImage: `url(${background})`,
      }}
      className="d-flex flex-column flex-md-row justify-content-between align-items-center rounded-lg text-white mb-6 p-md-10 mt-2"
    >
      <div className="d-flex flex-column gap-3 p-4  text-md-left">
        <h3 className="text-2xl font-bold tracking-tight">Getir'i indirin!</h3>
        <p className="text-base font-semibold">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
        </p>
        <nav className="mt-4 d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
          <a href="/" className="transition-all transform hover-scale-105">
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              className="h-8"
              alt="mobileApp"
            />
          </a>
          <a href="/" className="transition-all transform hover-scale-105">
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              className="h-8"
              alt="mobileApp"
            />
          </a>
          <a href="/" className="transition-all transform hover-scale-105">
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              className="h-8"
              alt="mobileApp"
            />
          </a>
        </nav>
      </div>
      <div className="pt-6 d-none d-md-block">
        <img
          src={backgroundPhone}
          alt="mobileApp"
          className="img-fluid"
        />
      </div>
    </div>
  );
}

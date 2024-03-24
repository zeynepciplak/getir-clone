import React, { useEffect, useState } from "react";
import { HeroSection } from "../layout/HeroSection";
import homepage from "../api/homepage.json"
import categoriesData from "../api/categories.json" 
import Categories from "../components/Categories";
import MobileApp from "../components/MobileApp";
import Campaigns from "../components/Campaigns";
import card from "../api/card.json"
export default function Homepage() {
  const header = "Kategoriler";
  const backgroundPhone =
    "https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png";
  const [hero, setHero] = useState([]);

  useEffect(() => {
    setHero(homepage);
  },[]);
  const design =
    "https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg";

  const style = { height: "auto", witdh: "auto" };

  return (
    <div>
      <HeroSection hero={hero} style={style} design={design} />
      <div>
        <Categories header={header} categoryData={categoriesData} />
      </div>
      <MobileApp backgroundPhone={backgroundPhone} />
      <div>
        <Campaigns card={card} />
      </div>
    </div>
  );
}

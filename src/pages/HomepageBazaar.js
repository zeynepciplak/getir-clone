import React, { useEffect, useState } from "react";
import homepageBazaar from "../api/homepageBazaar.json";
import { HeroSection } from "../layout/HeroSection";
import Categories from "../components/Categories";
import MobileApp from "../components/MobileApp";
import categoryData from "../api/categoriesBazaar.json";
import Campaigns from "../components/Campaigns";
import card from "../api/campaignsBazaar.json"
import Notice from "../components/Notice";
export default function HomepageBazaar() {
  const noticeTitle = " İşletme sahibi misin?";
  const noticeDesc =
    "GetirÇarşı işletme iş ortaklarından biri ol, işini daha az maliyetle büyüt, müşteri memnuniyetini artır.";
  const [hero, setHero] = useState([]);
  const header = "İşletme Kategorileri";
  const backgroundPhone =
    "https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png";
  useEffect(() => {
    setHero(homepageBazaar);
   
  }, []);
  const style = { width: "20rem", height: "5rem" };
  const design = "";
  
  return (
    <div>
      <HeroSection style={style} design={design} hero={hero} />
      <div>
        <Categories header={header} categoryData={categoryData} />
      </div>
      <MobileApp backgroundPhone={backgroundPhone} />
      <div>
        <Campaigns card={card}/>
      </div>
      <Notice noticeTitle={noticeTitle} noticeDesc={noticeDesc}/>
    </div>
  );
}

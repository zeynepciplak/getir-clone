import React, { useEffect, useState } from "react";
import { HeroSection } from "../layout/HeroSection";
import homepageFood  from '../api/homepageFood.json'
import Categories from "../components/Categories";
import MobileApp from "../components/MobileApp";
import Campaigns from "../components/Campaigns";
import card from "../api/campaignsFood.json";
import Notice from "../components/Notice";

export default function HomepageFood() {
  const [hero , setHero] = useState([])
  const noticeTitle = " Restoran sahibi misiniz?";
  const noticeDesc = "GetirYemek restoran iş ortaklarından biri olun, işinizi daha az maliyetle büyütün, müşteri memnuniyetini artırın."
  const backgroundPhone =
    "https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png";
  useEffect(()=> {
    setHero(homepageFood)
  },[])
  const design = "";
  return (
    <div>
      <HeroSection design={design} hero={hero} />
      <div>
        <Categories />
      </div>
      <div>
        <Campaigns card={card} />
      </div>
      <div>
        <Notice noticeTitle={noticeTitle} noticeDesc={noticeDesc} />
      </div>
      <MobileApp backgroundPhone={backgroundPhone} />
    </div>
  );
}

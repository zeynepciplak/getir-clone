import React, { useState } from 'react'
import homepageWater from "../api/homepageWater.json"
import { HeroSection } from '../layout/HeroSection'
import Categories from '../components/Categories'
import MobileApp from '../components/MobileApp'

export default function HomepageWater() {
    const [hero , setHero] = useState([])
    const backgroundPhone =
      "https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png";
    useState(()=>{
        setHero(homepageWater)
    }, [])
    const design = "";
  return (
    <div>
      <HeroSection design={design} hero={hero} />
      <div>
        <Categories />
      </div>
      <MobileApp backgroundPhone={backgroundPhone} />
    </div>
  );
}

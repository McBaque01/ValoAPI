import { useState, useEffect} from "react";
import {SprayUI} from "../spray/SprayUI"

import fetchSpray from "../APIs/fetchSpray";

import { SprayType } from "../typings/sprayTypes";

export const SprayHero = () => {

  const [Sprays, setSprays] = useState<SprayType[] | null>(null)

  useEffect(() => {
    const fetchSprayData = async () => {
        try {
            const SprayData = await fetchSpray();
            setSprays(SprayData);
        } catch (error) {
            console.error('Error fetching agents:', error);
        }
    };
    fetchSprayData();
  }, []);

  // console.log(Sprays)

  return (
    <div className="w-full h-screen">
      <SprayUI Sprays={Sprays}/>
    </div>
  )
}

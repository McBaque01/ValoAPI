import {useEffect, useState} from "react";

import fetchBuddies from "../APIs/fetchBuddies";
import { BuddyType } from "../typings/buddiesTypes";
import { BuddiesUI } from "./BuddiesUI";
export const BuddiesHero = () => {

  const [Buddies, setBuddies] = useState<BuddyType[] | null>(null)

  useEffect(() => {
    const fetchBuddiesData = async () => {
        try {
            const buddiesData = await fetchBuddies();
            setBuddies(buddiesData);
        } catch (error) {
            console.error('Error fetching agents:', error);
        }
    };
    fetchBuddiesData();
  }, []);

console.log(Buddies)

  return (
    <>
        <BuddiesUI Buddies={Buddies}/>
    </>

  )
} 

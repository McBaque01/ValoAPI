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
        <BuddiesUI/>
    </>

  //   <div className="w-full h-screen relative 
  //   after:content-[''] 
  //   after:absolute 
  //   after:w-full 
  //   after:h-full
  //   after:bg-[url('../src/assets/images/PearlMap.png')] 
  //   after:bg-cover 
  //   after:bg-no-repeat 
  //   after:bg-center
  //   after:top-0
  //   after:left-0
  //   after:brightness-[0.15]
  //   "
  // >



  //   <div className="w-[90%] h-screen bg-black relative flex">Hiasdasd</div> */}
  //   <div className="w-full h-full bg-white p-2">
  //     {Buddies && Buddies.length > 0 && Buddies.map((Buddy) =>(
  //       <div key={Buddy.uuid} className="text-ValoYellow">
  //         <h1>{Buddy.levels?.displayName}</h1>
  //       </div>
  //     ))}
  //   </div>

    
  //     {Buddies && Buddies.length > 0 && Buddies.map((Buddy) =>(
  //       <div key={Buddy.uuid} className="text-ValoYellow">
  //         <h1>{Buddy.levels?.displayName}</h1>
  //       </div>
  //     ))}


     
  //   </div>
  )
} 

import { useState, useEffect} from "react";
import { TitleUI } from "./TitleUI";
import fetchTitle from "../APIs/fetchTitle";

import { titleType } from "../typings/titleTypes";


export const TitleHero = () => {

  const [Titles, setTitles] = useState<titleType[] | null>(null)

  useEffect(() => {
    const fetchTitleData = async () => {
        try {
            const TitleData = await fetchTitle();
            setTitles(TitleData);
        } catch (error) {
            console.error('Error fetching agents:', error);
        }
    };
    fetchTitleData();
  }, []);

  // console.log(Sprays)

  return (
    <div className="w-full h-screen">
      <TitleUI Titles={Titles}/>
    </div>
  )
}
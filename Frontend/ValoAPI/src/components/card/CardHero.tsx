import { useState, useEffect} from "react";
import { CardUI } from "./CardUI"
import { CardType } from "../typings/cardTypes";
import fetchCards from "../APIs/fetchCards";

export const CardHero = () => {

  const [Cards, setCards] = useState<CardType[] | null>(null)

  useEffect(() => {
    const fetchCardsData = async () => {
        try {
            const CardsData = await fetchCards();
            setCards(CardsData);
        } catch (error) {
            console.error('Error fetching agents:', error);
        }
    };
    fetchCardsData();
  }, []);

    // console.log(Cards)

  return (
    <div className="w-full h-screen">
      <CardUI Cards={Cards}/>
    </div>
  )
}

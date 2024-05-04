import React, { useEffect} from 'react'
import { CardType } from '../typings/cardTypes';

interface SearchPropsType{
    Cards: CardType[] | null;
    Search: string;
    setResult:(newValue: CardType[] | []) => void;
}

export const SearchCard: React.FC<SearchPropsType>= ({Cards, Search, setResult}) => {

    const filterData = () => {
        const filteredResults = Cards?.filter((Card) =>
        
        Card.displayName.toLowerCase().includes(Search.toLowerCase())
        )|| [];
        // console.log(filteredResults)
        setResult(filteredResults);
    };
  
  useEffect(() => {
  
    filterData();
  }, [Search]);
  
  return null
}

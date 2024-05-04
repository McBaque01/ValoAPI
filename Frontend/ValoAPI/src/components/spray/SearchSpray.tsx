import React, { useEffect} from 'react'
import { SprayType } from '../typings/sprayTypes';

interface SearchPropsType{
    Sprays: SprayType[] | null;
    Search: string;
    setResult:(newValue: SprayType[] | []) => void;
}

export const SearchSpray: React.FC<SearchPropsType>= ({Sprays, Search, setResult}) => {

    const filterData = () => {
        const filteredResults = Sprays?.filter((Spray) =>  
        Spray.displayName.toLowerCase().includes(Search.toLowerCase())
        )|| [];
        // console.log(filteredResults)
        setResult(filteredResults);
    };
  
  useEffect(() => {
    filterData();
  }, [Search]);
  
  return null
}

import React, { useEffect} from 'react'
import { titleType } from '../typings/titleTypes';

interface SearchPropsType{
    Titles: titleType[] | null;
    Search: string;
    setResult:(newValue: titleType[] | []) => void;
}

export const SearchTitle: React.FC<SearchPropsType>= ({Titles, Search, setResult}) => {
   
    const filterData = () => {
    
        try {
            if (Titles) {
              const filteredResults = Titles.filter((Title) =>  
               
                Title && Title.displayName && Title.displayName.toLowerCase().includes(Search.toLowerCase())
              );
              setResult(filteredResults);
            }
          } catch (error) {
            console.log(error);
          }
      
    };
  
  useEffect(() => {
    filterData();
  }, [Search]);
  
  return null
}
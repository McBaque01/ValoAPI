import React, { useEffect} from 'react'
import { BuddyType } from '../typings/buddiesTypes'



interface SearchPropsType{
    Buddies: BuddyType[] | null;
    Search: string;
    setResult:(newValue: BuddyType[] | []) => void;
}

export const SearchBuddy: React.FC<SearchPropsType>= ({Buddies, Search, setResult}) => {


    const filterData = () => {
        const filteredResults = Buddies?.filter((Buddy) =>
        Buddy.displayName.toLowerCase().includes(Search.toLowerCase())
        )|| [];
        // console.log(filteredResults)
        setResult(filteredResults);
    };
  
  useEffect(() => {
  
    filterData();
  }, [Search]);
  
  return null
}

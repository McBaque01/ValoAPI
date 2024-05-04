import { useState,useEffect,Suspense ,useDeferredValue} from "react";
import { CardType } from '../typings/cardTypes'

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { ParentLoading } from "../utils/ParentLoading";
import { SearchCard } from "./SearchCard";

interface CardsProps {
    Cards: CardType[] | null;
}

interface CurrCardType {
    CurrCard: CardType | null;
    Card: string | null;
    Name: string | null;
}

export const CardUI: React.FC<CardsProps> = ({Cards}) => {

    const [currCard, setcurrCard] = useState<CurrCardType | null>(null);
    const [Search, setSearch] = useState<string>("");
    const [Result, setResult] = useState<CardType[] | []>([])
    const deferredSearch = useDeferredValue(Search);

    useEffect(()=>{
        setcurrCard({
           CurrCard:Cards && Cards[0],
           Card:Cards && Cards[0].largeArt,
           Name:Cards && Cards[0].displayName,
        })
    },[Cards])

    // console.log(Cards)


    const handleSize = (Size: string) => {
        setcurrCard(prevState => ({
          ...prevState,
          Card: Size,
        }) as CurrCardType | null);
      };


  return (
    <div className="flex flex-row bg-gray-900 p-4 relative z-10 w-full h-screen gap-2 sm:flex-col md:flex-col lg:flex-col sm:pt-14 lg:pt-14 md:pt-14 xl:flex-row-reverse 2xl:flex-row-reverse">
          
            <div className="w-full h-full sm:h-[60%] md:h-[60%] lg:h-[60%] relative flex flex-col gap-2 items-end overflow-hidden">
                    <div className="w-fit h-fit relative right-0 sm:w-full">
                        <input type="text" placeholder="Search" value={Search} onChange={(e)=>setSearch(e.target.value)} className="w-[20em] sm:w-full p-4 border-0 bg-gray-800 focus:border-none focus:outline-none border-none font-DinRegular text-slate-300"/>
                        <SearchCard Cards={Cards} Search={deferredSearch} setResult={setResult}/>
                    </div> 

                    <div className="bg-gray-800 w-full h-full relative z-10 flex justify-center items-center overflow-hidden p-4">
                    <h1 className="absolute top-0 font-Tungsten font-normal uppercase text-[3em] lg:text-[2em] md:text-[2em] z-10 sm:text-[2em] text-ValoYellow tracking-widest hover:text-ValoGreen">{currCard?.Name}</h1>
                    

                         <LazyLoadImage src={currCard && currCard.Card ? currCard.Card : undefined} alt={currCard && currCard.Name ? currCard.Name : undefined}
                            className='object-contain hover:-translate-y-2 transition-all relative  bg-white
                           
                             max-h-[90%]  max-w-full
                             xl:max-h-[90%] xl:max-w-full 
                             2xl:max-h-[90%] 2xl:max-w-full 
                           '/>
                    </div>

                    <div className="absolute bottom-2 right-2 z-10 p-2 flex gap-8">
                        <button className="  text-[1.4em] font-DinHeavy text-ValoGreen hover:text-ValoRed" onClick={() => handleSize(currCard && currCard.CurrCard ? currCard?.CurrCard?.smallArt : "") }>S</button>
                        <button className="  text-[1.2em] font-DinHeavy text-ValoGreen hover:text-ValoRed" onClick={() => handleSize(currCard && currCard.CurrCard ? currCard?.CurrCard?.wideArt : "")}>W</button>
                        <button className="  text-[1.2em] font-DinHeavy text-ValoGreen hover:text-ValoRed" onClick={() => handleSize(currCard && currCard.CurrCard ? currCard?.CurrCard?.largeArt : "")}>L</button>
                    </div>
                    
            </div>

            
            
          
          
            <div className="w-full h-full sm:h-[40%] md:h-[40%] lg:h-[40%] bg-gray-800 overflow-hidden relative gap-2 flex flex-col p-2 2xl:w-[80%] xl:w-[80%] text-center">
                <Suspense fallback={<ParentLoading/>}>
                <div className="relative h-full overflow-x-hidden text-center w-full flex justify-center overflow-y-scroll">

                    {Search && Search.length > 0 && Search !== "" 
                        ? 
                        <>
                            {Array.isArray(Result) && Result.length !== 0 
                            ?
                            <div className=' flex flex-row flex-wrap w-full h-fit justify-center gap-2 min-w-[24em]'>
                                {Result && Result.length > 0 && Result.map((Card, uuid) => (
                                <div key={uuid} className="text-ValoYellow relative flex justify-center bg-gray-700 w-[5em] h-[5em] p-1 hover:-translate-y-1 transition-all" 
                                 onClick={()=>{setcurrCard({
                                    CurrCard: Card,
                                    Card:Card.largeArt,
                                    Name:Card.displayName,
                                 })}}>   
                                <LazyLoadImage src={Card.displayIcon} alt={Card.displayName}
                                className='object-contain max-w-full max-h-full relative'/>
                
                            </div>
                                ))}
                            </div>
                            :
                            <>
                                <p className="text-[2em] p-4 uppercase text-ValoYellow font-Valorant">No Match found!</p>
                            </>
                            
                            }
                        </>
                        :
                            
                        <div className=' flex flex-row flex-wrap w-full h-fit justify-center gap-2 min-w-[24em]'>
                           {Cards && Cards.length > 0 && Cards.map((Card, uuid) => (
                            <div key={uuid} className="text-ValoYellow relative flex justify-center bg-gray-700 w-[5em] h-[5em] p-1 hover:-translate-y-1 transition-all" 
                            onClick={()=>{setcurrCard({
                                CurrCard: Card,
                                Card:Card.largeArt,
                                Name:Card.displayName,
                             })}}>
                             <LazyLoadImage src={Card.displayIcon} alt={Card.displayName}
                            className='object-contain max-w-full max-h-full relative'/>
                
                            </div>
                            ))}
                        </div>
                        
                    }
                </div>
                </Suspense>

            </div>

         
         

        
     
    </div>
  )
}

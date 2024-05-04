
import { useState,useEffect,Suspense ,useDeferredValue} from "react";
import { BuddyType } from "../typings/buddiesTypes"

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { SearchBuddy } from "./SearchBuddy";
import { ParentLoading } from "../utils/ParentLoading";


interface BuddyPropsTypes{
  Buddies: BuddyType[] | null;
}

export const BuddiesUI:  React.FC<BuddyPropsTypes> = ({Buddies}) => {

const [CurrBuddy, setCurrBuddy] = useState<BuddyType | null>(null);
const [Search, setSearch] = useState<string>("");
const [Result, setResult] = useState<BuddyType[] | []>([])
const deferredSearch = useDeferredValue(Search);

const setCurrentBuddy = (currBuddy: BuddyType | null):void =>{
  setCurrBuddy(currBuddy);
}

useEffect(()=>{
setCurrentBuddy(Buddies && Buddies[0])
},[Buddies])

// console.log(Result,"THIS IS NEW RESULT")

// console.log(Buddies);
  return (
    <div className="w-full h-fit after:content-[''] 
    after:absolute 
    after:w-full 
    after:h-full
    after:bg-[url('../src/assets/images/PearlMap.png')] 
    after:bg-cover 
    after:bg-no-repeat 
    after:bg-center
    after:top-0
    after:left-0
    after:brightness-[0.15]
    "
    >

        <div className="flex flex-row bg-gray-900 p-4 relative z-10 w-full h-screen gap-2 sm:flex-col md:flex-col lg:flex-col sm:pt-14 lg:pt-14 md:pt-14 xl:flex-row-reverse 2xl:flex-row-reverse">
          
          <div className="w-full h-full sm:h-[60%] relative flex flex-col gap-1 items-end">
                <div className="w-fit h-fit relative right-0 sm:w-full">
                    <input type="text" placeholder="Search" value={Search} onChange={(e)=>setSearch(e.target.value)} className="w-[20em] sm:w-full p-4 border-0 bg-gray-800 focus:border-none focus:outline-none border-none font-DinRegular text-slate-300"/>
                    <SearchBuddy Buddies={Buddies} Search={deferredSearch} setResult={setResult}></SearchBuddy>
                </div>

                <div className="bg-gray-800 w-full h-full relative z-10 flex justify-center items-center">
                  <h1 className="absolute top-[1em] font-Tungsten font-normal uppercase text-[3em] lg:text-[2em] md:text-[2em] sm:text-[2em] text-ValoYellow tracking-widest hover:text-ValoGreen">{CurrBuddy?.displayName}</h1>
                    <LazyLoadImage src={CurrBuddy?.displayIcon} alt={CurrBuddy?.displayName}
                    className=' object-contain min-w-[8em] min-h-[8em] 2xl:min-h-[12em] 2xl:min-w-[12em] hover:-translate-y-2 transition-all relative'/>
                </div>
          </div>
            
          
          
          <div className="w-full h-full sm:h-[40%] bg-gray-800 overflow-hidden relative gap-2 flex flex-col p-2 2xl:w-[80%] xl:w-[80%] text-center">
            <Suspense fallback={<ParentLoading/>}>
              <div className="relative h-full overflow-x-hidden text-center w-full flex justify-center overflow-y-scroll">

                  {Search && Search.length > 0 && Search !== "" 
                    ? 
                      <>
                        {Array.isArray(Result) && Result.length !== 0 
                        ?
                          <div className='grid grid-cols-8 gap-2 bg-black lg:grid-cols-10 md:grid-cols-8 sm:grid-cols-5 p-2 place-content-center'>
                            {Result && Result.length > 0 && Result.map((Buddy, uuid) => (
                              <div key={uuid} className="text-ValoYellow relative flex justify-center p-3 bg-gray-700" onClick={()=>setCurrentBuddy(Buddy)}>
                              <LazyLoadImage src={Buddy.displayIcon} alt={Buddy.displayName}
                              className=' object-contain max-w-[10em] max-h-[5em] hover:-translate-y-2 transition-all relative'/>
                  
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
                    {Buddies && Buddies.length > 0 && Buddies.map((Buddy, uuid) => (
                      <div key={uuid} className="text-ValoYellow relative flex justify-center p-3 w-[5em] h-[5em] bg-ValoGreen bg-opacity-10 hover:bg-opacity-100" onClick={()=>setCurrentBuddy(Buddy)}>
                      <LazyLoadImage src={Buddy.displayIcon} alt={Buddy.displayName}
                      className='object-contain w-full h-full hover:-translate-y-2 transition-all relative'/>
         
                     </div>
                     ))}
                 </div>
              
                  }
              </div>
            </Suspense>

          </div>

         
         

        
      </div>
    </div>
  )
}

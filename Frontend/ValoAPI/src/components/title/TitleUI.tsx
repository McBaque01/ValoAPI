import React,{useState, useDeferredValue, useEffect, Suspense} from 'react'

import { ParentLoading } from '../utils/ParentLoading';

import { titleType } from '../typings/titleTypes';
import { SearchTitle } from './SearchTitle';

interface TitleProps {
    Titles: titleType[] | null;
}

export const TitleUI: React.FC<TitleProps> = ({Titles}) => {

    const [currTitle, setcurrTitle] = useState<titleType | null>(null);
    const [Search, setSearch] = useState<string>("");
    const [Result, setResult] = useState<titleType[] | []>([])
    const deferredSearch = useDeferredValue(Search);

    useEffect(()=>{
        setcurrTitle(Titles && Titles[0])
    },[Titles])


    console.log(currTitle)
    console.log(Titles)
    console.log(Result,"RESULLLT")
  return (
    <div className="flex flex-col bg-gray-900 p-4 relative z-10 w-full h-screen gap-2 sm:pt-14 lg:pt-14 md:pt-14">
          
          <div className="w-full h-[30%] relative flex flex-col gap-1 items-end">
                <div className="w-fit h-fit relative right-0 sm:w-full">
                    <input type="text" placeholder="Search" value={Search} onChange={(e)=>setSearch(e.target.value)} className="w-[20em] sm:w-full p-4 border-0 bg-gray-800 focus:border-none focus:outline-none border-none font-DinRegular text-slate-300"/>
                    <SearchTitle Titles={Titles} Search={deferredSearch} setResult={setResult}/>
                </div>

                <div className="bg-gray-800 w-full h-full relative z-10 flex justify-center items-center text-center ">
                  <h1 className="absolute top-[1em] font-Tungsten font-normal uppercase text-[3em] lg:text-[2em] md:text-[2em] sm:text-[2em] text-ValoYellow tracking-widest hover:text-ValoGreen px-4">
                    {currTitle?.titleText}
                    </h1>
                    
                </div>
          </div>
            
          
          
            <div className="w-full h-[70%] bg-gray-800 overflow-hidden relative gap-2 flex flex-col p-2 text-center">
                <Suspense fallback={<ParentLoading/>}>
                <div className="relative h-full overflow-x-hidden text-center w-full flex justify-center overflow-y-scroll">

                    {Search && Search.length > 0 && Search !== "" 
                        ? 
                        <>
                            {Array.isArray(Result) && Result.length !== 0 
                            ?
                            <div className=' flex flex-row flex-wrap w-full h-fit justify-center gap-2 min-w-[24em] '>
                                 {Result && Result.length > 0 && Result.map((Title, uuid) => (
                                    <div key={uuid} className="text-ValoYellow relative flex justify-center p-1 xl:min-w-[25%] 2xl:min-w-[25%] lg:min-w-[30%] md:min-w-[40%] sm:min-w-full h-fit bg-ValoGreen bg-opacity-10 hover:bg-opacity-100 transition-all  hover:bg-slate-300 hover:text-ValoDark hover:scale-105" onClick={()=>setcurrTitle(Title)}>
                                    <h1 className=" font-Tungsten font-normal uppercase text-[1em] tracking-widest px-4 transition-all hover:bg-slate-300 hover:text-ValoDark hover:scale-105">
                                    {Title?.displayName}
                                    </h1>

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

                        <div className='flex flex-row flex-wrap w-full h-fit justify-center gap-2 min-w-[24em]'>
                            {Titles && Titles.length > 0 && Titles.map((Title, uuid) => (

                                Title.displayName !== null ?

                                    <div key={uuid} className="text-ValoYellow relative flex justify-center p-1 xl:min-w-[33%] 2xl:min-w-[33%] lg:min-w-[40%] md:min-w-[45%] sm:min-w-full h-fit bg-ValoGreen bg-opacity-10 hover:bg-opacity-100  transition-all hover:bg-slate-300 hover:text-ValoDark hover:scale-105" onClick={()=>setcurrTitle(Title)}>
                                        <h1 className=" font-Tungsten font-normal uppercase text-[1em] tracking-widest transition-all hover:bg-slate-300 hover:text-ValoDark hover:scale-105">
                                            {Title?.displayName}
                                        </h1>
                    
                                    </div> 
                                :
                                    null

                                // <div key={uuid} className="text-ValoYellow relative flex justify-center p-1 xl:min-w-[30%] 2xl:min-w-[30%] lg:min-w-[30%] md:min-w-[40%] sm:min-w-full h-fit bg-ValoGreen bg-opacity-10 hover:bg-opacity-100  hover:-translate-y-1 transition-all hover:bg-slate-300 hover:text-ValoDark" onClick={()=>setcurrTitle(Title)}>
                                //         <h1 className=" font-Tungsten font-normal uppercase text-[1em] tracking-widest">
                                //         {Title?.displayName}

                                //         </h1>
                    
                                //     </div> 

                                
                            ))}
                        </div>
                
                    }
                </div>
                </Suspense>

            </div>

        </div>
  )
}

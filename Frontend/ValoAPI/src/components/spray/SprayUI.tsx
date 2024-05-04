import React,{useState, useDeferredValue, useEffect, Suspense} from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ParentLoading } from '../utils/ParentLoading';

import {SprayType} from "../typings/sprayTypes"
import { SearchSpray } from './SearchSpray';

    interface SprayProps {
        Sprays: SprayType[] | null;
    }
    
    export const SprayUI: React.FC<SprayProps>= ({Sprays}) => {

        const [currSpray, setcurrSpray] = useState<SprayType | null>(null);
        const [Search, setSearch] = useState<string>("");
        const [Result, setResult] = useState<SprayType[] | []>([])
        const deferredSearch = useDeferredValue(Search);

        useEffect(()=>{

            setcurrSpray(Sprays && Sprays[0])

        },[Sprays])

        // console.log(Sprays)
        // console.log(currSpray, "CurrSPRAY!")
      return (
        <div className="flex flex-row bg-gray-900 p-4 relative z-10 w-full h-screen gap-2 sm:flex-col md:flex-col lg:flex-col sm:pt-14 lg:pt-14 md:pt-14 xl:flex-row-reverse 2xl:flex-row-reverse">
          
          <div className="w-full h-full sm:h-[60%] relative flex flex-col gap-1 items-end">
                <div className="w-fit h-fit relative right-0 sm:w-full">
                    <input type="text" placeholder="Search" value={Search} onChange={(e)=>setSearch(e.target.value)} className="w-[20em] sm:w-full p-4 border-0 bg-gray-800 focus:border-none focus:outline-none border-none font-DinRegular text-slate-300"/>
                    <SearchSpray Sprays={Sprays} Search={deferredSearch} setResult={setResult}/>
                </div>

                <div className="bg-gray-800 w-full h-full relative z-10 flex justify-center items-center">
                  <h1 className="absolute top-[1em] font-Tungsten font-normal uppercase text-[3em] lg:text-[2em] md:text-[2em] sm:text-[2em] text-ValoYellow tracking-widest hover:text-ValoGreen">
                    {currSpray?.displayName}
                    </h1>
                    <LazyLoadImage src=
                    {currSpray && currSpray.animationPng !== null ? 
                        currSpray?.animationPng 
                        :
                        currSpray?.fullTransparentIcon
                    } alt={currSpray?.displayName} 
                    className=' object-contain min-w-[8em] min-h-[8em] max-w-[80%] max-h-[80%] 2xl:min-h-[15em] 2xl:min-w-[15em] hover:-translate-y-2 transition-all relative '/>
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
                            <div className=' flex flex-row flex-wrap w-full h-fit justify-center gap-2 min-w-[24em] '>
                                {Result && Result.length > 0 && Result.map((Spray, uuid) => (
                                <div key={uuid} className="text-ValoYellow relative flex justify-center p-1 w-[5em] h-[5em] bg-ValoGreen bg-opacity-10 hover:bg-opacity-100  hover:-translate-y-2 transition-all" onClick={()=>setcurrSpray(Spray)}>
                                <LazyLoadImage src={Spray.displayIcon} alt={Spray.displayName}
                                    className='object-contain w-full h-full relative'/>
                
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
                            {Sprays && Sprays.length > 0 && Sprays.map((Spray, uuid) => (
                            <div key={uuid} className="text-ValoYellow relative flex justify-center p-1 w-[5em] h-[5em] bg-ValoGreen bg-opacity-10 hover:bg-opacity-100  hover:-translate-y-2 transition-all" onClick={()=>setcurrSpray(Spray)}>
                            <LazyLoadImage src={Spray.displayIcon} alt={Spray.displayName}
                            className='object-contain w-full h-full relative'/>
                
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
    
import React from 'react'
import { chromasType } from '../typings/weaponTypes'

interface ChromasComponentType{
    chromas: chromasType[] | null | undefined;
    // handleWeaponSkin: (displayname: string, imagePath:string | null ) => void;
    handleDisplay: (displayname: string, imagePath:string | null ) => void;
}
export const Chromas: React.FC<ChromasComponentType> = ({chromas, handleDisplay}) => {

    console.log(chromas,"CHROMAS")
  return (
    <div className='flex flex-row  absolute bottom-1 left-1 gap-2 z-30'>
        {chromas && chromas.length >= 2 && chromas.map(chroma => (
            <div onClick={()=>(handleDisplay(chroma.displayName, chroma.fullRender))} className='hover:grow-1 grow-0'>
                
                <div className="w-[2.5em]">
                    <img className="h-auto max-w-full" src={chroma.swatch || undefined} alt="image description"/>
                </div>

            </div>
        ))}
        
    </div>
  )
}

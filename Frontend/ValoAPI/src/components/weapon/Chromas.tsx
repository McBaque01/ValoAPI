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
    <div>
        {chromas && chromas.length >= 2 && chromas.map(chroma => (
            <div onClick={()=>(handleDisplay(chroma.displayName, chroma.fullRender))}>
                {chroma.displayName}
                <div className="w-[4em]">
                    <img className="h-auto max-w-full" src={chroma.swatch || undefined} alt="image description"/>
                </div>

            </div>
        ))}
        
    </div>
  )
}

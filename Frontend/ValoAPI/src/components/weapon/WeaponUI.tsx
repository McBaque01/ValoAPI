import React, {useState, useEffect}from 'react'
import { WeaponType,  chromasType,  skinsType } from '../typings/weaponTypes'
import { Chromas } from './Chromas'

import { Icon } from '@iconify/react';

interface WeaponUITypes{
    Weapon: weaponTriggerType,
    handleWeapon: (weapon?: WeaponType | undefined) => void;
}

interface weaponTriggerType{
    weaponData: WeaponType | null;
    isTrigger: boolean;
}

interface currSkinType {
  skins: skinsType | null;
  displayName: string;
  imagePath: string | null;
}



const handleSkin = (skins: skinsType[] | null) => {

  if(skins){
    for(let i = 0; i < skins.length; i++){
      if(skins && skins[i].displayName.includes("Standard")){
        skins.unshift(skins[i]);
        skins.splice(i + 1,1)
        break;
      }else{
        continue;
      }
    }
  }

  removeRandomSkin(skins);
  
}

const removeRandomSkin = (skins: skinsType[] | null) =>{
  if(skins){
    for(let i = 0; i < skins.length; i++){
      if(skins && skins[i].displayName.includes("Random")){
        skins.splice(i,1)
        break;
      }else{
        continue;
      }
    }
  }
}


export const WeaponUI : React.FC<WeaponUITypes> = ({Weapon, handleWeapon}) => {

  const WeaponData = Weapon.weaponData;
console.log(WeaponData, "Initial Weapon DATA")
  
  const [currSkin, SetCurrSkin] = useState<currSkinType>({
    skins: null,
    displayName: "",
    imagePath: "",
   
  });

  const [currChroma, setCurrChroma] = useState<chromasType[] | null | undefined>(null);

  useEffect(() =>{
   
    handleSkin(WeaponData ? WeaponData.skins : null);
  
    SetCurrSkin({
        skins: WeaponData ? WeaponData.skins[0] : null,
        displayName: WeaponData ? WeaponData.skins[0]?.displayName : "",
        imagePath: WeaponData ? WeaponData.skins[0]?.chromas[0].fullRender : "",
      });
      setCurrChroma(WeaponData ? WeaponData.skins[0]?.chromas : null);
  
  


  // SetCurrSkin(WeaponData ? WeaponData.skins[0] : null)
},[Weapon])

  const handleWeaponSkin = (displayname: string, image: string | null, currentChroma?: chromasType[]) => {
   SetCurrSkin(prevState => ({
    ...prevState,
    displayName: displayname,
    imagePath:image
    }))
    setCurrChroma(currentChroma)
  }


  const handleDisplay = (displayname: string, image: string | null,) =>{
    SetCurrSkin(prevState => ({
      ...prevState,
      displayName: displayname,
      imagePath:image,
      }))
  }

  
  console.log(Weapon, "WEAPON!");
  console.log(WeaponData !== null && WeaponData.skins, "WEAPONS DATA!");
  console.log(currSkin, "Current SKIN!")
  console.log(currChroma, "CHROOOMAS")
  return (
    <div className={`${!Weapon.isTrigger?"hidden":"relative"} w-full h-screen bg-ValoDarkViolet z-50 py-4`}> 

        <div onClick={()=>handleWeapon()} className=' w-fit h-fit absolute top-0 right-6 z-40'>
          <Icon icon="mdi:close-thick" width="30" height="50" color='#fd4556' />
        </div>

      <div className='relative p-4'>

        {currSkin && currSkin !== null && currSkin.displayName}
        <div className="bg-white bg-opacity-5 relative flex justify-center h-[20em] p-[5em]">
            <img className="h-[14em] min-w-[25em] max-w-[30em] object-contain" src={currSkin.imagePath || undefined} alt="image description"/>
            <Chromas chromas={currChroma} handleDisplay={handleDisplay}/>
        </div>
       

      </div>


      <div>

        <div>

          <div>

          </div>

          <div>
            
          </div>



        </div>

      
          <div className='flex flex-row gap-2 flex-nowrap overflow-x-scroll p-2 relative left-10'>
          {WeaponData && WeaponData.skins !== null && WeaponData.skins.map((skin,id )=> (
            <div key={id} className='bg-red-300 relative min-w-[10em]' onClick={()=>{handleWeaponSkin(skin.displayName, skin.chromas[0].fullRender, skin.chromas)}}>
              <div>
                <img  src={skin.chromas[0].fullRender} alt={skin.displayName} />
              </div>
              <p>{skin.displayName}</p>
            </div>
          ))}
          </div>
       


      </div>















    
      

    
  </div> 
  )
}

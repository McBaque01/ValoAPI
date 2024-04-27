import React, {useState, useEffect, useRef}from 'react'
import { WeaponType,  chromasType,  skinsType } from '../typings/weaponTypes'
import { Chromas } from './Chromas'

import { Icon } from '@iconify/react';
import axios from 'axios';

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
  contentTier: ContentTierType | null;
}

interface ContentTierType{
  uuid: string;
  displayName: string ;
  devName: string;
  rank:number;
  juiceValue:number;
  juiceCost:number;
  highlightColor: string;
  displayIcon: string;
  assetPath: string;
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

  const BGRef = useRef(null);

  const WeaponData = Weapon.weaponData;
console.log(WeaponData, "Initial Weapon DATA")
  
  const [currSkin, SetCurrSkin] = useState<currSkinType>({
    skins: null,
    displayName: "",
    imagePath: "",
   contentTier: null,
  });

  const [currChroma, setCurrChroma] = useState<chromasType[] | null | undefined>(null);

  useEffect(() =>{
    handleSkin(WeaponData ? WeaponData.skins : null);
    SetCurrSkin({
        skins: WeaponData ? WeaponData.skins[0] : null,
        displayName: WeaponData ? WeaponData.skins[0]?.displayName : "",
        imagePath: WeaponData ? WeaponData.skins[0]?.chromas[0].fullRender : "",
        contentTier: null,
      });
      setCurrChroma(WeaponData ? WeaponData.skins[0]?.chromas : null);
  
  // SetCurrSkin(WeaponData ? WeaponData.skins[0] : null)
},[Weapon])

  const handleWeaponSkin = async (displayname: string, image: string | null, contentTieruuid: string | null, currentChroma?: chromasType[]) => {

    try {
      
      const contentTierResponse: ContentTierType | null = await handleContentLevel(contentTieruuid)

        SetCurrSkin(prevState => ({
          ...prevState,
          displayName: displayname,
          imagePath:image,
          contentTier:contentTierResponse,
          }))

    setCurrChroma(currentChroma)
    } catch (error) {
      console.log(error)
    }



  }


  const handleDisplay = (displayname: string, image: string | null) =>{
    SetCurrSkin(prevState => ({
      ...prevState,
      displayName: displayname,
      imagePath:image,
      
      }))
  }

  const handleContentLevel = async (ContentUUID: string | null):Promise<ContentTierType | null> => {
    try {
      const res = await axios.get(`https://valorant-api.com/v1/contenttiers/${ContentUUID}`);
      console.log(res);
  
      // Assuming the response contains a data property with the string you need
      const data: ContentTierType = res.data.data;
  
      return data;
    } catch (error) {
      console.error("Error fetching content level:", error);
      return null;

    }
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

    <div className='flex flex-col gap-2'>
      <div className='relative p-4 bg-slate-500'>

        <div className='w-full h-full bg-white absolute opacity-5 z-10' ref={BGRef}>

        </div>


        {currSkin && currSkin !== null && currSkin.displayName}
        <div className="bg-white bg-opacity-5 relative flex justify-center h-[20em] p-[5em] overflow-hidden">
          <img className="h-[14em] min-w-[25em] max-w-[30em] object-contain relative z-10" src={currSkin.imagePath || undefined} alt="image description"/>

          {currSkin && currSkin.contentTier ? <img className="h-[20em] min-w-[4em] max-w-[20em] object-contain absolute -bottom-1/4 right-1/3 opacity-50" src={currSkin.contentTier?.displayIcon || undefined} /> : ""}
            
            <Chromas chromas={currChroma} handleDisplay={handleDisplay}/>
        </div>
       
      </div>




      <div className='bg-red-300'>

        <div>
          <div>
          </div>

          <div>  
          </div>
        </div>

      
          <div className='flex flex-row gap-2 flex-nowrap overflow-x-scroll p-2 relative left-10'>

            {WeaponData && WeaponData.skins !== null && WeaponData.skins.map((skin,id )=> (
              <div key={id} className='bg-red-300 relative min-w-[10em]' onClick={()=>{handleWeaponSkin(skin.displayName, skin.chromas[0].fullRender, skin.contentTierUuid, skin.chromas)}}>
                <div className='p-4'>
                  <img  src={skin.chromas[0].fullRender} alt={skin.displayName} />
                </div>
                <p>{skin.displayName}</p>
              </div>
            ))}

          </div>
       


      </div>

    </div>















    
      

    
  </div> 
  )
}

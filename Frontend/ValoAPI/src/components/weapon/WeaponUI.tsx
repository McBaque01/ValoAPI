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
    <div className={`${!Weapon.isTrigger?"hidden":"relative"} w-full h-screen bg-ValoDarkViolet z-50 py-6`}> 

      <div onClick={()=>handleWeapon()} className=' w-fit h-fit absolute top-0 right-6 z-40'>
          <Icon icon="mdi:close-thick" width="30" height="50" color='#fd4556' />
      </div>

    <div className='flex flex-col gap-2'>

      <div className='relative  w-full h-full p-4'>

    
        <label className='text-ValoGreen uppercase text-[4em] font-Tungsten tracking-widest relative z-20'>{currSkin && currSkin !== null && currSkin.displayName}</label>

       
        <div className=" bg-opacity-5 relative flex justify-center h-[20em] overflow-hidden items-center">
          <img className="h-[14em] 2xl:w-[40%] xl:w-[50%] lg:w-[80%] md:w-[90%] sm:w-[100%] object-contain relative z-10 drop-shadow-xl" src={currSkin.imagePath || undefined} alt="image description"/>

          {currSkin && currSkin.contentTier ? <img className="h-[20em] min-w-[4em] max-w-[20em] object-contain absolute -bottom-1/4 left-[1em] opacity-50" src={currSkin.contentTier?.displayIcon || undefined} /> : ""}
            
          <Chromas chromas={currChroma} handleDisplay={handleDisplay}/>

        </div>
       
      </div>




        <div className='p-2'>

          <div>
            <div>
            </div>

            <div>  
            </div>
          </div>

        
          <div className='flex flex-row gap-2 flex-nowrap overflow-x-scroll relative p-2'>

            {WeaponData && WeaponData.skins !== null && WeaponData.skins.map((skin,id )=> (
              <div key={id} className='relative h-fit 2xl:min-w-[24em] flex flex-col sm:min-w-[10em] md:min-w-[12em] lg:min-w-[14em] xl:min-w-[16em] hover:bg-ValoGreen' onClick={()=>{handleWeaponSkin(skin.displayName, skin.chromas[0].fullRender, skin.contentTierUuid, skin.chromas)}}>
                <div className='flex flex-col justify-around border-2 p-1 relative'>

                  <div className=' w-full h-full relative z-20 hover:bg-gray-700 bg-gray-600 bg-opacity-5' style={{clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 30%)'}}>
                    <div className='w-full h-full py-10 hover:bg-gradient-to-t from-ValoGreen from-0% via-transparent via-90%  to-transparent to-90% transition-all duration-300'>
                      <img  src={skin.chromas[0].fullRender} alt={skin.displayName} className='object-contain w-full h-full'/>
                    </div>
                  </div>

                </div>
              </div>
              ))}

          </div>

        </div>

    </div>

    </div> 
  )
}

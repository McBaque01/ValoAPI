import React, {useState, useEffect}from 'react'
import { WeaponType,  chromasType,  skinsType } from '../typings/weaponTypes'
import { Chromas } from './Chromas'

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Icon } from '@iconify/react';

import { WeaponDetails } from './WeaponDetails';

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
      }else if(skins && skins[i].displayName.startsWith("Melee")){
        skins.unshift(skins[i]);
        skins.splice(i + 1,1)
        break;
      }
      else{
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

  const [isHover, setIsHover] = useState(false)

  const WeaponData = Weapon.weaponData;
// console.log(WeaponData, "Initial Weapon DATA")
  
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


  const handleDisplay = (image: string | null) =>{
    SetCurrSkin(prevState => ({
      ...prevState,
      imagePath:image,
      }))
  }

  const handleContentLevel = async (ContentUUID: string | null):Promise<ContentTierType | null> => {
    try {
      const res = await axios.get(`https://valorant-api.com/v1/contenttiers/${ContentUUID}`);
      // console.log(res);
  
      // Assuming the response contains a data property with the string you need
      const data: ContentTierType = res.data.data;
  
      return data;
    } catch (error) {
      console.error("Error fetching content level:", error);
      return null;

    }
  }

  
  // console.log(Weapon, "WEAPON!");
  // console.log(WeaponData !== null && WeaponData.skins, "WEAPONS DATA!");
  // console.log(currSkin, "Current SKIN!")
  // console.log(currChroma, "CHROOOMAS")

  
  return (
    <div className={`${!Weapon.isTrigger?"hidden":"relative"} w-full h-screen bg-ValoDarkViolet z-50 py-6`}> 

      <div onClick={()=>handleWeapon()} className=' w-fit h-fit absolute top-0 right-6 z-40'>
          <Icon icon="mdi:close-thick" width="30" height="50" color='#fd4556' />
      </div>

    <div className='relative flex flex-row gap-2 w-full h-full lg:flex-col md:flex-col sm:flex-col p-1'>
      <main className='relative flex flex-col gap-2 w-[75%]  lg:w-full lg:h-[75%] md:w-full md:h-[75%] sm:w-full sm:h-[75%]'>

        <div className=' w-full h-full relative flex flex-col justify-center'>

          <div className='text-ValoGreen hover:text-ValoRed uppercase custom-text font-Tungsten tracking-widest z-20 flex flex-row items-center w-fit p-1 2xl:pl-[2em] gap-2 absolute top-1 left-1'>
            {currSkin && currSkin.contentTier ? <img className="h-[1.4em] w-[1.4em] object-contain" src={currSkin.contentTier?.displayIcon || undefined} /> : ""}
            {currSkin && currSkin !== null && currSkin.displayName}
          </div>

          <div className="relative flex flex-row justify-center h-[90%] overflow-hidden items-center">
            <img className =
            {`h-full custom-width object-contain  z-10 brightness-0 -bottom-0 absolute opacity-50 transition-all duration-300 ${isHover ? '-bottom-4' : ''}`} 
            src={currSkin.imagePath || undefined} alt="image description"
            />


            <img className="h-full custom-width object-contain  relative z-10 -bottom-0 transition-all duration-300 "src={currSkin.imagePath || undefined} alt="image description"
            
            onMouseLeave={()=>{setIsHover(false)}}
            onMouseEnter={()=>{setIsHover(true)}}
            />
            
          </div>

          <Chromas chromas={currChroma} handleDisplay={handleDisplay}/>

        </div>








        <div className='w-full h-fit'>

           <div className=' w-full h-fit'>
                <div className='flex flex-row gap-2 flex-nowrap overflow-x-scroll relative p-2 bg-black bg-opacity-25 h-fit'>
                    {WeaponData && WeaponData.skins !== null && WeaponData.skins.map((skin,id )=> (
                      <div key={id} className='relative min-h-[1em] 2xl:min-w-[24em] flex flex-col sm:min-w-[12em] md:min-w-[13em] lg:min-w-[14em] 
                      xl:min-w-[18em] ' onClick={()=>{handleWeaponSkin(skin.displayName, skin.chromas[0].fullRender, skin.contentTierUuid, skin.chromas)}}>
                        <div className='flex flex-col justify-around border-[0.2em] p-1 border-ValoGreen relative hover:bg-ValoGreen'>

                          <div className=' w-full h-full relative z-20 hover:bg-gray-700 bg-gray-600 bg-opacity-5' style={{clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%, 0 30%)'}}>
                            <div className='w-full h-full py-4 hover:bg-gradient-to-t from-ValoGreen from-0% via-transparent via-90%  to-transparent to-90% transition-all duration-300'>

                              <LazyLoadImage src={skin.chromas[0].fullRender} alt={skin.displayName} 
                              className=' object-contain w-full h-[3.5em] 2xl:h-[5em] xl:h-[5em] hover:-translate-y-2 transition-all '/>

                            </div>
                          </div>

                        </div>
                      </div>
                      ))}
                </div>
            </div>

        </div>

      </main>


      <aside className='w-[35%] h-full lg:w-full md:w-full sm:w-full lg:h-[25%] md:h-[25%] sm:h-[25%] bg-black bg-opacity-[.30] p-1 mt-6'>
                    <WeaponDetails currentWeapon={WeaponData} />
      </aside>

    </div>

    </div> 
  )
}

import React, {useState, useEffect}from 'react'
import { WeaponType } from '../typings/weaponTypes'
import { skinsType } from '../typings/weaponTypes'

interface WeaponUITypes{
    Weapon: weaponTriggerType,
    handleWeapon: (weapon?: WeaponType | undefined) => void;
}

interface weaponTriggerType{
    weaponData: WeaponType | null;
    isTrigger: boolean;
}

const handleSkin = (skins: skinsType[] | null) => {

  if(skins){
    for(let i = 0; i < skins.length; i++){
      if(skins && skins[i].displayName.includes("Standard")){
        skins.unshift(skins[i]);
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

  
  const [currSkin, SetCurrSkin] = useState<skinsType | null>(null);

  useEffect(()=>{
    handleSkin(WeaponData ? WeaponData.skins : null);
    SetCurrSkin(WeaponData ? WeaponData.skins[0] : null)
  },[Weapon])

  const handleWeaponSkin = (skins: skinsType) => {
   SetCurrSkin(skins)
  }


  console.log(Weapon, "WEAPON!");
  console.log(WeaponData !== null && WeaponData.skins, "WEAPONS DATA!");
  console.log(currSkin, "Current SKIN!")
  return (
    <div className={`${!Weapon.isTrigger?"hidden":"relative"} w-full h-fit bg-ValoDarkViolet z-50 py-4`}> 
      
      {currSkin && currSkin !== null && currSkin.displayName}
    



    <div onClick={()=>handleWeapon()}>ClickME</div>
    <div className=' bg-ValoLightViolet p-4'>
      <div className='flex flex-col gap-2'>
      {WeaponData && WeaponData.skins !== null && WeaponData.skins.map((skin,id )=> (
        <div key={id} className='bg-red-300' onClick={()=>{handleWeaponSkin(skin)}}>
          <p>{skin.displayName}</p>
          
        </div>
      ))}
      </div>
    </div>
      

    
  </div> 
  )
}

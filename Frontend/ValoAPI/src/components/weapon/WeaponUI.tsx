import React from 'react'
import { WeaponType } from '../typings/weaponTypes'

interface WeaponUITypes{
    Weapon: weaponTriggerType,
    handleWeapon: (weapon?: WeaponType | undefined) => void;
}

interface weaponTriggerType{
    weaponData: WeaponType | null;
    isTrigger: boolean;
  }

export const WeaponUI : React.FC<WeaponUITypes> = ({Weapon, handleWeapon}) => {



  return (
    <div className={`${!Weapon.isTrigger?"hidden":"relative"} w-full h-screen bg-slate-500 z-50 top-0 left-0`}> 
      
    {Weapon && Weapon.weaponData && Weapon.weaponData !== null ? <div> {Weapon.weaponData.displayName}</div> : null}

    <div onClick={()=>handleWeapon()}>ClickME</div>
  </div> 
  )
}

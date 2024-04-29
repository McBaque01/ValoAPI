import { useEffect, useState } from "react"
import fetchWeapons from "../APIs/fetchWeapons"
import { WeaponType } from "../typings/weaponTypes"
import { WeaponsUI } from "./WeaponsUI"
import { WeaponUI } from "./WeaponUI"
import { Suspense } from "react"
import { ParentLoading } from "../utils/ParentLoading"


export const WeaponHero = () => {

  interface weaponTriggerType{
    weaponData: WeaponType | null;
    isTrigger: boolean;
  }

  const [Weapons, setWeaponsData] = useState<WeaponType[]>([]);
  const [Weapon, setWeapon] = useState<weaponTriggerType>({
    weaponData: null,
    isTrigger: false,
  })

 const handleWeapon = (weapon?: WeaponType) => {

    const currentWeapon = weapon || null; // Set default to null if no weapon provided
    const currentIsTrigger = !Weapon.isTrigger; // Assuming Weapon.isTrigger exists
  
    // Update state using spread operator and conditional logic
    setWeapon({
      weaponData: currentWeapon,
      isTrigger: currentIsTrigger,
    });

  }


  useEffect(()=>{
    const FetchWeaponsData = async ()  => {
      try {
        const WeaponsData: WeaponType[] = await fetchWeapons();
        setWeaponsData(WeaponsData);
      
      } catch (error) {
        console.log(error)
      }
    }
  FetchWeaponsData();
  },[])

  return (

  <>
    {Weapon.isTrigger ? <WeaponUI Weapon={Weapon} handleWeapon={handleWeapon}/>
    :
    <Suspense fallback={<ParentLoading/>}>
       <WeaponsUI Weapons={Weapons} handleWeapon={handleWeapon}/>
    </Suspense>
    }
  </>

  )
}

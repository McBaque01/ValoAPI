import { useEffect } from "react"
import fetchWeapons from "../APIs/fetchWeapons"

export const WeaponHero = () => {


  useEffect(()=>{
    const FetchWeaponsData = async ()  => {
      try {
        const Weapons = await fetchWeapons();
        console.log(Weapons)
      } catch (error) {
        console.log(error)
      }
    }
  FetchWeaponsData();
  },[])

  return (
    <div className="w-full h-screen bg-[url('../src/assets/images/PearlMap.png')] bg-cover bg-no-repeat bg-center brightness-[0.15]">
     
      
    </div>
  )
}

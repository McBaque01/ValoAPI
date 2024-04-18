import { useEffect, useState } from "react"
import fetchWeapons from "../APIs/fetchWeapons"
import { WeaponType } from "../typings/weaponTypes"

export const WeaponHero = () => {

  const [Weapons, setWeaponsData] = useState<WeaponType[]>([]);

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

  console.log(Weapons);

  return (
    <div className="w-full h-fit relative 2xl:pt-2 xl:pt-2 pt-[4em] p-4
    after:content-[''] 
    after:absolute 
    after:w-full 
    after:h-full
    after:bg-[url('../src/assets/images/PearlMap.png')] 
    after:bg-cover 
    after:bg-no-repeat 
    after:bg-center
    after:top-0
    after:left-0
    after:brightness-[0.15]
    "
    
   >
  {/* <div className="absolute w-full h-full bg-slate-500 z-20"> 
    
    this is for like modal
  </div> */}

     <div className="relative z-10 flex flex-wrap flex-row h-fit w-full gap-2 justify-center">

      <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit sm:w-[90%] w-fit">
        <div className="w-fit">
          <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide">MELEE</h1>
        </div>

        <div className="">
          {Weapons && Weapons.filter(weapon => weapon.shopData === null && weapon.displayName === 'Melee').map(weapon => (
              <div key={weapon.uuid} className="text-ValoYellow bg-zinc-900 p-4">
               
                <div className="h-full w-full p-4 items-center flex justify-center">
                  <img src={weapon.displayIcon} alt={weapon.displayName || 'Weapon Icon'} className="w-[16em] h-fit 2xl:w-[12em]"/>
                </div>
                <div className="flex flex-row w-full h-full justify-between bg-ValoDark rounded-full px-4 py-2 text-ValoYellow font-DinHeavy">
                  <p>{weapon.displayName}</p>
                  <p>{weapon.shopData === null ? "0" : weapon.shopData.cost}</p>
                </div>
              </div>  
          ))}
        </div>

      </div>




      <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit sm:w-[90%] w-fit">
        <div className="w-fit">
          <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide">PISTOLS</h1>
        </div>

        <div className="flex flex-col gap-2 ">
          {Weapons && Weapons.filter(weapon => weapon.shopData && weapon.shopData.category === 'Pistols').map(weapon => (
              <div key={weapon.uuid} className="text-ValoYellow bg-zinc-900 p-4">

                <div className="h-full w-full p-4 items-center flex justify-center">
                  <img src={weapon.displayIcon} alt={weapon.displayName || 'Weapon Icon'} className="w-[16em] h-fit 2xl:w-[12em]"/>
                </div>

                <div className="flex flex-row justify-between bg-ValoDark rounded-full px-4 py-2 text-ValoYellow font-DinHeavy">
                  <p>{weapon.displayName}</p>
                  <p>{weapon.shopData === null ? "0" : weapon.shopData.cost}</p>
                </div>

              </div> 
          ))}
        </div>
      </div>



      


      <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit sm:w-[90%] w-fit">
        <div className="w-fit">
          <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide">SHOTGUN</h1>
        </div>

        <div className="flex flex-col gap-2 ">
          {Weapons && Weapons.filter(weapon => weapon.shopData && weapon.shopData.category === 'Shotguns').map(weapon => (
              <div key={weapon.uuid} className="text-ValoYellow bg-zinc-900 p-4">

                <div className="h-full w-full p-4 items-center flex justify-center">
                  <img src={weapon.displayIcon} alt={weapon.displayName || 'Weapon Icon'} className="w-[80%] h-fit 2xl:w-[12em]"/>
                </div>

                <div className="flex flex-row justify-between bg-ValoDark rounded-full px-4 py-2 text-ValoYellow font-DinHeavy">
                  <p>{weapon.displayName}</p>
                  <p>{weapon.shopData === null ? "0" : weapon.shopData.cost}</p>
                </div>

              </div> 
          ))}
        </div>
      </div>


      <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit sm:w-[90%] w-fit">
        <div className="w-fit">
          <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide">SMGs</h1>
        </div>

        <div className="flex flex-col gap-2 ">
          {Weapons && Weapons.filter(weapon => weapon.shopData && weapon.shopData.category === 'SMGs').map(weapon => (
              <div key={weapon.uuid} className="text-ValoYellow bg-zinc-900 p-4">

                <div className="h-full w-full p-4 items-center flex justify-center">
                  <img src={weapon.displayIcon} alt={weapon.displayName || 'Weapon Icon'} className="w-[80%] h-fit 2xl:w-[12em]"/>
                </div>

                <div className="flex flex-row justify-between bg-ValoDark rounded-full px-4 py-2 text-ValoYellow font-DinHeavy">
                  <p>{weapon.displayName}</p>
                  <p>{weapon.shopData === null ? "0" : weapon.shopData.cost}</p>
                </div>

              </div> 
          ))}
        </div>
      </div>


      <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit sm:w-[90%] w-fit">
        <div className="w-fit">
          <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide uppercase">RIFLES</h1>
        </div>

        <div className="flex flex-col gap-2 ">
          {Weapons && Weapons.filter(weapon => weapon.shopData && weapon.shopData.category === 'Rifles').map(weapon => (
              <div key={weapon.uuid} className="text-ValoYellow bg-zinc-900 p-4">

                <div className="h-full w-full p-4 items-center flex justify-center">
                  <img src={weapon.displayIcon} alt={weapon.displayName || 'Weapon Icon'} className="w-[16em] h-fit 2xl:w-[12em]"/>
                </div>

                <div className="flex flex-row justify-between bg-ValoDark rounded-full px-4 py-2 text-ValoYellow font-DinHeavy">
                  <p>{weapon.displayName}</p>
                  <p>{weapon.shopData === null ? "0" : weapon.shopData.cost}</p>
                </div>

              </div> 
          ))}
        </div>
      </div>



      <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit sm:w-[90%] w-fit">
        <div className="w-fit">
          <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide uppercase">Heavy</h1>
        </div>

        <div className="flex flex-col gap-2 ">
          {Weapons && Weapons.filter(weapon => weapon.shopData && weapon.shopData.category === 'Heavy Weapons').map(weapon => (
              <div key={weapon.uuid} className="text-ValoYellow bg-zinc-900 p-4">

                <div className="h-full w-full p-4 items-center flex justify-center">
                  <img src={weapon.displayIcon} alt={weapon.displayName || 'Weapon Icon'} className="w-[16em] h-fit 2xl:w-[12em]"/>
                </div>

                <div className="flex flex-row justify-between bg-ValoDark rounded-full px-4 py-2 text-ValoYellow font-DinHeavy">
                  <p>{weapon.displayName}</p>
                  <p>{weapon.shopData === null ? "0" : weapon.shopData.cost}</p>
                </div>

              </div> 
          ))}
        </div>
      </div>


      
      <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit sm:w-[90%] w-fit">
        <div className="w-fit">
          <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide">SNIPER RIFLES</h1>
        </div>

        <div className="flex flex-col gap-2 ">
          {Weapons && Weapons.filter(weapon => weapon.shopData && weapon.shopData.category === 'Sniper Rifles').map(weapon => (
              <div key={weapon.uuid} className="text-ValoYellow bg-zinc-900 p-4">

                <div className="h-full w-full p-4 items-center flex justify-center">
                  <img src={weapon.displayIcon} alt={weapon.displayName || 'Weapon Icon'} className="w-[16em] h-fit 2xl:w-[12em]"/>
                </div>

                <div className="flex flex-row justify-between bg-ValoDark rounded-full px-4 py-2 text-ValoYellow font-DinHeavy">
                  <p>{weapon.displayName}</p>
                  <p>{weapon.shopData === null ? "0" : weapon.shopData.cost}</p>
                </div>

              </div> 
          ))}
        </div>
      </div>

     </div>
    </div>
  )
}

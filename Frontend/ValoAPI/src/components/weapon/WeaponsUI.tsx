import React from 'react'
import { WeaponType } from '../typings/weaponTypes'
interface WeaponUITypes{
    Weapons: WeaponType[],
    handleWeapon: (weapon: WeaponType | undefined) => void;
}

export const WeaponsUI: React.FC<WeaponUITypes> = ({Weapons, handleWeapon}) => {
  return (
    
    <div className="w-full h-fit relative 2xl:p-[3em] xl:pt-2 py-[4em]
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
   

   
          <div className="relative z-10 flex flex-wrap flex-row h-fit w-full justify-center gap-2">

            <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit 2xl:w-[18%] xl:w-[25%] lg:w-[40%] md:w-[50%] sm:w-[80%]">
              <div className="w-fit">
                <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide">PISTOLS</h1>
              </div>

              <div className="flex flex-col gap-2 ">
                {Weapons && Weapons.filter(weapon => weapon.shopData && weapon.shopData.category === 'Pistols').map(weapon => (
                    <div key={weapon.uuid} onClick={()=>handleWeapon(weapon)} className="text-ValoYellow bg-zinc-900 p-4 flex justify-center flex-col items-center gap-2">

                      <div className="h-full w-full items-center flex justify-center"
                        style={{
                          backgroundImage: `url(${weapon.displayIcon})`,
                          backgroundSize:'contain',
                          backgroundRepeat:'no-repeat',
                          backgroundPosition:'center',
                          width:'8em',
                          height:'6em'
                          }}
                      >
                      
                      </div>

                      <div className="flex flex-row justify-between bg-ValoDark rounded-full px-4 py-2 text-ValoYellow font-DinRegular w-full">
                        <p className=" tracking-wide">{weapon.displayName}</p>
                        <p>{weapon.shopData === null ? "0" : weapon.shopData.cost}</p>
                      </div>

                    </div> 
                ))}
              </div>
            </div>



            <div className="flex gap-2 flex-col 2xl:w-[18%] xl:w-[25%] lg:w-[40%] md:w-[50%] sm:w-[80%]">

                <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit w-full">
                  <div className="w-fit">
                    <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide">HEAVY</h1>
                  </div>

                  <div className="flex flex-col gap-2">
                    {Weapons && Weapons.filter(weapon => weapon.shopData && weapon.shopData.category === 'Heavy Weapons').map(weapon => (
                        <div key={weapon.uuid} onClick={()=>handleWeapon(weapon)} className="text-ValoYellow bg-zinc-900 p-4 flex justify-center flex-col items-center gap-2">

                          <div className="h-full w-full items-center flex justify-center"
                            style={{
                              backgroundImage: `url(${weapon.displayIcon})`,
                              backgroundSize:'contain',
                              backgroundRepeat:'no-repeat',
                              backgroundPosition:'center',
                              width:'12em',
                              height:'6em'
                              }}
                          >
                          
                          </div>

                          <div className="flex flex-row justify-between bg-ValoDark rounded-full px-4 py-2 text-ValoYellow font-DinRegular w-full">
                            <p className=" tracking-wide">{weapon.displayName}</p>
                            <p>{weapon.shopData === null ? "0" : weapon.shopData.cost}</p>
                          </div>

                        </div> 
                    ))}
                  </div>
                </div>


                <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit w-full">
                  <div className="w-fit">
                    <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide">Sniper Rifles</h1>
                  </div>

                  <div className="flex flex-col gap-2">
                    {Weapons && Weapons.filter(weapon => weapon.shopData && weapon.shopData.category === 'Sniper Rifles').map(weapon => (
                        <div key={weapon.uuid} onClick={()=>handleWeapon(weapon)} className="text-ValoYellow bg-zinc-900 p-4 flex justify-center flex-col items-center gap-2">

                          <div className="h-full w-full items-center flex justify-center"
                            style={{
                              backgroundImage: `url(${weapon.displayIcon})`,
                              backgroundSize:'contain',
                              backgroundRepeat:'no-repeat',
                              backgroundPosition:'center',
                              width:'12em',
                              height:'6em'
                              }}
                          >
                          
                          </div>

                          <div className="flex flex-row justify-between bg-ValoDark rounded-full px-4 py-2 text-ValoYellow font-DinRegular w-full">
                            <p className=" tracking-wide">{weapon.displayName}</p>
                            <p>{weapon.shopData === null ? "0" : weapon.shopData.cost}</p>
                          </div>

                        </div> 
                    ))}
                  </div>
                </div>

            </div>



      
   
            <div className="flex gap-2 flex-col 2xl:w-[18%] xl:w-[25%] lg:w-[40%] md:w-[50%] sm:w-[80%]">

              <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit w-full">
                <div className="w-fit">
                  <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide">SHOTGUNS</h1>
                </div>

                <div className="flex flex-col gap-2">
                  {Weapons && Weapons.filter(weapon => weapon.shopData && weapon.shopData.category === 'Shotguns').map(weapon => (
                      <div key={weapon.uuid} onClick={()=>handleWeapon(weapon)} className="text-ValoYellow bg-zinc-900 p-4 flex justify-center flex-col items-center gap-2">

                        <div className="h-full w-full items-center flex justify-center "
                          style={{
                            backgroundImage: `url(${weapon.displayIcon})`,
                            backgroundSize:'contain',
                            backgroundRepeat:'no-repeat',
                            backgroundPosition:'center',
                            width:'12em',
                            height:'6em'
                            }}
                        >
                        
                        </div>

                        <div className="flex flex-row justify-between bg-ValoDark rounded-full px-4 py-2 text-ValoYellow font-DinRegular w-full">
                          <p className=" tracking-wide">{weapon.displayName}</p>
                          <p>{weapon.shopData === null ? "0" : weapon.shopData.cost}</p>
                        </div>

                      </div> 
                  ))}
                </div>
              </div>


              <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit w-full">
                <div className="w-fit">
                  <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide">SMGs</h1>
                </div>

                <div className="flex flex-col gap-2">
                  {Weapons && Weapons.filter(weapon => weapon.shopData && weapon.shopData.category === 'SMGs').map(weapon => (
                      <div key={weapon.uuid} onClick={()=>handleWeapon(weapon)} className="text-ValoYellow bg-zinc-900 p-4 flex justify-center flex-col items-center gap-2">

                        <div className="h-full w-full items-center flex justify-center"
                          style={{
                            backgroundImage: `url(${weapon.displayIcon})`,
                            backgroundSize:'contain',
                            backgroundRepeat:'no-repeat',
                            backgroundPosition:'center',
                            width:'12em',
                            height:'6em'
                            }}
                        >
                        
                        </div>

                        <div className="flex flex-row justify-between bg-ValoDark rounded-full px-4 py-2 text-ValoYellow font-DinRegular w-full">
                          <p className=" tracking-wide">{weapon.displayName}</p>
                          <p>{weapon.shopData === null ? "0" : weapon.shopData.cost}</p>
                        </div>

                      </div> 
                  ))}
                </div>
              </div>

            </div>


    

            <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit 2xl:w-[18%] xl:w-[25%] lg:w-[40%] md:w-[50%] sm:w-[80%]">
              <div className="w-fit">
                <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide">RIFLES</h1>
              </div>

              <div className="flex flex-col gap-2">
                {Weapons && Weapons.filter(weapon => weapon.shopData && weapon.shopData.category === 'Rifles').map(weapon => (
                    <div key={weapon.uuid} onClick={()=>handleWeapon(weapon)} className="text-ValoYellow bg-zinc-900 p-4 flex justify-center flex-col items-center gap-2">

                      <div className="h-full w-full items-center flex justify-center"
                        style={{
                          backgroundImage: `url(${weapon.displayIcon})`,
                          backgroundSize:'contain',
                          backgroundRepeat:'no-repeat',
                          backgroundPosition:'center',
                          width:'12em',
                          height:'6em'
                          }}
                      >
                      
                      </div>

                      <div className="flex flex-row justify-between bg-ValoDark rounded-full px-4 py-2 text-ValoYellow font-DinRegular w-full">
                        <p className=" tracking-wide">{weapon.displayName}</p>
                        <p>{weapon.shopData === null ? "0" : weapon.shopData.cost}</p>
                      </div>

                    </div> 
                ))}
              </div>
            </div>



            <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit 2xl:w-[18%] xl:w-[25%] lg:w-[40%] md:w-[50%] sm:w-[80%]">
              <div className="w-fit">
                <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide">MELEE</h1>
              </div>

              <div className="">
                {Weapons && Weapons.filter(weapon => weapon.shopData === null && weapon.displayName === 'Melee').map(weapon => (
                    <div key={weapon.uuid} onClick={()=>handleWeapon(weapon)} className="text-ValoYellow bg-zinc-900 p-4 flex justify-center flex-col items-center" >
                    
                      <div className="h-full w-full items-center flex justify-center"
                        style={{
                          backgroundImage: `url(${weapon.displayIcon})`,
                          backgroundSize:'contain',
                          backgroundRepeat:'no-repeat',
                          backgroundPosition:'center',
                          width:'8em',
                          height:'6em'
                          }}
                      >
                      
                      </div>
                      <div className="flex flex-row justify-between bg-ValoDark rounded-full px-4 py-2 text-ValoYellow font-DinRegular w-full">
                        <p className=" tracking-wide">{weapon.displayName}</p>
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

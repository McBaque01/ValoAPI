import React, { Suspense } from 'react'
import { WeaponType } from '../typings/weaponTypes'
import { ParentLoading } from '../utils/ParentLoading';
interface WeaponUITypes{
    Weapons: WeaponType[],
    handleWeapon: (weapon: WeaponType | undefined) => void;
}

export const WeaponsUI: React.FC<WeaponUITypes> = ({Weapons, handleWeapon}) => {
  return (
   
    <div className="w-full h-fit relative
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
   
    <Suspense fallback={<ParentLoading/>}>
      <div className='flex flex-col justify-center w-full h-fit p-4 py-10 relative items-center sm:pt-14 lg:pt-14 md:pt-14'>

          <div className="relative z-10 flex flex-wrap flex-row h-fit min-w-[24em] gap-2  justify-center 2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[80%]">

            <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit 2xl:w-[18%] xl:w-[32%] lg:w-[48%] md:w-[48%] sm:w-[100%] ">
              <div className="w-fit">
                <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide">PISTOLS</h1>
              </div>

              <div className="flex flex-col gap-2 ">
                {Weapons && Weapons.filter(weapon => weapon.shopData && weapon.shopData.category === 'Pistols').map(weapon => (
                    <div key={weapon.uuid} onClick={()=>handleWeapon(weapon)} className="hover:text-ValoRed text-ValoYellow bg-zinc-900 px-4 py-10 flex justify-center flex-col items-center gap-2 relative">

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

                      <div className="flex flex-row px-4 py-2 font-DinRegular w-full absolute bottom-3 left-3 ">
                        <p className="tracking-widest font-black uppercase">{weapon.displayName}</p>
                      </div>

                    </div> 
                ))}
              </div>
            </div>



            <div className="flex gap-2 flex-col 2xl:w-[18%] xl:w-[32%] lg:w-[48%] md:w-[48%] sm:w-[100%]">

                <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit w-full">
                  <div className="w-fit">
                    <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide">HEAVY</h1>
                  </div>

                  <div className="flex flex-col gap-2">
                    {Weapons && Weapons.filter(weapon => weapon.shopData && weapon.shopData.category === 'Heavy Weapons').map(weapon => (
                        <div key={weapon.uuid} onClick={()=>handleWeapon(weapon)} className="hover:text-ValoRed text-ValoYellow bg-zinc-900 px-4 py-10 flex justify-center flex-col items-center gap-2 relative">

                          <div className="h-full w-full items-center flex justify-center"
                            style={{
                              backgroundImage: `url(${weapon.displayIcon})`,
                              backgroundSize:'contain',
                              backgroundRepeat:'no-repeat',
                              backgroundPosition:'center',
                              width:'12em',
                              height:'6em',
                    
                              }}
                          >
                          
                          </div>

                          <div className="flex flex-row px-4 py-2  font-DinRegular w-full absolute bottom-3 left-3">
                            <p className="tracking-widest font-black uppercase">{weapon.displayName}</p>
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
                        <div key={weapon.uuid} onClick={()=>handleWeapon(weapon)} className="hover:text-ValoRed text-ValoYellow bg-zinc-900 px-4 py-10 flex justify-center flex-col items-center gap-2 relative">

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

                          <div className="flex flex-row px-4 py-2  font-DinRegular w-full absolute bottom-3 left-3">
                            <p className="tracking-widest font-black uppercase">{weapon.displayName}</p>
                          </div>

                        </div> 
                    ))}
                  </div>
                </div>

            </div>



      
   
              <div className="flex gap-2 flex-col 2xl:w-[18%] xl:w-[32%] lg:w-[48%] md:w-[48%] sm:w-[100%]">

                <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit w-full">
                  <div className="w-fit">
                    <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide">SHOTGUNS</h1>
                  </div>

                  <div className="flex flex-col gap-2">
                    {Weapons && Weapons.filter(weapon => weapon.shopData && weapon.shopData.category === 'Shotguns').map(weapon => (
                        <div key={weapon.uuid} onClick={()=>handleWeapon(weapon)} className="hover:text-ValoRed text-ValoYellow bg-zinc-900 px-4 py-10 flex justify-center flex-col items-center gap-2 relative">

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

                          <div className="flex flex-row px-4 py-2  font-DinRegular w-full absolute bottom-3 left-3">
                            <p className="tracking-widest font-black uppercase">{weapon.displayName}</p>
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
                        <div key={weapon.uuid} onClick={()=>handleWeapon(weapon)} className="hover:text-ValoRed text-ValoYellow bg-zinc-900 px-4 py-10 flex justify-center flex-col items-center gap-2 relative">

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

                          <div className="flex flex-row px-4 py-2  font-DinRegular w-full absolute bottom-3 left-3">
                            <p className="tracking-widest font-black uppercase">{weapon.displayName}</p>
                          </div>

                        </div> 
                    ))}
                  </div>
                </div>

              </div>


              <div className="flex gap-2 flex-col xl:flex-row 2xl:w-[18%] xl:w-[65%] lg:w-[48%] md:w-[48%] sm:w-[100%]">

                <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit w-full">
                  <div className="w-fit">
                    <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide">RIFLES</h1>
                  </div>

                  <div className="flex flex-col gap-2">
                    {Weapons && Weapons.filter(weapon => weapon.shopData && weapon.shopData.category === 'Rifles').map(weapon => (
                        <div key={weapon.uuid} onClick={()=>handleWeapon(weapon)} className="hover:text-ValoRed text-ValoYellow bg-zinc-900 px-4 py-10 flex justify-center flex-col items-center gap-2 relative">

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

                          <div className="flex flex-row px-4 py-2  font-DinRegular w-full absolute bottom-3 left-3">
                            <p className="tracking-widest font-black uppercase">{weapon.displayName}</p>
                          </div>

                        </div> 
                    ))}
                  </div>
                </div>



                <div className="p-2 gap-2 flex flex-col bg-opacity-30 bg-slate-600 h-fit w-full">
                  <div className="w-fit">
                    <h1 className="text-ValoGreen text-[2em] font-DinHeavy tracking-wide">MELEE</h1>
                  </div>

                    <div className="">
                      {Weapons && Weapons.filter(weapon => weapon.shopData === null && weapon.displayName === 'Melee').map(weapon => (
                          <div key={weapon.uuid} onClick={()=>handleWeapon(weapon)} className="hover:text-ValoRed text-ValoYellow bg-zinc-900 px-4 py-10 flex justify-center flex-col items-center gap-2 relative" >
                          
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

                              <div className="flex flex-row px-4 py-2  font-DinRegular w-full absolute bottom-3 left-3">
                                <p className="tracking-widest font-black uppercase">{weapon.displayName}</p>
                              </div>

                          </div>  
                      ))}
                    </div>
                </div>

              </div> 

            </div>


          </div>
          </Suspense>



        </div>

        
       
  )
}

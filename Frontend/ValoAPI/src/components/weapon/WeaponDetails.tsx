
import { WeaponType } from "../typings/weaponTypes"
import omen from "../../assets/images/omen-loading.gif"

interface DetailsPropsTypes{
    currentWeapon: WeaponType | null;
}


    const getFireType = (firetype: string) => {

        if(firetype.endsWith("AirBurst")){
            return "AirBurst";
        }else if(firetype.endsWith("Shotgun")){
            return "Shotgun";
        }else if(firetype.endsWith("ADS")){
            return "ADS";
        }
        else{
            return "N/A";
        }
    }


    const getPenetration = (Penetration: string) => {

        if(Penetration.endsWith("High")){
            return "High";
        }else if(Penetration.endsWith("Medium")){
            return "Medium";
        }else if(Penetration.endsWith("Low")){
            return "Low";
        }
        else{
            return "N/A";
        }
    }

export const WeaponDetails: React.FC<DetailsPropsTypes> = ({currentWeapon}) => {

    // console.log(currentWeapon)
  return ( 
    <div className="w-full h-full relative flex flex-col">

        <div className="w-full h-full relative overflow-x-scroll flex flex-col">

            <div className="relative w-fit h-full flex flex-row gap-2 flex-nowrap xl:w-full xl:flex-col 2xl:flex-col 2xl:w-full">
        
                <div className="w-[20em] h-full relative bg-gray-800 rounded-lg xl:w-full 2xl:w-full 2xl:h-fit xl:h-fit px-2">

                    <div className="w-full h-fit text-center">
                        <h1 className="text-ValoRed font-DinHeavy text-[1.5em]">{currentWeapon?.displayName}</h1>
                    </div>

                    <div className="flex flex-row justify-between">
                        <h1 className="text-ValoGreen font-DinRegular tracking-widest uppercase">Type/</h1>
                        <p className="text-ValoGreen font-DinRegular font-bold tracking-widest uppercase">{currentWeapon && currentWeapon.shopData ? currentWeapon?.shopData.category : currentWeapon?.displayName}</p>
                    </div>

                    <div className="flex flex-row justify-between">
                        <h1 className="text-ValoGreen font-DinRegular tracking-widest uppercase">Cost/</h1>
                        <p className="text-ValoGreen font-DinHeavy font-black tracking-widest uppercase">{currentWeapon && currentWeapon.shopData ? currentWeapon?.shopData.cost : 0}</p>
                    </div>

                   

                </div>

                <div className="w-[20em] h-full relative bg-gray-800 rounded-lg xl:w-full 2xl:w-full 2xl:h-fit xl:h-fit px-2">

                    <div className="w-full h-fit text-center">
                        <h1 className="text-ValoRed font-DinHeavy text-[1.5em]">Stats</h1>
                    </div>


                    <div className="flex flex-row justify-between ">
                        <h1 className="text-ValoGreen font-DinRegular tracking-widest uppercase">Magezine/</h1>
                        <p className="text-ValoGreen font-DinHeavy font-black tracking-widest">{currentWeapon && currentWeapon.weaponStats ? currentWeapon?.weaponStats.magazineSize : 0}</p>
                    </div>

                    <div className="flex flex-row justify-between ">
                        <h1 className="text-ValoGreen font-DinRegular tracking-widest uppercase">Equip time/</h1>
                        <p className="text-ValoGreen font-DinHeavy font-black tracking-widest">{currentWeapon && currentWeapon.weaponStats ? currentWeapon?.weaponStats.equipTimeSeconds+"s" : 1+"s"}</p>
                    </div>

                    <div className="flex flex-row justify-between">
                        <h1 className="text-ValoGreen font-DinRegular tracking-widest uppercase">Reload time/</h1>
                        <p className="text-ValoGreen font-DinHeavy font-black tracking-widest">{currentWeapon && currentWeapon.weaponStats ? currentWeapon?.weaponStats.reloadTimeSeconds+"s" : 0+"s"}</p>
                    </div>

                    <div className="flex flex-row justify-between ">
                        <h1 className="text-ValoGreen font-DinRegular tracking-widest uppercase">Fire type/</h1>
                        <p className="text-ValoGreen font-DinHeavy font-black tracking-widest">{currentWeapon && currentWeapon.weaponStats && currentWeapon.weaponStats.altFireType ? getFireType(currentWeapon.weaponStats.altFireType) : "N/A"}</p>
                    </div>
                    
                    <div className="flex flex-row justify-between ">
                        <h1 className="text-ValoGreen font-DinRegular tracking-widest uppercase">Penetration/</h1>
                        <p className="text-ValoGreen font-DinHeavy font-black tracking-widest">{currentWeapon && currentWeapon.weaponStats && currentWeapon.weaponStats.wallPenetration ? getPenetration(currentWeapon.weaponStats.wallPenetration) : "N/A"}</p>
                    </div>

                </div>




                <div className=" h-full w-fit relative rounded-lg xl:w-full 2xl:w-full 2xl:h-fit xl:h-fit p-2 bg-gray-800 lg:min-w-[20em] md:min-w-[20em]">
                    <div className="w-fit h-full relative flex 2xl:flex-col xl:flex-col flex-col xl:w-full 2xl:w-full lg:min-w-[20em] md:min-w-[20em]">

                        <div className="w-full h-fit text-center relative">
                            <h1 className="text-ValoRed font-DinHeavy text-[1.5em]">Range Damage</h1>
                        </div>

                        
                        {currentWeapon && currentWeapon.weaponStats 
                            ? 
                                <div className="w-fit h-full p-1 xl:w-full 2xl:w-full bg-slate-400 sm:min-w-[20em] lg:min-w-[20em] md:min-w-[20em]">
                                    <div className="flex flex-row justify-between w-full relative h-full ">
                                        <div className="relative flex 2xl:flex-col xl:flex-col flex-nowrap gap-3 flex-row w-fit h-full xl:w-full 2xl:w-full min-w-[20em]">
                                            {currentWeapon && 
                                            currentWeapon.weaponStats && 
                                            currentWeapon.weaponStats.damageRanges.length > 0 && 
                                            currentWeapon.weaponStats.damageRanges.map((range, id) => (

                                                <div key={id} className="text-center min-w-[14em] h-fit border-b-2">
                                                    <div className="w-full xl:w-full 2xl:w-full text-ValoYellow font-DinHeavy tracking-widest">{range.rangeStartMeters} - {range.rangeEndMeters}</div>
                                                    <div className="flex flex-row justify-between">
                                                        <h1 className="text-ValoGreen font-DinRegular tracking-widest uppercase">Head</h1>
                                                        <p className="text-ValoGreen font-DinHeavy font-black tracking-widest">{range.headDamage}</p>
                                                    </div>
                                                    <div className="flex flex-row justify-between">
                                                        <h1 className="text-ValoGreen font-DinRegular tracking-widest uppercase">Body</h1>
                                                        <p className="text-ValoGreen font-DinHeavy font-black tracking-widest">{range.bodyDamage}</p>
                                                    </div>
                                                    <div className="flex flex-row justify-between">
                                                        <h1 className="text-ValoGreen font-DinRegular tracking-widest uppercase">Leg</h1>
                                                        <p className="text-ValoGreen font-DinHeavy font-black tracking-widest">{range.legDamage}</p>
                                                    </div>
                                                </div>
                                                
                                            ))}

                                        </div> 
                                    </div>
                                </div>
                            : 
                                <div className="w-full h-full overflow-hidden sm:w-[20em] md:w-[20em] lg:w-[20em]">
                                    <div className="max-w-full h-full relative flex flex-col justify-center items-center ">
                                        <img src={omen} alt="N/A" className="relative object-contain bottom-0 h-[8em]"  />
                                    </div>
                                </div>


                        }
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                    

                    
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

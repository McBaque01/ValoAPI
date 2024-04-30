
import { WeaponType } from "../typings/weaponTypes"

interface DetailsPropsTypes{
    currentWeapon: WeaponType | null;
}

export const WeaponDetails: React.FC<DetailsPropsTypes> = ({currentWeapon}) => {

    // console.log(currentWeapon)
  return ( 
    <div className="w-full h-full relative flex flex-col ">

        <h1 className="text-ValoRed font-DinHeavy text-[1.6em]">{currentWeapon?.displayName}</h1>
        <div className="w-full h-full relative overflow-x-scroll  flex flex-col ">

            <div className="relative w-fit h-full flex flex-row gap-2 flex-nowrap">
        
                <div className="w-[20em] h-full relative bg-black px-1 bg-opacity-20 rounded-lg">
                    <div className="flex flex-row justify-between ">
                        <h1 className="text-ValoGreen font-DinHeavy font-black tracking-widest uppercase">Type-</h1>
                        <p className="text-ValoGreen font-DinHeavy font-black tracking-widest uppercase">{currentWeapon && currentWeapon.shopData ? currentWeapon?.shopData.category : currentWeapon?.displayName}</p>
                    </div>
                </div>
                <div className="w-[20em]  h-full relative bg-black px-1">

                </div>

            </div>

        </div>
    </div>
  )
}

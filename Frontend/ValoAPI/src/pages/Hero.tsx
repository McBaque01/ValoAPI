import AgentHero from '../components/agent/AgentHero'
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { WeaponHero } from '../components/weapon/WeaponHero';
import { BuddiesHero } from '../components/buddies/BuddiesHero';
import { TitleHero } from '../components/title/TitleHero';
import { CardHero } from '../components/card/CardHero';
import {SprayHero } from '../components/spray/SprayHero';

export const Hero = () => {

  const [activePage, setActivePage] = useState<string>('agent'); 

  useEffect(() => {
    const initialPageFromURL = window.location.pathname.slice(1);
    if (['agent', 'weapon', 'buddy', 'card', 'title','spray'].includes(initialPageFromURL)) {
      setActivePage(initialPageFromURL);
    }
  }, []); 

  const handlePageChange = (page: string) => {
    console.log(page);
    setActivePage(page);

  };

  


  return (
    <div className='w-full h-full flex flex-col relative overflow-hidden'>

      <div className=' bg-ValoDark flex flex-row p-[1.4em] z-40'>
        <div className=' h-full w-full pl-[1em] flex flex-row gap-4 items-center'>

          <div className='flex flex-row gap-4 justify-center items-center w-fit min-w-[8em]'>
            <Icon icon="simple-icons:valorant" width="30" height="30" color='#EBEEB2' />
            <h4 className='font-Valorant text-[1.2em] text-[#EBEEB2] w-full h-full '>vALO-API</h4>
          </div>

          <div className='  w-[90%] h-full flex flex-row justify-center  lg:hidden sm:hidden md:hidden'>
            <ul className='h-fit w-full flex flex-row justify-evenly lg:hidden sm:hidden md:hidden text-ValoYellow font-DinRegular uppercase text-[0.9em] font-black tracking-widest'>
              <li  className={`cursor-pointer ${activePage === "agent" ? "text-ValoGreen" : ""}`} onClick={() => handlePageChange('agent')}>AGENTS</li>
              <li  className={`cursor-pointer ${activePage === "weapon" ? "text-ValoGreen" : ""}`} onClick={() => handlePageChange('weapon')}>Weapons</li>
              <li  className={`cursor-pointer ${activePage === "buddy" ? "text-ValoGreen" : ""}`} onClick={() => handlePageChange('buddy')}>Buddies</li>
              <li  className={`cursor-pointer ${activePage === "card" ? "text-ValoGreen" : ""}`} onClick={() => handlePageChange('card')}>Cards</li>
              <li  className={`cursor-pointer ${activePage === "title" ? "text-ValoGreen" : ""}`} onClick={() => handlePageChange('title')}>Titles</li>
              <li  className={`cursor-pointer ${activePage === "spray" ? "text-ValoGreen" : ""}`} onClick={() => handlePageChange('spray')}>Sprays</li>
            </ul>
          </div>

        </div>
      </div>
      <div className='w-full h-full relative'>

        <div className='absolute xl:hidden 2xl:hidden z-40 w-full h-fit flex flex-col items-center justify-center'>
            <ul className='h-fit w-full flex flex-row flex-nowrap justify-start items-center xl:hidden 2xl:hidden bg-transparent gap-1 p-2 overflow-x-scroll lg:overflow-hidden relative text-[0.8em] font-black font-DinRegular text-ValoYellow uppercase tracking-[0.2em]'>
              <li className={`w-fit h-full rounded-full px-[1em] py-[0.8em] text-[0.9em] cursor-pointer ${activePage === 'agent' ? ' bg-ValoGreen text-ValoDark' : 'bg-slate-700 text-ValoYellow'}`} onClick={() => handlePageChange('agent')}>Agents</li>
              <li className={`w-fit h-full rounded-full px-[1em] py-[0.8em] text-[0.9em] cursor-pointer ${activePage === 'weapon' ? 'bg-ValoGreen text-ValoDark' : 'bg-slate-700 text-ValoYellow'}`} onClick={() => handlePageChange('weapon')}>Weapons</li>
              <li className={`w-fit h-full rounded-full px-[1em] py-[0.8em] text-[0.9em] cursor-pointer ${activePage === 'buddy' ? 'bg-ValoGreen text-ValoDark' : 'bg-slate-700 text-ValoYellow'}`} onClick={() => handlePageChange('buddy')}>Buddies</li>
              <li className={`w-fit h-full rounded-full px-[1em] py-[0.8em] text-[0.9em] cursor-pointer ${activePage === 'card' ? 'bg-ValoGreen text-ValoDark' : 'bg-slate-700 text-ValoYellow'}`} onClick={() => handlePageChange('card')}>Cards</li>
              <li className={`w-fit h-full rounded-full px-[1em] py-[0.8em] text-[0.9em] cursor-pointer ${activePage === 'title' ? 'bg-ValoGreen text-ValoDark' : 'bg-slate-700 text-ValoYellow'}`} onClick={() => handlePageChange('title')}>Titles</li>
              <li className={`w-fit h-full rounded-full px-[1em] py-[0.8em] text-[0.9em] cursor-pointer ${activePage === 'spray' ? 'bg-ValoGreen text-ValoDark' : 'bg-slate-700 text-ValoYellow'}`}  onClick={() => handlePageChange('spray')}>Sprays</li>
            </ul>
        </div>

        {activePage === 'agent' && <AgentHero />}
        {activePage === 'weapon' && <WeaponHero />}
        {activePage === 'buddy' && <BuddiesHero />}
        {activePage === 'card' && <CardHero />}
        {activePage === 'title' && <TitleHero />}
        {activePage === 'spray' && <SprayHero />}

      </div>
    

      
    </div>
  )
}

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

          <div className='flex flex-row gap-4 justify-center items-center'>
            <Icon icon="simple-icons:valorant" width="30" height="30" color='#EBEEB2' />
            <h4 className='font-Valorant text-[1.2em] text-[#EBEEB2] w-full h-full'>vALO-API</h4>
          </div>

          <div className=' bg-slate-300 w-[90%] h-full flex flex-row justify-center  lg:hidden sm:hidden md:hidden'>
            <ul className='h-fit w-full flex flex-row justify-evenly bg-slate-400 lg:hidden sm:hidden md:hidden'>
              <li onClick={() => handlePageChange('agent')}>Agents</li>
              <li onClick={() => handlePageChange('weapon')}>Weapons</li>
              <li onClick={() => handlePageChange('buddy')}>Buddies</li>
              <li onClick={() => handlePageChange('card')}>Cards</li>
              <li onClick={() => handlePageChange('title')}>Titles</li>
              <li onClick={() => handlePageChange('spray')}>Sprays</li>
            </ul>
          </div>

        </div>
      </div>
      <div className='w-full h-full relative'>

        <div className='absolute xl:hidden 2xl:hidden z-40 bg-transparent w-full h-fit flex flex-col items-center justify-center'>
            <ul className='h-fit w-full flex flex-row flex-nowrap justify-start items-center bg-transparent xl:hidden 2xl:hidden bg-red-800 gap-1 p-1 overflow-x-scroll relative text-[1em] font-black font-DinRegular'>
              <li className='w-fit h-full bg-slate-700 rounded-full px-2' onClick={() => handlePageChange('agent')}>Agents</li>
              <li className='w-fit bg-slate-700 rounded-full px-2' onClick={() => handlePageChange('weapon')}>Weapons</li>
              <li  className='w-fit bg-slate-700 rounded-full px-2' onClick={() => handlePageChange('buddy')}>Buddies</li>
              <li  className='w-fit bg-slate-700 rounded-full px-2'onClick={() => handlePageChange('card')}>Cards</li>
              <li className='w-fit bg-slate-700 rounded-full px-2'  onClick={() => handlePageChange('title')}>Titles</li>
              <li  className='w-fit bg-slate-700 rounded-full px-2' onClick={() => handlePageChange('spray')}>Sprays</li>
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

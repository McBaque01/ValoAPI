
import AgentHero from '../components/agent/AgentHero'
import { Icon } from '@iconify/react';


export const Hero = () => {
  return (
    <div className='w-full h-screen flex flex-col'>

      <div className=' bg-ValoRed flex flex-row p-[1.4em] z-40'>
        <div className=' h-full w-full pl-[1em] flex flex-row gap-4 items-center'>
          <Icon icon="simple-icons:valorant" width="30" height="30" />
          <h4 className='font-Valorant text-[1.2em]'>vALORANT-API</h4>
          
        </div>
      </div>

      <AgentHero/>
    

      
    </div>
  )
}

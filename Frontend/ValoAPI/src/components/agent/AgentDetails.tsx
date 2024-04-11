import React, { useEffect, useState } from 'react'
import { AgentType } from '../typings/agentTypes';
import AgentButton from './AgentButton';
import { AgentAbilities } from './AgentAbilities';

interface AgentDetailsProps {
    currAgent: AgentType | null;
    agents: AgentType[];
    handleCurrentAgent: (agent: AgentType[]) => void;
  }

  interface AbilitiesState {
    title: string;
    description: string;
  }


  const AgentDetails: React.FC<AgentDetailsProps> = ({ currAgent, handleCurrentAgent, agents }) => {
   
    const [Abilities, SetAbilities] = useState<AbilitiesState>({
      title:  currAgent ? currAgent.role.displayName : "",
      description: currAgent ? currAgent.role.description: "",
    });

  useEffect(()=>{
    SetAbilities({
      title:  currAgent ? currAgent.role.displayName : "",
      description: currAgent ? currAgent.role.description : "",
    })
  },[currAgent])


  const SetAbility = (title: string, description: string): void => {
     SetAbilities({
      title: title,
      description: description,
     })
  }


    
    return (
        <>
            <div className="w-full h-screen relative">
              <div className='h-full w-full absolute overflow-hidden'>

                  <div className='w-full h-full flex flex-col p-2 gap-2'>

                        <div className='w-full h-full flex gap-2 relative z-40 flex-row xl:justify-end 2xl:justify-end '>
                            <div className='w-full xl:w-[40%] 2xl:w-[40%] h-fit flex gap-1 flex-col p-1'>

                              <h1 className='w-fit font-Poppins font-black tracking-[0.08em] text-[1.4em] text-ValoRed uppercase bg-ValoDark px-2 bg-opacity-75'>
                                {Abilities.title}
                                
                              </h1>

                              <p className='w-fit font-Poppins font-black text-ValoDark text-[0.7em] uppercase p-1 border-b-[0.1em] border-y-white-900'>
                                {Abilities.description}
                              </p>

                            </div>
                            <div className='min-w-[7em] max-w-[10em] w-[10em] h-full text-center font-bold  p-2'>
                              <AgentAbilities currAgent={currAgent} SetAbility={SetAbility}/>
                            </div>
                        </div>

                       

                        <div className=' w-full h-full flex flex-col items-end '>
                          <div className='w-full h-full relative z-40 flex justify-end items-end'>
                                <div className='sm:w-[70%]  md:w-[65%] lg:w-[60%] 2xl:w-[50%] xl:w-[50%] h-fit flex flex-col items-center'>
                                  <p className='font-Tungsten text-8xl uppercase tracking-[0.08em] text-ValoRed 2xl:text-[12em]  transition-all ease-in-out duration-300'>{currAgent !== null ? currAgent.displayName : null}</p>
                                  <p className='font-Tungsten text-6xl tracking-widest uppercase text-ValoYellow 2xl:text-[8em]  transition-all ease-in-out duration-300'>{currAgent !== null ? currAgent.role.displayName : null}</p>
                                </div>
                          </div>
                          <AgentButton handleCurrentAgent={handleCurrentAgent} agents={agents}/>
                        </div>
                    
                  </div>

                  <div className='w-[40em] xl:w-[50em] 2xl:w-[50em] h-full absolute top-[22em] left-1/3 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-30'
                    style={{
                      backgroundImage: `url(${currAgent !== null ? currAgent.background : null})`,
                      backgroundSize:'cover',
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: 'center',
                      opacity:'0.2'
                     }}
                  ></div>
                  
                  <div className='w-[54em] h-full absolute top-[28em] left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-30 overflow-hidden'
      
                    style={{
                      backgroundImage: `url(${currAgent !== null ? currAgent.fullPortrait : null})`,
                      backgroundSize:'cover',
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: 'center',
                     
                    }}
                  
                  ></div>
                 

              </div>

              
             
            </div>
        </>
    )
  };

export default AgentDetails;

import React, { useEffect } from 'react'
import { AgentType } from '../typings/agentTypes';
import AgentButton from './AgentButton';

interface AgentDetailsProps {
    currAgent: AgentType | null;
    agents: AgentType[];
    handleCurrentAgent: (agent: AgentType[]) => void;
  }

  const AgentDetails: React.FC<AgentDetailsProps> = ({ currAgent, handleCurrentAgent, agents }) => {
   
    useEffect(()=>{

    },[currAgent])

    return (
        <>
            <div className="w-full h-screen relative">
              <div className='h-full w-full absolute overflow-hidden'>

                  <div className='w-full h-full flex flex-col p-2 gap-2'>
                        <div className=' w-full h-full' ></div>
                        <div className=' w-full h-[65%] flex '>
                            

                        </div>
                        <div className=' w-full h-full flex flex-col items-end p-4'>
                          <div className='w-full h-full relative z-40 flex justify-end items-center'>
                                <div>
                                  <p className='font-Tungsten text-8xl uppercase tracking-[0.08em] text-ValoRed 2xl:text-[20em] transition-all ease-in-out duration-300'>{currAgent !== null ? currAgent.displayName : null}</p>
                                  <p className='font-Tungsten text-6xl tracking-widest uppercase text-ValoYellow 2xl:text-[12em] transition-all ease-in-out duration-300'>{currAgent !== null ? currAgent.role.displayName : null}</p>
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
                  
                  <div className='w-[40em] h-full absolute top-[28em] left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-30 overflow-hidden'
      
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

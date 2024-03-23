import React,{ useEffect, useRef } from 'react'
import { AgentType } from '../typings/agentTypes';

interface AgentButtonProps {
    agents: AgentType[];
    handleCurrentAgent: (agent: AgentType[]) => void;
}
const AgentButton : React.FC<AgentButtonProps> = ({agents, handleCurrentAgent}) => {
  return (
    <>  <div className='flex flex-row justify-center flex-wrap w-[100%] h-[14em] gap-4 p-4 fixed overflow-y-scroll overflow-x-scroll bottom-[4em] z-40'>
            {agents && agents.length > 0 && agents.map(agent => (
                <div key={agent.uuid} className='border-2 hover:border-ValoGreen overflow-hidden h-[5em] w-[5em]'>
                    <div className='h-[5em] w-[5em] hover:bg-slate-200 hover:scale-105' 
                            style={{
                            backgroundImage: `url(${agent.displayIcon})`,
                            backgroundSize:'cover',
                            
                            }}
                            onClick={() => handleCurrentAgent([agent])}
                            >
                            <div className='absolute w-[7em] h-[7em] hover:bg-gradient-to-t from-ValoGreen from-30% via-transparent via-60% to-transparent hover:opacity-50'></div>
                        </div>
                </div>              
                ))  
            }
        </div>
    </>
  )
}

export default AgentButton;

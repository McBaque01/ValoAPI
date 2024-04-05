import React from 'react'
import { AgentType } from '../typings/agentTypes';

interface AgentButtonProps {
    agents: AgentType[];
    handleCurrentAgent: (agent: AgentType[]) => void;
}
const AgentButton : React.FC<AgentButtonProps> = ({agents, handleCurrentAgent}) => {
  return (


    <> 
    
    <div className='w-full h-full flex justify-end items-center'>
       <div className='flex flex-wrap items-center justify-center w-[46%] h-fit gap-[1.4em] lg:h-[60%] sm:h-[65%] md:h-[65%] z-40 relative overflow-y-scroll py-2 px-4 scrollbar-thin scrollbar-thumb-ValoGreen scrollbar-track-transparent scrollbar-thumb-rounded-full'>
            {agents && agents.length > 0 && agents.map(agent => (
                <div key={agent.uuid} className='border-2 hover:border-ValoGreen h-[3.3em] w-[6.4em] overflow-hidden'>
                    <div className='h-fit w-fit hover:bg-slate-200 hover:scale-105' 
                            style={{
                            backgroundImage: `url(${agent.killfeedPortrait})`,
                            backgroundSize:'contain',
                            backgroundRepeat:'no-repeat',
                            
                            }}
                            onClick={() => handleCurrentAgent([agent])}
                            >
                            <div className='h-[3em] w-[6em] hover:bg-gradient-to-t from-ValoGreen from-30% via-transparent via-60% to-transparent hover:opacity-50'></div>
                        </div>
                </div>              
                ))  
            }
        </div>


    </div>
    </>
  )
}

export default AgentButton;

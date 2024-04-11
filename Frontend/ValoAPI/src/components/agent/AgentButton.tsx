import React from 'react'
import { AgentType } from '../typings/agentTypes';

interface AgentButtonProps {
    agents: AgentType[];
    handleCurrentAgent: (agent: AgentType[]) => void;
}
const AgentButton : React.FC<AgentButtonProps> = ({agents, handleCurrentAgent}) => {
  return (


    <> 
    <div className='w-full h-fit p-4'>
      <div className='w-full h-fit p-2'>
      {/* overflow-x-scroll py-2 px-4 scrollbar-thin scrollbar-thumb-ValoGreen scrollbar-track-transparent scrollbar-thumb-rounded-full */}
        <div className='flex w-full gap-[1em] h-fit z-40 relative overflow-y-hidden py-4  2xl:flex-wrap xl:flex-wrap 2xl:justify-center xl:justify-center'>
              {agents && agents.length > 0 && agents.map(agent => (
                  <div key={agent.uuid} className='border-2 hover:border-ValoGreen h-fit min-w-[6.4em] relative overflow-hidden'>
                      <div className='h-full w-full hover:bg-slate-200 hover:scale-105' 
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


    </div>
    </>
  )
}

export default AgentButton;

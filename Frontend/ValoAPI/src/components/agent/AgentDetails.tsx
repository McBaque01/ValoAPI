import React, { useEffect } from 'react'
import { AgentType } from '../typings/agentTypes';
import AgentButton from './AgentButton';

interface AgentDetailsProps {
    currAgent: AgentType | null;
    agents: AgentType[];
    handleCurrentAgent: (agent: AgentType[]) => void;
  }

  const AgentDetails: React.FC<AgentDetailsProps> = ({ currAgent, handleCurrentAgent, agents }) => {
    console.log("YEHEY HELLO",currAgent);

    useEffect(()=>{

    },[currAgent])

    


    return (
        <>
            <div className="w-full h-screen relative">
              <div className='h-full w-full absolute overflow-hidden'>

                  <div className='w-full h-full flex flex-col p-2 gap-2'>
                        <div className='bg-red-300 w-full h-full' ></div>
                        <div className='bg-red-600 w-full h-full'>
                          <AgentButton handleCurrentAgent={handleCurrentAgent} agents={agents}/>

                        </div>
                        <div className='bg-red-900 w-full h-full'></div>
                    
                  </div>

                  <div className='w-[40em] h-full absolute top-[22em] left-1/3 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-30'
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

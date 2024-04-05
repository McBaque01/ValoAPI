import React, { useEffect } from 'react'
import { AgentType } from '../typings/agentTypes';


interface AgentDetailsProps {
    currAgent: AgentType | null;
  }

  const AgentDetails: React.FC<AgentDetailsProps> = ({ currAgent }) => {
    console.log("YEHEY HELLO",currAgent);

    useEffect(()=>{

    },[currAgent])



    return (
        <>
            <div className="w-full h-full">
              <div className='h-full w-full'>

                  <div className='bg-red-300 w-full h-full flex flex-col p-2 gap-2'>
                        <div className='bg-red-400 w-full h-[50%] grow-0' ></div>
                        <div className='bg-red-400 w-full h-full grow-1'></div>
                        <div className='bg-red-400 w-full h-[50%] grow-0'></div>
                    
                  </div>

                  <div className='w-full h-full absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-30'
                    style={{
                      backgroundImage: `url(${currAgent !== null ? currAgent.background : null})`,
                      backgroundSize:'auto',
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: 'center',
                      opacity:'0.2'
                     }}
                  ></div>
                  
                  <div className='w-[90%] h-[90%] absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-30 overflow-hidden xl:w-[40%] 2xl:w-[40%] sm:w-full '
      
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

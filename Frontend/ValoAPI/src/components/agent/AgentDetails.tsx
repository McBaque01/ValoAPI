import React, { useEffect } from 'react'
import { AgentType } from '../typings/agentTypes';
import AgentButton from './AgentButton';

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
              <div className='h-full w-full relative flex flex-row overflow-hidden'>

                  <div className=' w-full h-full'>
                        <div className=' w-[100%] h-[50%] relative z-20 p-2'>
                            <div  className=' w-[90%] h-full relative z-20 '></div>
                        </div>
                  </div>
                 
                  <div className='w-[40em] h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden z-30'

                    style={{
                      backgroundImage: `url(${currAgent !== null ? currAgent.background : null})`,
                      backgroundSize:'cover',
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: 'center',
                      opacity:'0.4'
                     }}
                  
                  
                  ></div>
                  
                  <div className='w-[40em] h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 overflow-hidden'
                  
                    style={{
                      backgroundImage: `url(${currAgent !== null ? currAgent.fullPortrait : null})`,
                      backgroundSize:'cover',
                      backgroundRepeat: `no-repeat`,
                      backgroundPosition: 'center',
                     
                    }}
                  
                  
                  ></div>


                  <div className=' w-full h-full'>
                        <div className=' w-[100%] h-[50%] relative z-20 p-2 flex flex-col items-end'>
                            <div  className=' w-[90%] h-full relative z-20'></div>
                        </div>
                  </div>

                  

              </div>
            </div>
        </>
    )
  };

export default AgentDetails;

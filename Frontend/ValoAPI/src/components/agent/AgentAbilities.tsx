import React from 'react'
import { AgentType } from '../typings/agentTypes';
import { Ability } from '../typings/agentTypes';
import { Icon } from '@iconify/react';
interface AgentSkillsProps {
    currAgent: AgentType | null;
    SetAbility: (title: string, description: string) => void;
}

export const AgentAbilities: React.FC<AgentSkillsProps> = ({currAgent, SetAbility})  => {
    
   
    return (
        <>
            <div className='flex flex-row gap-5 h-full w-full p-2 items-center justify-center'>

                <div className='flex flex-row gap-2 w-full h-full  items-center justify-center 2xl:p-[4em] xl:p-[4em]'>
                    <div className='w-[3.4em] xl:w-[10em] 2xl:w-[10em] h-[3.4em] xl:h-[5em] 2xl:h-[5em] transition-all ease-in-out duration-300 active:scale-[1.3]'
                        style={{
                        backgroundImage: `url(${currAgent !== null ? currAgent.role.displayIcon : null})`,
                        backgroundSize:'contain',
                        backgroundRepeat:'no-repeat',
                        backgroundPosition: 'center'
                        
                        }}
                        onClick={() => {
                            if (currAgent) {
                            SetAbility(currAgent.role.displayName, currAgent.role.description);
                            }
                        }}
                        >
                    </div>

                    {currAgent && currAgent != null && currAgent.abilities.map((ability: Ability, index: number) => (
                            <div key={ability.slot} className='w-[3.4em] xl:w-[10em] 2xl:w-[10em] h-[3.4em] xl:h-[5em] 2xl:h-[5em] transition-all ease-in-out active:scale-[1.3]'>

                                {ability.displayIcon ? 

                                <div className='h-full w-full hover:scale-105 transition-all ease-in-out active:scale-[1.3]
                            duration-[`${300 + (index * (1000 / currAgent.abilities.length))}`' 
                                        style={{
                                        backgroundImage:`url(${ability.displayIcon})`,
                                        backgroundSize:'contain',
                                        backgroundRepeat:'no-repeat',
                                        backgroundPosition: 'center',
                                    
                                        }}
                                        onClick={()=> SetAbility(ability.displayName, ability.description)}
                                        >
                                </div>
                                :
                                <div className='h-full w-full hover:scale-105 flex justify-center items-center transition-all ease-in-out duration-300' 
                                onClick={()=> SetAbility(ability.displayName, ability.description)}
                                >
                                    <Icon icon="ri:question-line" width="full" height="full" color='white'/>
                                </div>
                                
                                
                                }
                            </div>              
                            ))  
                        }
                </div>

           </div>
        </>
    );

   
  
}



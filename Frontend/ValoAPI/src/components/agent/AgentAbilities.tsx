import React from 'react'
import { AgentType } from '../typings/agentTypes';
import { Ability } from '../typings/agentTypes';
interface AgentSkillsProps {
    currAgent: AgentType | null;
    SetAbility: (title: string, description: string) => void;
}

export const AgentAbilities: React.FC<AgentSkillsProps> = ({currAgent, SetAbility})  => {
    
   
    return (
        <div className='w-full h-full '>
            <div className='flex flex-col items-center gap-5'>

                <div className='w-[5em] h-[5em] hover:scale-110 active:scale-110'
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

                <div className='flex flex-col gap-5 w-full'>
                    {currAgent && currAgent != null && currAgent.abilities.map((ability: Ability) => (
                            <div key={ability.slot} className=' h-[4em] w-full relative overflow-hidden'>
                                <div className='h-full w-full hover:scale-105' 
                                        style={{
                                        backgroundImage: `url(${ability.displayIcon})`,
                                        backgroundSize:'contain',
                                        backgroundRepeat:'no-repeat',
                                        backgroundPosition: 'center'
                                        }}
                                        onClick={()=> SetAbility(ability.displayName, ability.description)}
                                        >
                                        
                                </div>
                            </div>              
                            ))  
                        }
                </div>

           </div>
        </div>
    );

   
  
}



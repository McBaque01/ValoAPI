import React, {useState, useEffect, useRef} from 'react';

import fetchAgents from '../APIs/fetchAgents'
import { AgentType } from '../typings/agentTypes';
import AgentButton from './AgentButton';

const AgentHero = () => {

    const BackgroundRef = useRef<HTMLDivElement>(null);

    const [agents, setAgents] = useState<AgentType[]>([]);
    const [currAgent, setCurrAgent] = useState<AgentType[] | null>([]);

    const handleCurrentAgent = (agent: AgentType[] | null = null) => {
        setCurrAgent(agent !== null ? agent : agents.length > 0 ? [agents[0]] : null);
    }

    let Gradient: string[] | null = [];

    useEffect(()=>{
        const AgentData = async () => {
            try {
                const agentsData = await fetchAgents();
                console.log(agentsData);
                setAgents(agentsData);
                
            } catch (error) {
                console.error('Error fetching agents:', error);
            }
        };
        AgentData();
    },[])

    useEffect(()=>{
        if (agents.length > 0) {
            handleCurrentAgent([agents[0]]); // Assuming you want to set the first agent as the current agent
        }
       
    },[agents])


    useEffect(() => {
        if (currAgent && Array.isArray(currAgent) && currAgent.length > 0 && BackgroundRef.current !== null) {
          const gradient = currAgent[0].backgroundGradientColors;
      
          if (gradient && gradient.length >= 4) {
            BackgroundRef.current.style.background = 
              `linear-gradient(to top left, #${gradient[2]}, rgba(255, 153, 150, 0), #${gradient[0]}),
               linear-gradient(to top right, #${gradient[3]}, rgba(255, 153, 150, 0), #${gradient[1]})`;
          } else {
            BackgroundRef.current.style.background = ''; 
          }
        }
      }, [currAgent]);

  


    console.log("AGENTS", agents);
    console.log("currAgents", currAgent);

    
  return (
    <>  
        <div className='w-full h-full flex flex-row justify-start items-center' ref={BackgroundRef}>
            <AgentButton agents={agents} handleCurrentAgent={handleCurrentAgent}/>
           
        </div>
    </>
    
  )
}

export default AgentHero;


import { useState, useEffect, useRef } from 'react';
import fetchAgents from '../APIs/fetchAgents';
import { AgentType } from '../typings/agentTypes';
import AgentDetails from './AgentDetails';


const AgentHero = () => {
    const BackgroundRef = useRef<HTMLDivElement>(null);
    const [agents, setAgents] = useState<AgentType[]>([]);
    const [currAgent, setCurrAgent] = useState<AgentType | null>(null);

    const handleCurrentAgent = (agent: AgentType[] | null) => {
        setCurrAgent(agent !== null ? agent[0] : null);
    }

    useEffect(() => {
        const fetchAgentData = async () => {
            try {
                const agentsData = await fetchAgents();
                setAgents(agentsData);
            } catch (error) {
                console.error('Error fetching agents:', error);
            }
        };
        fetchAgentData();
    }, []);

    useEffect(() => {
        if (agents.length > 0) {
            setCurrAgent(agents[0]);
        }
    }, [agents]);

    useEffect(() => {
        if (currAgent && BackgroundRef.current) {
            const gradient = currAgent.backgroundGradientColors;
            if (gradient && gradient.length >= 4) {
                BackgroundRef.current.style.background =
                    `linear-gradient(to top left, #${gradient[2]}, rgba(56, 56, 56, 0.2), #${gradient[0]}),
                    linear-gradient(to top right, #${gradient[3]}, rgba(56, 56, 56, 0.2), #${gradient[1]})`;
            } else {
                BackgroundRef.current.style.background = '';
            }
        }
    }, [currAgent]);
    console.log(agents)
    return (
        <div className='w-full h-fit overflow-hidden' ref={BackgroundRef} >
            <AgentDetails currAgent={currAgent} handleCurrentAgent={handleCurrentAgent} agents={agents}/>
        </div>

            
    );
};

export default AgentHero;
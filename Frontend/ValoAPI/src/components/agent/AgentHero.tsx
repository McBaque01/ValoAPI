
import { useState, useEffect, useRef } from 'react';
import fetchAgents from '../APIs/fetchAgents';
import { AgentType } from '../typings/agentTypes';
import AgentDetails from './AgentDetails';

import { Suspense } from 'react';

import { ParentLoading } from '../utils/ParentLoading';

import CssFilterConverter from 'css-filter-converter';

const AgentHero = () => {
    const BackgroundRef = useRef<HTMLDivElement>(null);
    const AgentRef =  useRef<HTMLDivElement>(null);

    const [agents, setAgents] = useState<AgentType[]>([]);
    const [currAgent, setCurrAgent] = useState<AgentType | null>(null);
    const [agentColor, setagentColor] = useState<Resu | undefined>();



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

 

    interface Resu {
        color: string | null; 
        
    }
    
    let resu: Resu | undefined;

    useEffect(() => {
        if (currAgent && BackgroundRef.current) {
            const gradient = currAgent.backgroundGradientColors;

            const hex: string | undefined = currAgent && currAgent !== undefined && currAgent?.backgroundGradientColors ? currAgent.backgroundGradientColors[0].slice(0, 6) : undefined;
    
            resu = CssFilterConverter.hexToFilter(typeof hex === 'string' ? `#${hex}` : "");
            //  resu = CssFilterConverter.hexToFilter("#3be0c3");
             setagentColor(resu)
            if (gradient && gradient.length >= 4 && AgentRef && AgentRef.current !== null) {
                BackgroundRef.current.style.background =
                    `linear-gradient(to top left, #${gradient[2]}, rgba(56, 56, 56, 0.2), #${gradient[0]}),
                    linear-gradient(to top right, #${gradient[3]}, rgba(56, 56, 56, 0.2), #${gradient[1]})`;
                    AgentRef.current.style.filter = `${resu.color}`
            } else {
                BackgroundRef.current.style.background = '';
            }
        }
    }, [currAgent]);
    console.log(agentColor)
    // console.log(agents)
   
    // let hex: string | undefined = currAgent && currAgent !== undefined && currAgent?.backgroundGradientColors ? currAgent.backgroundGradientColors[0].slice(0, 6) : undefined;
    
    // // const result = CssFilterConverter.hexToFilter(typeof hex === 'string' ? `#${hex}` : "");
    // const result = CssFilterConverter.hexToFilter("#3be0c3");
    
    return (

        <Suspense fallback={<ParentLoading />}>
           <div className='w-full h-fit overflow-hidden relative' ref={BackgroundRef} >
            <div className="w-[2em] h-[2em] p-4 bg-black absolute top-0 right-1" ref={AgentRef}>
               
            </div>
            <AgentDetails currAgent={currAgent} handleCurrentAgent={handleCurrentAgent} agents={agents}/>
            </div>  
        </Suspense>

        
    );
};

export default AgentHero;
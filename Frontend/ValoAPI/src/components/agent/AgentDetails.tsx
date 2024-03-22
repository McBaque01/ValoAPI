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
            <div>{currAgent !== null ? currAgent.uuid : ""}</div>
        </>
    )
  };

export default AgentDetails;

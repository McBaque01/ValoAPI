export interface Ability {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string;
}

export interface AgentType {
    id?: string;
    uuid: string;
    displayName:string;
    description: string;
    developerName:string;
    characterTags: string[] | null;
    displayIcon: string;
    displayIconSmal: string;
    bustPortrait: string;
    fullPortrait: string;
    fullPortraitV2: string;
    killfeedPortrait: string;
    background: string;
    backgroundGradientColors: string[];
    assetPath: string;
    isFullPortraitRightFacing: boolean;
    isPlayableCharacter: boolean;
    isAvailableForTest: boolean;
    isBaseContent: boolean;
    abilities: Ability[];
    role: {
        uuid: string;
        displayName: string;
        description: string 
        displayIcon: string
        assetPath: string
    }
    recruitmentData: {
        counterId: string;
        milestoneId: string;
        milestoneThreshold: number;
        useLevelVpCostOverride: boolean;
        levelVpCostOverride: number;
        startDate: string;
    } | null;   

    voiceLine: {
        minDuration: string;
        maxDuration: string;
        mediaList:{
            id: number;
            wwise: string;
            wave: string;
        }| null;
    } | null;
}


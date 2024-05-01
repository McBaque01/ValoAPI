export interface BuddyType{
    uuid: string;
    displayName: string;
    isHiddenIfNotOwned: boolean;
    themeUuid: string | null;
    displayIcon: string;
    assetPath: string;
    levels: levelTypes | null;
}

interface levelTypes {
    uuid: string;
    charmLevel: number;
    hideIfNotOwned: number;
    displayName: string;
    displayIcon: string;
    assetPath: string;
}
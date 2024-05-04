export interface CardType{
    uuid: string;
    displayName: string;
    isHiddenIfNotOwned: boolean;
    themeUuid: string | null;
    displayIcon: string;
    smallArt: string
    wideArt: string;
    largeArt: string;
    assetPath: string;
}
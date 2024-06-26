export interface SprayType {
    uuid: string
    displayName: string 
    category: string
    themeUuid: string
    isNullSpray: boolean
    hideIfNotOwned: boolean
    displayIcon: string
    fullIcon: string
    fullTransparentIcon: string
    animationPng: string
    animationGif: string
    assetPath: string
    levels: levels | null;
}

interface levels {
    uuid: string
    sprayLevel: number
    displayName: string
    displayIcon: string
    assetPath: string
}
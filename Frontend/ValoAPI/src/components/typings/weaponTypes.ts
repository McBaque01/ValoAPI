
interface damageRangesType{
    rangeStartMeters: number;
    rangeEndMeters: number;
    headDamage: number;
    bodyDamage: number;
    legDamage: number;
}

interface chromasType {
    uuid: string;
    displayName: string;
    displayIcon: string | null;
    fullRender: string;
    swatch: string | null;
    streamedVideo: string | null;
    assetPath: string;
}

interface levelsType{
    uuid: string;
    displayName: string;
    levelItem: string | null;
    displayIcon: string;
    streamedVideo: string | null;
    assetPath: string;

}

interface skinsType{
    uuid:string;
    displayName: string;
    themeUuid: string;
    contentTierUuid: string;
    displayIcon: string;
    wallpaper: string;
    assetPath: string;
    chromas: chromasType[];
    levels: levelsType[];
}


export interface WeaponType{
    uuid: string;
    displayName: string;
    category: string;
    defaultSkinUuid: string;
    displayIcon: string;
    killStreamIcon: string,
    assetPath: string;
    weaponStats: {
        fireRate: number;
        magazineSize: number;
        runSpeedMultiplier: number;
        equipTimeSeconds: number;
        reloadTimeSeconds: number;
        firstBulletAccuracy: number
        shotgunPelletCount: number
        wallPenetration: string;
        feature: string | null;
        fireMode: string | null;
        altFireType: string;
        adsStats: {
            zoomMultiplier: number;
            fireRate: number;
            runSpeedMultiplier: number;
            burstCount: number;
            firstBulletAccuracy: number;
        };
        altShotgunStats: null | {
            shotgunPelletCount: number;
            burstRate: number;
        };
        airBurstStats: null | {
            shotgunPelletCount: number;
            burstDistance: number;
        };
        damageRanges: damageRangesType[];
            
    };

    shopData: {
        cost: number;
        category: string;
        shopOrderPriority: string;
        categoryText: string;
        gridPosition: {
            row: number
            column: number;
        };
        canBeTrashed: boolean;
        image: null | string;
        newImage: null | string;
        newImage2: null | string;
        assetPath: string;
    };
    skins: skinsType[];
}
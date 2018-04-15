export declare type TPError = {
    message: string;
    versions: {
        controller: string;
        interfaceMax: string;
        interfaceMin: string;
    };
};
export declare enum TPModes {
    Train = 1,
    LightRail = 4,
    Bus = 5,
    Coach = 7,
    Ferry = 9,
}

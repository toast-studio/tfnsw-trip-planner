import { TPError } from "../common/types";
export declare enum StopType {
    Any = "any",
    Coord = "coord",
    Poi = "poi",
    Stop = "stop",
}
export declare enum TPLocationType {
    Any = "any",
    Coord = "coord",
    Poi = "poi",
    Stop = "stop",
    Street = "street",
    Suburb = "suburb",
    Locality = "locality",
}
export declare type Coordinates = {
    latitude: number;
    longitude: number;
};
export declare type stopFinderResponse = {
    version: string;
    error: TPError;
    locations: any;
};

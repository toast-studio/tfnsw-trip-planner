import { TPError, TPModes } from "../common/types"

export enum StopType {
    Any = "any",
    Coord = "coord",
    Poi = "poi",
    Stop = "stop",
}

export enum TPLocationType {
    Any = "any",
    Coord = "coord",
    Poi = "poi",
    Stop = "stop",
    Street = "street",
    Suburb = "suburb",
    Locality = "locality",
}

export type Coordinates = {latitude: number, longitude: number};

export type stopFinderResponse = {
    version: string
    error: TPError,
    locations: any
};

// export type TPLocation = {
//     id: string
//     name: string
//     disassembledName: string
//     coord: [Number]
//     type: StopType
//     matchQuality: Number
//     isBest: boolean
//     parent: {
//         id: string
//         name: string
//         type: TPLocationType
//     }
//     buildingNumber?: string
//     streetName: string
//     modes?: [TPModes]
//     assignedStops: any

// };
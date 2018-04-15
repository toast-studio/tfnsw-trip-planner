"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StopType;
(function (StopType) {
    StopType["Any"] = "any";
    StopType["Coord"] = "coord";
    StopType["Poi"] = "poi";
    StopType["Stop"] = "stop";
})(StopType = exports.StopType || (exports.StopType = {}));
var TPLocationType;
(function (TPLocationType) {
    TPLocationType["Any"] = "any";
    TPLocationType["Coord"] = "coord";
    TPLocationType["Poi"] = "poi";
    TPLocationType["Stop"] = "stop";
    TPLocationType["Street"] = "street";
    TPLocationType["Suburb"] = "suburb";
    TPLocationType["Locality"] = "locality";
})(TPLocationType = exports.TPLocationType || (exports.TPLocationType = {}));
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

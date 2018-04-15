"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
function validateStopFinder(name, type) {
    switch (type) {
        case types_1.stopType.Any: {
        }
        case types_1.stopType.Coord: {
            var _a = extractCoords(name), longitude = _a.longitude, latitude = _a.latitude;
        }
        case types_1.stopType.Poi: {
        }
        case types_1.stopType.Stop: {
        }
        default:
            break;
    }
}
exports.validateStopFinder = validateStopFinder;
function extractCoords(name) {
    // split values
    var coords = name.split(":");
    // convert to numbers
    var longitude = Number(coords[0]);
    var latitude = Number(coords[1]);
    if (isNaN(longitude)) {
        throw new Error("Missing or invalid longitude.");
    }
    if (isNaN(latitude)) {
        throw new Error("Missing or invalid latitude.");
    }
    return { longitude: longitude, latitude: latitude };
}
exports.extractCoords = extractCoords;

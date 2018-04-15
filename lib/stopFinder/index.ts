import { StopType, Coordinates } from "./types"

export function validateStopFinder(name: string, type:StopType) {

    switch (type) {
        case StopType.Any: {

        }
        case StopType.Coord: {
            const {longitude, latitude} = extractCoords(name)
        }
        case StopType.Poi: {

        }
        case StopType.Stop: {

        }
        default:
            break;
    }
}

export function extractCoords(name: string): Coordinates {

    // split values
    const coords = name.split(":")

    // convert to numbers
    const longitude = Number(coords[0])
    const latitude = Number(coords[1])

    if(isNaN(longitude)) {
        throw new Error("Missing or invalid longitude.")
    }

    if(isNaN(latitude)) {
        throw new Error("Missing or invalid latitude.")
    }

    return {longitude, latitude}

}
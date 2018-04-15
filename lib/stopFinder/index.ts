import { stopType, Coordinates } from "./types"

export function validateStopFinder(name: string, type:stopType) {

    switch (type) {
        case stopType.Any: {

        }
        case stopType.Coord: {
            const {longitude, latitude} = extractCoords(name)
        }
        case stopType.Poi: {

        }
        case stopType.Stop: {

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
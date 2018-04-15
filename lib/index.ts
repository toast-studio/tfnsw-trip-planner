import axios from "axios"
import qs from "qs"
import { stopType, Coordinates } from "./stopFinder/types"
import validateStopFinder from "./stopFinder"

const apiEndpoint = "https://api.transport.nsw.gov.au/v1/tp/"

interface options {
    apiKey: string
    apiEndpoint: URL
}


/**
 * Retreive list of stations from API
 */
export class TripPlanner {

    apiKey: string
    apiEndpoint: URL = new URL(`https://api.transport.nsw.gov.au/v1/tp/`)
    outputFormat: string = "rapidJSON"

    constructor(options: options) {

        this.validateOptions(options)

        this.apiKey = options.apiKey
        this.apiEndpoint = options.apiEndpoint

    }

    // Validation
    // ==============================
    validateOptions(options: options) {

        if(options.apiKey == null) {
            throw new Error("API Key is null or missing.")
        }
    
        if(options.apiKey.length < 1) {
            throw new Error("API Key is invalid.")
        }
    
        if(options.apiEndpoint == null) {
            throw new Error("API endpoint is null or missing.")
        }
    
    }
    
    // Stop Finder
    // ==============================
    stopFinder(name: string, type:stopType = stopType.Any) {

        validateStopFinder(name)

        // Append coord string
        if(type == stopType.Coord) {
            name = `${name}:EPSG:4326`
        }

    }


    
}
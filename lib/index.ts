import axios from "axios"
import { stopType, Coordinates } from "./stopFinder/types"
import { validateStopFinder } from "./stopFinder"

const apiEndpoint = "https://api.transport.nsw.gov.au/v1/tp/"

interface options {
    apiKey: string
    apiEndpoint: string
}

const config = {
    outputFormat: "rapidJSON",
    coordOutputFormat: "EPSG:4326",
}

/**
 * Retreive list of stations from API
 */
export class TripPlanner {

    apiKey: string

    private _apiEndpoint: URL = new URL(`https://api.transport.nsw.gov.au/v1/tp/`)
    get apiEndpoint():string {
        return this._apiEndpoint.toString()
    }
    set apiEndpoint(url:string) {
        this._apiEndpoint = new URL(url)
    }

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
    async stopFinder(name: string, type:stopType = stopType.Any) {

        validateStopFinder(name, type)

        // Append coord string
        if(type == stopType.Coord) {
            name = `${name}:EPSG:4326`
        }

        const queryString = {
            outputFormat: config.outputFormat,
            coordOutputFormat: config.coordOutputFormat,
            type_sf: type,
            name_sf: name,
        }

        return axios.get(this.apiEndpoint, { params: queryString })

    }


    
}
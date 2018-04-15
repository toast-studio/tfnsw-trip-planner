import { AxiosResponse } from "axios"
import axios from "axios"
import { StopType, Coordinates } from "./stopFinder/types"
import { validateStopFinder } from "./stopFinder"

export interface options {
    apiKey: string
    apiEndpoint?: string
}

const config = {
    outputFormat: "rapidJSON",
    coordOutputFormat: "EPSG:4326",
}

/**
 * Retreive list of stations from API
 */
export default class TripPlanner {

    private apiKey: string
    private apiEndpoint: string = `https://api.transport.nsw.gov.au/v1/tp/`

    constructor(options: options) {

        this.validateOptions(options)

        this.apiKey = options.apiKey

        if(options.apiEndpoint != null) {
            this.apiEndpoint = options.apiEndpoint
        }

    }

    // Validation
    // ==============================
    private validateOptions(options: options) {

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
    async stopFinder(name: string, type:StopType = StopType.Any) {

        validateStopFinder(name, type)

        // Append coord string
        if(type == StopType.Coord) {
            name = `${name}:${config.coordOutputFormat}`
        }

        const queryString = {
            outputFormat: config.outputFormat,
            coordOutputFormat: config.coordOutputFormat,
            type_sf: type,
            name_sf: name,
        }

        return axios.get(this.apiEndpoint + "stop_finder", { params: queryString })

    }


    
}
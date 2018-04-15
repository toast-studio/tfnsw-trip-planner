import { AxiosResponse } from "axios";
import { stopType } from "./stopFinder/types";
export interface options {
    apiKey: string;
    apiEndpoint: string;
}
/**
 * Retreive list of stations from API
 */
export declare class TripPlanner {
    apiKey: string;
    private _apiEndpoint;
    apiEndpoint: string;
    outputFormat: string;
    constructor(options: options);
    validateOptions(options: options): void;
    stopFinder(name: string, type?: stopType): Promise<AxiosResponse<any>>;
}

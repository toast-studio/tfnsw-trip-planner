import { AxiosResponse } from "axios";
import { StopType } from "./stopFinder/types";
export interface options {
    apiKey: string;
    apiEndpoint?: string;
}
/**
 * Retreive list of stations from API
 */
export default class TripPlanner {
    apiKey: string;
    private _apiEndpoint;
    apiEndpoint: string;
    constructor(options: options);
    validateOptions(options: options): void;
    stopFinder(name: string, type?: StopType): Promise<AxiosResponse<any>>;
}

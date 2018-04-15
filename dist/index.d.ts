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
    private apiKey;
    private apiEndpoint;
    constructor(options: options);
    private validateOptions(options);
    stopFinder(name: string, type?: StopType): Promise<AxiosResponse<any>>;
}

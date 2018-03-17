export class SearchRequest {
    constructor() {
        this.simpleFilter = new SimpleFilter();
        this.additionalServices = [];
    }

    simpleFilter: SimpleFilter;
    additionalServices: AdditionalServices[];
}

export class AdditionalServices {

    includeService: boolean;
    service: IService;
}

export interface IService {

}

export class SimpleFilter {
    location: string;
    peopleNumber: number;

}

export class VenueFilter implements IService {
    squareRange: any;
}

export enum ServiceType {
    Venue,
    Catering
}
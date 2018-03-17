export class SearchRequest {
    constructor() {
        this.simpleFilter = new SimpleFilter();
        this.additionalServices = [];
    }

    simpleFilter: SimpleFilter;
    additionalServices: AdditionalServices[];
}

export class AdditionalServices {
    type: ServiceType;
    includeService: boolean;
    service: IService;
}

export interface IService {

}

export class SimpleFilter {

    constructor() {
        this.dateRange = new DateRange();
    }

    location: string;
    peopleNumber: number;
    eventType: string;
    dateRange: DateRange;
}

export class DateRange {
    public fromDate: Date;
    public toDate: Date;
    public duration: number;
}

export class VenueFilter implements IService {
    squareFrom: number;
    squareTo: number;
    providedWifi: Boolean;
    wardrobe: Boolean;
    parking: Boolean;
    securityGuard: Boolean;
    cleaningServiceIncluded: Boolean;
    floors: number;
    peopleNumber: number;
    toiletsAmount: number;
    cityCenter: Boolean;
    offerCatering: Boolean;
    allowThirdPartyCatering: Boolean;
    priceFrom: Number;
    priceTo: Number;
}

export enum ServiceType {
    Venue = 0,
    Catering = 1
}
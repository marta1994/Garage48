import { isNumber } from "util";

export class SearchRequest {
    constructor() {
        this.simpleFilter = new SimpleFilter();
        this.additionalServices = [];
        for(let key in ServiceType)
        {
            if (+key != NaN) {
                this.additionalServices.push(new AdditionalServices(+key));
            }
        }
    }

    simpleFilter: SimpleFilter;
    additionalServices: AdditionalServices[];
}

export class AdditionalServices {
    constructor(filterType: ServiceType) {
        this.type = filterType;
        switch(this.type) {
            case ServiceType.Venue:
            this.service = new VenueFilter();
            break;
            case ServiceType.Catering:
            this.service = {};
            break;
        }
    }
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
    needCatering: Boolean;
    needVenue: Boolean;
    needExtraService: Boolean;    
}

export class DateRange {
    public rangeType: DateRangeType;
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

export enum DateRangeType {
    AnyDate = 0,
    SpecificDate = 1,
    DateRange = 2
}

export enum ServiceType {
    Venue = 0,
    Catering = 1
}
export class SearchRequest {
    constructor() {
        this.simpleFilter = new SimpleFilter();
        this.additionalServices = [];
        for(let key in ServiceType)
        {
            if (!isNaN(+key)) {
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
            this.includeService = true;
            this.label = "Need venue";
            break;
            case ServiceType.Catering:
            this.includeService = true;
            this.label = "Need catering";
            this.service = {};
            break;
            case ServiceType.AdditionalServices:
            this.includeService = false;
            this.label = "Need extra services";
            this.service = {};
            break;
        }
    }
    type: ServiceType;
    includeService: boolean;
    label: string;
    service: IService;
}

export interface IService {

}

export class SimpleFilter {

    constructor() {
        this.dateRange = new DateRange();
        this.peopleNumber = 100;
        this.location = "Lviv";
        this.eventType = "Tech";
    }

    location: string;
    peopleNumber: number;
    eventType: string;
    dateRange: DateRange;
    needCatering: Boolean;
    needVenue: Boolean;
    needExtraService: Boolean; 
    priceFrom: Number;
    priceTo: Number;   
}

export class DateRange {
    public rangeType: DateRangeType = DateRangeType.AnyDate;
    public fromDate: Date;
    public toDate: Date;
    public duration: number;
}

export class VenueFilter implements IService {
    squareFrom: number = 300;
    squareTo: number;
    providedWifi: Boolean = true;
    wardrobe: Boolean;
    parking: Boolean = true;
    securityGuard: Boolean;
    cleaningServiceIncluded: Boolean = true;
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
    Catering = 1,
    AdditionalServices = 2
}
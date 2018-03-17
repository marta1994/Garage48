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

    constructor() {
        this.dateRange = new DateRange();
    }

    location: string;
    peopleNumber: number;
    eventType: string;
    dateRange: DateRange;
}

export class DateRange {
    public rangeType: DateRangeType;
    public fromDate: Date;
    public toDate: Date;
    public duration: number;
}

export class VenueFilter implements IService {
    squareRange: any;
}

export enum DateRangeType {
    AnyDate = 0,
    SpecificDate = 1,
    DateRange = 2
}

export enum ServiceType {
    Venue,
    Catering
}
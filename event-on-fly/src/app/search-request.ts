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
    public fromDate: Date;
    public toDate: Date;
    public duration: number;
}

export class VenueFilter implements IService {
    squareRange: any;
}

export enum ServiceType {
    Venue,
    Catering
}
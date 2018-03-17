export class SearchRequest {
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
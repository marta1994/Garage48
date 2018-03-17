export class SearchResponse {
    bundles: Bundle[];
}

export class Bundle {
    constructor() {
        this.venue = new Venue();
        this.catering = new Catering;
    }

    venue: Venue;
    catering: Catering;
    price: number;
}

    export class Catering {
        name: string;
        price: number;
        image: string;
        providedWifi: boolean;
        useIt: boolean = true;
    }
    
    export class Venue {
        amenities: string[];
        bookedDates: Date[];
        catering: VenueCatering;
        cleaningIncluded: boolean;
        description: string;
        email: string;
        floors: number;
        images: string[];
        location: Location;
        name: string;
        parking: boolean;
        peopleNumber: number;
        phoneNumber: string;
        price: Price;
        providedWifi: boolean;
        securityGuard: boolean;
        square: number;
        toiletsAmount: any;
        wardrobe: boolean;
        website: string;
        useIt: boolean = true;
    }

export class VenueCatering {
    allowOther: boolean;
    canOffer: boolean;
}

export class Location {
    address: string;
    city: string;
    latitude: string;
    longitude: string;
}

export class Price {
    amount: number;
    currency: string;
}
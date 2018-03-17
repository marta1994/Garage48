    export class SearchResponse {
        venues: Venue[];
    }
    
    export class Venue {
        amenities: string[];
        bookedDates: Date[];
        catering: Catering;
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
    }

    export class Catering {
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
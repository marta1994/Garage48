    export class SearchResponse {
        bundles: Bundle[];
    }

    export class Bundle {
        venue: Venue;
        catering: VenueCatering;
        price: number;
    }

    export class Catering {
        name: string;
        price: number;
        image: string;
        providedWifi: boolean;
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
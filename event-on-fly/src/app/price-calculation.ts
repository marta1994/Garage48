export class PriceResult {
    private prices: number[];

    constructor(servicePrices) {
      this.prices = servicePrices;
    }

    public Calculate() {
        var totalPrice = 0;
        for(let price of this.prices) {
             totalPrice += price;
        }

        return totalPrice;
    }
}
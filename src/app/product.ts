export class Product {

    id: string;
    name: string;
    barcode: string;
    quantity: number = 1;
    price: number = 1.00;
    createdTimestamp: string;
    detailsTimestamp: string;
    priceTimestamp: string;
    stockTimestamp: string;
    category: string;
    createdUserId: number;
    detailsUserId: number;
    priceUserId: number;
    stockUserId: number;
}

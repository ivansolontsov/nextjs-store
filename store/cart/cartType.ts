import { IProduct } from "../products/productTypes";

export interface ICart {
    product: IProduct,
    amount: number,
}

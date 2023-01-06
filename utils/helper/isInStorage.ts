import { ICart } from "../../store/cart/cartType"
import { IFavorites } from "../../store/favorites/favoritesTypes"
import { IProduct } from "../../store/products/productTypes"

export const isIn = (product: IProduct, store: any) => {
    return store.some((el: ICart | IFavorites) => el.product.id === product.id)
}
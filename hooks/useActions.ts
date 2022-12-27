import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { cartActions } from "../store/cart/cartSlice"
import { cartModalActions } from "../store/cart/cartModal"
import { favActions } from "../store/favorites/favoritesSlice"

const allActions = {
    ...cartActions,
    ...cartModalActions,
    ...favActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActions, dispatch)
}
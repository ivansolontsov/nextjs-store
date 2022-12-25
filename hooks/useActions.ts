import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { cartActions } from "../store/cart/cartSlice"
import { cartModal, cartModalActions } from "../store/cart/cartModal"

const allActions = {
    ...cartActions,
    ...cartModalActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActions, dispatch)
}
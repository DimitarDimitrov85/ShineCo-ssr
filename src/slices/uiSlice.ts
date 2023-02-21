import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cardInfo: {id: null, urlPath: ''},
    discountInfo: null,
    activePage: 0

}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setCardInfo: (state, action) => {
            state.cardInfo = action.payload

        },
        setDiscountInfo: (state, action) => {
            state.discountInfo = action.payload

        },
        setActivePage: (state, action) => {
            state.activePage = action.payload
        }
    }
})

export const { setCardInfo, setDiscountInfo, setActivePage } = uiSlice.actions

export default uiSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cardInfo: {id: null, urlPath: ''}
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setCardInfo: (state, action) => {
            // console.log(action.payload)
            state.cardInfo = action.payload

        }
    }
})

export const { setCardInfo } = cardSlice.actions

export default cardSlice.reducer
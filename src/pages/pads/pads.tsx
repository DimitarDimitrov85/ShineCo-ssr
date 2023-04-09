import React from 'react'
import { Cards } from '../../components'
import { data } from '../../data'

export const Pads = () => {
    return (
        <div>
            <h2 className='productTitle'>Подложки</h2>
            <Cards data={{info: data.pads, product: 'pads'}}/>
        </div>
    )
}

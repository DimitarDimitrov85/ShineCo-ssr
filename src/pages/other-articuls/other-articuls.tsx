import React from 'react'
import { Cards } from '../../components'
import { data } from '../../data'

export const OtherArticuls = () => {
    return (
        <div>
            <h2 className='productTitle'>Други продукти</h2>
            <Cards data={{info: data.others, product: 'others'}}/>
        </div>
    )
}
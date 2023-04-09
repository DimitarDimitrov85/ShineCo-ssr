import React from 'react'
import { Cards } from '../../components'
import { data } from '../../data'

export const Tables = () => {
    return (
        <div>
            <h2 className='productTitle'>Маси</h2>
            <Cards data={{info: data.tables, product: 'tables'}}/>
        </div>
    )
}

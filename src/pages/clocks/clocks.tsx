import React from 'react'
import { Cards } from '../../components'
import { data } from '../../data'

export const Clocks = () => {
    return (
        <div>
            <h2 className='productTitle'>Часовници</h2>
            <Cards data={{info: data.clocks, product: 'clocks'}}/>
        </div>
    )
}

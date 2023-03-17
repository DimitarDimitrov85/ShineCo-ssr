import React from 'react'
import { Cards } from '../../components'
import { data } from '../../data'

export const Pads = () => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Подложки</h2>
            <Cards data={data.pads}/>
        </div>
    )
}

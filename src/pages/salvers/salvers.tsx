import React from 'react'
import { Cards } from '../../components'
import { data } from '../../data'

export const Salvers = () => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Подноси</h2>
            <Cards data={data.salvers}/>
        </div>
    )
}

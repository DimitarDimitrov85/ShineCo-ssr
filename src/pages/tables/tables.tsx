import React from 'react'
import { Cards } from '../../components'
import { data } from '../../data'

export const Tables = () => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Маси</h2>
            <Cards data={data.tables}/>
        </div>
    )
}

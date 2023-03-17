import React from 'react'
import { Cards } from '../../components'
import { data } from '../../data'

export const Clocks = () => {
    return (
        <div>
            <h2  style={{textAlign: 'center'}}>Часовници</h2>
            <Cards data={data.clocks}/>
        </div>
    )
}

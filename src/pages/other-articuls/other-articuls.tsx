import React from 'react'
import { Cards } from '../../components'
import { data } from '../../data'

export const OtherArticuls = () => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Други продукти</h2>
            <Cards data={data.others}/>
        </div>
    )
}
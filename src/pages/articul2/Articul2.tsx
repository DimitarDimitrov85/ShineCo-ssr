import React, { useCallback, useEffect, useState } from 'react'
import { Cards } from '../../components'
import { data } from '../../data'

export const Articul2 = () => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Подноси</h2>
            <Cards data={data.salvers}/>
        </div>
        
    )
}
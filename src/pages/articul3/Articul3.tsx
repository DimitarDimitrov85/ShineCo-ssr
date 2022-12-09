import React, { useCallback, useEffect, useState } from 'react'
import { Cards } from '../../components'
import { data } from '../../data'

export const Articul3 = () => {
    return (
        <div>
            <h2  style={{textAlign: 'center'}}>Articul3</h2>
            <Cards data={data}/>
        </div>
    )
}
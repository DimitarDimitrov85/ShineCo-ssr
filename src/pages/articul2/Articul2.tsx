import React, { useCallback, useEffect, useState } from 'react'
import { Cards } from '../../components'
import { data } from '../../data'

export const Articul2 = () => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Articul2</h2>
            <Cards data={data}/>
        </div>
        
    )
}
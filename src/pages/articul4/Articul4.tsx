import React, { useCallback, useEffect, useState } from 'react'
import { Cards } from '../../components'
import { data } from '../../data'

export const Articul4 = () => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Articul4</h2>
            <Cards data={data.fruitBowls}/>
        </div>
    )
}
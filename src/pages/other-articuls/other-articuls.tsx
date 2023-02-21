import React, { useCallback, useEffect, useState } from 'react'
import { Cards } from '../../components'
import { data } from '../../data'

export const OtherArticuls = () => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>OtherArticuls</h2>
            <Cards data={data.others}/>
        </div>
    )
}
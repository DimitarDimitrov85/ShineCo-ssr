import React, { useCallback, useEffect, useState } from 'react'
import { Button, Col, Container , Row, Card } from 'react-bootstrap'
import { Cards } from '../../components'
import { data } from '../../data'

export const Articul1 = () => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Подложки</h2>
            <Cards data={data.pads}/>
        </div>
    )
}
import React from 'react'
import { Cards } from '../../components'
import { data } from '../../data'

export const FruitBowls = () => {
    return (
        <div>
            <h2 className='productTitle'>Фруктиери</h2>
            <Cards data={{info: data.fruitBowls, product: 'fruitBowls'}}/>
        </div>
    )
}
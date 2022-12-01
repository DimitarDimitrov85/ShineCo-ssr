import React, { useCallback, useEffect, useState } from 'react'
import { ListGroup, CloseButton, Image, Button } from 'react-bootstrap/'
import { useCart } from 'react-use-cart'

import './cart.scss'

export const Cart = () => {
    const { 
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart,
    } = useCart()



    return (
        <ListGroup style={{width: '50%', margin: 'auto'}}>
            {isEmpty ? <p>Empty Cart</p> :  items.map((product: any, index: any) => (
                <ListGroup.Item className='itemCart' key={index}>
                    <Image src={product.img} alt='pro' width='150px' height='150px'/>
                        <p>{product.title}</p>
                        <p>{product.price}лв</p>
                        <p>{product.quantity}</p>
                        <div style={{verticalAlign: 'middle'}}>
                            <Button className='btn-sm mx-1' variant="outline-dark" onClick={() => updateItemQuantity(product.id, product.quantity - 1)}>-</Button>
                            <Button className='btn-sm mx-1' variant="outline-dark" onClick={() => updateItemQuantity(product.id, product.quantity + 1)}>+</Button>
                            <Button className='btn-sm mx-1' variant="outline-danger" onClick={() => removeItem(product.id)}>Delete</Button>
                        </div>
                        
                </ListGroup.Item>
            ))}
            
        </ListGroup>
    )
}
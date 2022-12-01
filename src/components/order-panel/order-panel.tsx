import React, { useCallback, useEffect, useState } from 'react'
import { ListGroup, CloseButton, Image, Button } from 'react-bootstrap/'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'
    


import { Icon } from '../../components'

import './order-panel.scss'

export const OrderPanel = ({ hidePanel, position}: any) => {
    const [positionTop, setPositionTop] = useState(55)
    const [selectedProductIds, setSelectedProductIds] = useState<any>([])

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

    const handleScroll = useCallback(() => {
        setPositionTop(window.scrollY >= 55 ? 0: 55)
    },[])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    },[handleScroll])

    
    return (
        <ListGroup  className='panel' style={{right: `${position}px`, top: `${positionTop}px`}}>
            <ListGroup.Item className='item'>Current orders<CloseButton variant="white" onClick={hidePanel}/></ListGroup.Item>
            {isEmpty ? <p>Empty Cart</p> :  items.map((product: any, index: any) => (
                <ListGroup.Item className='item' key={index}>
                    <Image src={product.img} alt='pro' width='50px' height='50px'/>
                    <div>
                        <p>{product.title}</p>
                        <p>{product.quantity} x {product.price}лв</p>
                    </div>
                    
                    <Icon
                        iconName="Trash3"
                        color="rgb(175, 175, 175)"
                        size={15}
                        className=""
                        onClick={() => removeItem(product.id)}
                        id={product.id}
                    />
                </ListGroup.Item>
            ))}
            <ListGroup.Item className='item'>
                <Link to='/cart'><Button className='' variant="outline-success" >Checking Cart</Button></Link>
                <span>Total Price: {cartTotal}лв</span>
            </ListGroup.Item>
        </ListGroup>
    )


}
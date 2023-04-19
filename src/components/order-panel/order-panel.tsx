import React, { useCallback, useEffect, useState } from 'react'
import { ListGroup, Image, Button } from 'react-bootstrap'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'
import { Icon } from '../../components'
import CloseButton from 'react-bootstrap/CloseButton'


import './order-panel.scss'

export const OrderPanel = ({ hidePanel, position}: any) => {
    const [positionTop, setPositionTop] = useState(67)

    useEffect(() => {
        window.addEventListener('click', hidePanel)

        return () => {
            window.removeEventListener('click', hidePanel)
        }
    },[hidePanel])

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
        setPositionTop(window.scrollY >= 55 ? 0: 67)
    },[])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[handleScroll])

    
    return (
        <div className='div-panel' style={{top: `${positionTop}px`, right: `${position}px`}} onClick={e => e.stopPropagation()}>
            <CloseButton variant="white" className='close-btn' onClick={hidePanel} />
            <h4>Koшничка</h4>
            <ListGroup  className='panel'>
                {isEmpty ? <p style={{textAlign: 'center'}}>Кошничката е празна</p> :  items.map((product: any, index: any) => (
                    <ListGroup.Item className='item' key={index}>
                        <Image src={product.img} alt='' width='80px' height='65px'/>
                        <div style={{textAlign: 'center'}}>
                            <p className='title'>{product.title}</p>
                            <p>{product.quantity} x {product.price}лв</p>
                        </div>
                        
                        <Icon
                            iconName="Trash3"
                            color="rgb(175, 175, 175)"
                            size={15}
                            className="delete"
                            onClick={() => removeItem(product.id)}
                            id={product.id}
                            title='изтрий'
                        />
                    </ListGroup.Item>
                ))}
            </ListGroup>
            {
                !isEmpty && 
                    <div className='checking-cart'>
                        <h5>Общо: <span style={{}}>{cartTotal}лв</span></h5>
                        <Link reloadDocument to='/cart?activePage=null' id='hide' onClick={hidePanel}><Button className='checking-cart-btn' variant="outline-success">Преглед на кошничката</Button></Link>
                    </div>
            }
        </div>
    )
}
import React, { useCallback, useEffect, useState } from 'react'
import { ListGroup, CloseButton, Image, Button } from 'react-bootstrap/'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'
import { Icon } from '../../components'

import './order-panel.scss'

export const OrderPanel = ({ hidePanel, position}: any) => {
    const [positionTop, setPositionTop] = useState(55)
    const [selectedProductIds, setSelectedProductIds] = useState<any>([])

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
        setPositionTop(window.scrollY >= 55 ? 0: 55)
    },[])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    },[handleScroll])

    
    return (
        <div className='div-panel' style={{top: `${positionTop}px`, right: `${position}px`}} onClick={e => e.stopPropagation()}>
            <ListGroup  className='panel'>
                {/* <ListGroup.Item className='item'>Current orders<CloseButton variant="white" onClick={hidePanel}/></ListGroup.Item> */}
                {isEmpty ? <p>Empty Cart</p> :  items.map((product: any, index: any) => (
                    <ListGroup.Item className='item' key={index}>
                        <Image src={product.img} alt='pro' width='50px' height='50px'/>
                        <div style={{textAlign: 'center'}}>
                            <p className='title'>{product.title}</p>
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
                {/* <ListGroup.Item className='item'>
                    <Link to='/cart' onClick={hidePanel}><Button className='' variant="outline-success">Checking Cart</Button></Link>
                    <span>Total Price: {cartTotal}лв</span>
                </ListGroup.Item> */}
            </ListGroup>
            <div className='d-flex justify-content-between' style={{width: '90%', margin: 'auto', background: 'rgb(37, 37, 37)', color: 'white', paddingTop: '10px', paddingBottom: '10px'}}>
                <Link to='/cart' onClick={hidePanel}><Button className='' variant="outline-success">Checking Cart</Button></Link>
                <span>Total Price: {cartTotal}лв</span>
            </div>
        </div>


        // <ListGroup  className='panel' style={{right: `${position}px`, top: `${positionTop}px`}} onClick={e => e.stopPropagation()}>
        //     {/* <ListGroup.Item className='item'>Current orders<CloseButton variant="white" onClick={hidePanel}/></ListGroup.Item> */}
        //     {isEmpty ? <p>Empty Cart</p> :  items.map((product: any, index: any) => (
        //         <ListGroup.Item className='item' key={index}>
        //             <Image src={product.img} alt='pro' width='50px' height='50px'/>
        //             <div>
        //                 <p>{product.title}</p>
        //                 <p>{product.quantity} x {product.price}лв</p>
        //             </div>
                    
        //             <Icon
        //                 iconName="Trash3"
        //                 color="rgb(175, 175, 175)"
        //                 size={15}
        //                 className=""
        //                 onClick={() => removeItem(product.id)}
        //                 id={product.id}
        //             />
        //         </ListGroup.Item>
        //     ))}
        //     <ListGroup.Item className='item'>
        //         <Link to='/cart' onClick={hidePanel}><Button className='' variant="outline-success">Checking Cart</Button></Link>
        //         <span>Total Price: {cartTotal}лв</span>
        //     </ListGroup.Item>
        // </ListGroup>
        
    )


}
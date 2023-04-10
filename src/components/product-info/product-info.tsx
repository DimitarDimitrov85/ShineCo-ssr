import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import { useCart } from 'react-use-cart'
import { data } from '../../data'

import './product-info.scss'

export const ProductInfo = () => {
    const { cardInfo } = useSelector((state: any) => state.ui)
    const { 
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart,
        addItem
    } = useCart()

    const [backgroundPosition, setBackgroundPosition] = useState<any>('0% 0%')
    const [selectedPicture, setSelectrdPicture] = useState('')
    const [productData, setProductData] = useState<any>(null)

    useEffect(() => {
        cardInfo && setTimeout(() => {
            const finded: any = data[cardInfo?.product]?.find((card: any) => card.id === Number(cardInfo?.id))
            setProductData(finded)
        }, 10)
        
    },[cardInfo])
        
    const handleMouseMove = (e: any) => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        setBackgroundPosition(`${x}% ${y}%`)
    }

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])

    return (
        <div className='product-info'>
            <Row>
                <Col style={{marginRight: '20px'}}>
                    <figure onMouseMove={handleMouseMove} style={{backgroundImage: `url(${selectedPicture || productData?.img})`, backgroundPosition: backgroundPosition}}>
                        <img src={selectedPicture || productData?.img} alt="" />
                    </figure>
                    <div className='additional-pics-list'>
                        {
                            productData?.allPics?.map((pic: any, index: any) => (
                                <img src={pic} alt="" className='' onClick={() => {setSelectrdPicture(pic)}} key={index}/>
                            ))
                        }
                    </div>
                </Col>
                <Col className='product-description'>
                    <h3>{productData?.title}</h3>
                    <hr/>
                    <p>{productData?.info}</p>
                    <h4>{productData?.price}лв</h4>
                    <hr/>
                    <Button className='btn-lg add-to-cart-btn' variant="outline-primary" onClick={() => addItem(productData)} >Добави в кошничката</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                {
                    productData?.allPics?.map((pic: any, index: any) => (
                        <img src={pic} alt="" className='additional-pic' onClick={() => {setSelectrdPicture(pic)}} key={index}/>
                    ))
                }
                </Col>
            </Row>
        </div>
    )
}
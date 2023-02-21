import React, { useCallback, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useCart } from 'react-use-cart'
import { data } from '../../data'

import './product-info.scss'

export const ProductInfo = () => {
    // const [selectedCard, setSelectedCard] = useState<any>({})
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
        
    const handleMouseMove = (e: any) => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        setBackgroundPosition(`${x}% ${y}%`)
    }

    // useEffect(() => {
        // const finded: any = data.find((card) => card.id === cardInfo.id)
        // setSelectedCard(cardInfo)
    // },[cardInfo])


    return (
        <div style={{margin: 'auto', marginTop: '50px', marginBottom: '50px', width: '70%'}}>
            <Row>
                <Col style={{marginRight: '20px'}}>
                    <figure onMouseMove={handleMouseMove} style={{backgroundImage: `url(${selectedPicture || cardInfo.img})`, backgroundPosition: backgroundPosition}}>
                        {/* <img src={selectedCard.img} alt="" style={{width: '880px'}}/> */}
                        <img src={selectedPicture || cardInfo.img} alt="" />
                    </figure>
                </Col>
                {/* <Col xs={3} style={{background: 'blue'}}><h3>{selectedCard.title}</h3></Col> */}
                <Col >
                    <h3>{cardInfo.title}</h3>
                    <p>{cardInfo.info}</p>
                    <h4>{cardInfo.price}лв</h4>
                    <Button className='btn-lg add-to-cart' variant="outline-primary" onClick={() => addItem(cardInfo)} >Add to Cart</Button>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                {
                    cardInfo.allPics?.map((pic: any, index: any) => (
                        <img src={pic} alt="" className='small-pic' onClick={() => {setSelectrdPicture(pic)}} key={index}/>
                    ))
                }
                </Col>
            </Row>
        </div>




    )
}
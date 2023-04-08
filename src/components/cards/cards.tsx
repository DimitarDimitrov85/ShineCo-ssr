import React, { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import { useCart } from 'react-use-cart'
import { setCardInfo } from '../../slices/uiSlice'

import { useDispatch, useSelector } from 'react-redux'
import Aos from 'aos'

import './cards.scss'

export const Cards = ({ data }: any) => {
    const { addItem } = useCart()
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const { activePage } = useSelector((state: any) => state.ui)

    const addProduct = useCallback((pr: any, e: any) => {
        e.stopPropagation()
        addItem(pr)

    },[addItem])

    useEffect(() => {
        Aos.init({duration: 1000, once: true})
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])

    const showProductInfo = useCallback((e: any) => {
        const id: any = Number(e.currentTarget.id)
        const finded: any = data.find((card: any) => card.id === id)
        dispatch(setCardInfo(finded))
     
        navigate(`/product-info?${e.currentTarget.dataset.name}&activePage=${activePage}&cardInfo=${JSON.stringify(finded)}`)
        
    },[dispatch, navigate, data, activePage])

    return (
        <div className='cards-list'>
            { data.map((pr: any) => (
                <Card className='card' key={pr.id} data-aos='zoom-in'>
                    <Card.Img variant="top" src={pr.img} id={pr.id} data-name={pr.title} onClick={showProductInfo}></Card.Img>
                    <Card.Body>
                            <Card.Title className='title'>{pr.title}</Card.Title>
                        <Card.Text>
                        {/* {pr.text} */}
                        </Card.Text>
                        <div className='d-flex justify-content-between add-to-cart'>
                            <Button className='btn-sm add-to-cart-btn' variant="outline-primary" onClick={(e) => addProduct(pr, e)} id={pr.id}>Добави в кошничката</Button>
                            <span className='fw-bolder'>{pr.price}лв</span>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}
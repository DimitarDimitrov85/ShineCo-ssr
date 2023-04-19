import React, { useCallback, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap'
import { useCart } from 'react-use-cart'
import { setCardInfo } from '../../slices/uiSlice'

import { useDispatch, useSelector } from 'react-redux'
import Aos from 'aos'

import './cards.scss'

export const Cards = ({ data }: any) => {
    const { addItem } = useCart()
    // const navigate = useNavigate();
    const dispatch = useDispatch()

    const { activePage } = useSelector((state: any) => state.ui)

    const addProduct = useCallback((pr: any, e: any) => {
        e.stopPropagation()
        addItem(pr)

    },[addItem])

    useEffect(() => {
        Aos.init({duration: 1000, once: true})
        window.scrollTo({ top: 0, behavior: 'smooth' });
        console.log(window.location.href)
    },[])

    const showProductInfo = useCallback((e: any) => {
        const id: any = Number(e.currentTarget.id)
        dispatch(setCardInfo({id: id, product: data.product}))
    },[dispatch, data])

    return (
        <div className='cards-list'>
            { data.info.map((pr: any) => (
                <Card className='card' key={pr.id} data-aos='zoom-in'>
                    <Link reloadDocument to={`/product-info?Product=${data.product}&activePage=${activePage}&cardId=${pr.id}`} onClick={showProductInfo}><Card.Img variant="top" src={pr.img}></Card.Img></Link>
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
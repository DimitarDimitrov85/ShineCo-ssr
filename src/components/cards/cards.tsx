import React, { useCallback, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Button, Col, Container , Row, Card } from 'react-bootstrap'
import { useCart } from 'react-use-cart'
import { setCardInfo } from '../../slices/uiSlice'

import { useDispatch } from 'react-redux'

import './cards.scss'


export const Cards = ({ data }: any) => {
    const { addItem } = useCart()
    const navigate = useNavigate();
    const location = useLocation()
    const dispatch = useDispatch()

    const addProduct = useCallback((pr: any, e: any) => {
        e.stopPropagation()
        addItem(pr)

    },[addItem])


    const showProductInfo = useCallback((e: any) => {
        // console.log('location.pathname', location.pathname)
        const id: any = Number(e.currentTarget.id)
        console.log(id)
        const finded: any = data.find((card: any) => card.id === id)
        const url: string = `${location.pathname}/${e.currentTarget.dataset.name}`
        dispatch(setCardInfo({...finded, urlPath: url}))
        localStorage.setItem('cardInfo', JSON.stringify({...finded, urlPath: url}))
        navigate(url)
        
    },[dispatch, navigate, location, data])

    return (
            // <div style={{width: '50%', border: 'solid 3px black', margin: 'auto'}}>
            <div style={{width: '50%', margin: 'auto'}}>
                { data.map((pr: any) => (
                    <Card className='card' key={pr.id}>
                    {/* <Card style={{ display: 'inline-block', marginRight: '10px', marginTop: '10px', boxShadow: '1px 1px 1px rgb(133, 133, 133)' }} key={pr.id}> */}
                        <Card.Img variant="top" src={pr.img} id={pr.id} data-name={pr.title} onClick={showProductInfo}/>
                        <Card.Body>
                                <Card.Title style={{textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}><p></p>{pr.title}</Card.Title>
                            <Card.Text>
                            {pr.text}
                            </Card.Text>
                            <div  className='d-flex justify-content-between'>
                                <Button className='btn-sm add-to-cart' variant="outline-primary" onClick={(e) => addProduct(pr, e)} id={pr.id}>Add to Cart</Button>
                                <span className='fw-bolder'>{pr.price}лв</span>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        
    
    )
}
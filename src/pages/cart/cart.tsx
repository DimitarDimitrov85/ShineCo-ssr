import React, { useCallback, useEffect, useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap/'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setDiscountInfo } from '../../slices/uiSlice'
import { data } from '../../data'
    
import './cart.scss'

export const Cart = () => {
    const [searchDiscountCode, setSearchDiscountCode] = useState<any>('')
    const dispatch = useDispatch()
    const { discountInfo } = useSelector((state: any) => state.ui)
    const [isExistCode, setIsExistCode] = useState<any>(null)

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

    const handleDiscountInfo = useCallback((info: any) => {
        
        setIsExistCode(info ? true : false)
        dispatch(setDiscountInfo(info))
        sessionStorage.setItem('discountInfo', JSON.stringify(info))
    },[dispatch])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])

    useEffect(() => {
        discountInfo && setIsExistCode(true)
    },[discountInfo])

    useEffect(() => {
        discountInfo && handleDiscountInfo({price: cartTotal - ((cartTotal * discountInfo.percent)/100), percent:  discountInfo.percent, discountCode: discountInfo.discountCode})
    },[cartTotal])

   
    const handleDiscount = useCallback((e: any) => {
        const exsistDiscount: any = data.dataDiscount.find((d: any) =>  d.code === searchDiscountCode)
        
        if ((e.code === 'Enter' || e.currentTarget.id === 'enter') && searchDiscountCode.length > 0) {
            const input: any = document.querySelector('.info-user-input')
            input.value = ''
            
            exsistDiscount
                ? handleDiscountInfo({price: cartTotal - ((cartTotal * exsistDiscount.percent)/100), percent: exsistDiscount.percent, discountCode: exsistDiscount.code})
                : handleDiscountInfo(null)
        }
        
    },[handleDiscountInfo, cartTotal, searchDiscountCode])


    const handleCorectCodeInfo = useCallback(() => {
            if (isExistCode === true) {
                return (
                    <div>
                        <p style={{color: 'green', position: 'relative'}}>{`Отстъпка с код ${discountInfo.discountCode}: -${discountInfo.percent}%`}</p>
                        <h4>Общо с отстъпката: {discountInfo.price}лв</h4>
                    </div>
                )
            }

            if (isExistCode === false) {
                return (
                    <div>
                        <p style={{color: 'red', position: 'relative'}}>Невалиден промо код!</p>
                    </div>
                )
            }

    },[isExistCode, discountInfo])

   
    return (
        <div className='ordersList'>
            {
                !isEmpty && 
                <Row className='header'>
                    <Col xs={3}></Col>
                    <Col xs={4}><p>Продукт</p></Col>
                    <Col ><p>Цена</p></Col>
                    <Col xs={2}><p>Брой</p></Col>
                    <Col><p>Общо</p></Col>
                    <Col></Col>
                </Row>
            }
                    
            {isEmpty ? <h4 className='empty-cart'>Кошничката е празна!</h4> : items.map((product: any, index: any) => (
                <Row className='cart-item' key={index}>
                    <div>
                        <button type="button" className="btn-close delete-for-fone" aria-label="Close" title='изтрий' onClick={() => removeItem(product.id)}></button>
                    </div>
                    <Col xs={3}>
                        <img src={product.img} alt='pro' className='product-img'/>
                    </Col>

                    <Col xs={4} className='my-auto'>
                        <p>{product.title}</p>
                    </Col>

                    <Col className='my-auto'>
                        <p className='for-phone'>Цена</p>
                        <p>{product.price}лв</p>
                    </Col>

                    <Col className='my-auto' xs={2}>
                        <p className='for-phone'>Брой</p>
                        <p>
                            <Button className='btn-sm mx-1 quantity-btn' variant="outline-dark" onClick={() => updateItemQuantity(product.id, product.quantity - 1)}>-</Button>
                            {product.quantity}
                            <Button className='btn-sm mx-1 quantity-btn' variant="outline-dark" onClick={() => updateItemQuantity(product.id, product.quantity + 1)}>+</Button>
                        </p>
                    </Col>

                    <Col className='my-auto'>
                        <p className='for-phone'>Общо</p>
                        <p>{product.itemTotal}лв</p>
                    </Col>

                    <Col className='delete'>
                        <button type="button" className="btn-close" aria-label="Close" title='изтрий' onClick={() => removeItem(product.id)}></button>
                    </Col>
                </Row>
            ))}
            {
                !isEmpty && 
                    <div>
                        <div className='d-flex justify-content-between py-3'>
                            <div className='total-price-for-phone'>
                                <h4>Общо: {cartTotal}лв</h4> 
                                {handleCorectCodeInfo()}
                            </div>
                                <Button className='btn-sm clear-all-btn' variant="outline-danger" onClick={() => emptyCart()} style={{height: '50px'}}>Изтрий всички</Button>
                            <div>
                                <div className="form-floating mb-3">
                                    <input autoComplete="off" type='text' className="form-control info-user-input" id="floatingInput" placeholder='promo code' onKeyUp={handleDiscount} onChange={(e: any) => { setSearchDiscountCode(e.currentTarget.value)}}/>
                                    <label htmlFor="floatingInput">Въведете промо код</label>
                                </div>
                                <Button className='btn-sm enter-btn' variant="outline-success" onClick={handleDiscount} id='enter' style={{marginTop: '70px'}}>Въведи</Button>
                            </div>
                            <Button className='btn-sm clear-all-btn-for-phone' variant="outline-danger" onClick={() => emptyCart()} style={{height: '50px'}}>Изтрий всички</Button>
                            <div className='total-Price'>
                                <h4>Общо: {cartTotal}лв</h4> 
                                {handleCorectCodeInfo()}
                                <div className='d-fex justify-content-end py-3'>
                                    <Link to='/complete-order?activePage=null'><Button className='btn mx-1 complete-order-btn' variant="outline-success" >Завършете поръчката</Button></Link>
                                </div>
                            </div>
                    
                        </div>
                    </div>
            }
        </div>
    )
}

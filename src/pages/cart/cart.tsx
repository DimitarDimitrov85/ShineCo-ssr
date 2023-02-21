import React, { useCallback, useEffect, useState } from 'react'
import { ListGroup, CloseButton, Image, Button, Row, Col } from 'react-bootstrap/'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setDiscountInfo } from '../../slices/uiSlice'

    
import './cart.scss'

const dataDiscount = [
    {code: '123456', percent: 10},
    {code: '654321', percent: 15}
]

export const Cart = () => {
    const [searchDiscountCode, setSearchDiscountCode] = useState<any>('')
    const dispatch = useDispatch()
    const { discountInfo } = useSelector((state: any) => state.ui)
    const [isExistCode, setIsExistCode] = useState<any>(null)
    const [corectCodeInfo, setCorectCodeInfo] = useState<any>(null)

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
        discountInfo && setIsExistCode(true)
    },[discountInfo])

    useEffect(() => {
        // setIsIntroduced(true)
        discountInfo && handleDiscountInfo({price: cartTotal - ((cartTotal * discountInfo.percent)/100), percent:  discountInfo.percent, discountCode: discountInfo.discountCode})
    },[cartTotal])

   
    const handleDiscount = useCallback((e: any) => {
        const exsistDiscount: any = dataDiscount.find((d: any) =>  d.code === searchDiscountCode)
        
        if ((e.code === 'Enter' || e.currentTarget.id === 'enter') && searchDiscountCode.length > 0) {
            e.currentTarget.value = null // clear the input about the promo code
            
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
                        <h4>Total Price: {discountInfo.price}лв</h4>
                    </div>
                )
            }

            if (isExistCode === false) {
                return (
                    <div>
                        <p style={{color: 'red', position: 'relative'}}>гршен код</p>
                    </div>
                )
            }

    },[isExistCode, discountInfo])

   
    return (
        // <ListGroup style={{width: '50%', margin: 'auto', marginTop: '50px', marginBottom: '30px'}}>
        //     {isEmpty ? <p style={{margin: 'auto'}}>Empty Cart</p> :  items.map((product: any, index: any) => (
        //         <ListGroup.Item className='cart-item' key={index}>
        //             <Image src={product.img} alt='pro' width='150px' height='150px'/>
        //                 <p>{product.title}</p>
        //                 <p>{product.price}лв</p>
        //                 <p>
        //                     <Button className='btn-sm mx-1' variant="outline-dark" onClick={() => updateItemQuantity(product.id, product.quantity - 1)}>-</Button>
        //                     {product.quantity}
        //                     <Button className='btn-sm mx-1' variant="outline-dark" onClick={() => updateItemQuantity(product.id, product.quantity + 1)}>+</Button>
        //                 </p>
        //                 <p>{product.itemTotal}лв</p>
        //                 {/* <div> */}
        //                     {/* <Button className='btn-sm mx-1' variant="outline-dark" onClick={() => updateItemQuantity(product.id, product.quantity - 1)}>-</Button>
        //                     <Button className='btn-sm mx-1' variant="outline-dark" onClick={() => updateItemQuantity(product.id, product.quantity + 1)}>+</Button> */}
        //                 {/* <Icon iconName="X" color="rgb(175, 175, 175)" size={15} onClick={() => removeItem(product.id)}/> */}
        //                 <button type="button" className="btn-close btn-close-red" aria-label="Close" onClick={() => removeItem(product.id)}></button>
                            
        //                     {/* <Button className='btn-sm mx-1' variant="outline-danger" onClick={() => removeItem(product.id)}>Remove Item</Button> */}
        //                 {/* </div> */}
        //         </ListGroup.Item>
        //     ))}
        //     {
        //         !isEmpty && 
        //             <div>
        //                 <div className='d-flex justify-content-between py-3'>
        //                     <Button className='btn-sm mx-1' variant="outline-danger" onClick={() => emptyCart()}>Clear All</Button>
        //                     <h4>Total Price: {cartTotal}лв</h4>
        //                 </div>
        //                 <div className='d-flex justify-content-center py-3'>
        //                     <Link to='/complete-order'><Button className='btn mx-1' variant="outline-success" >Complete the order</Button></Link>
        //                 </div>
        //             </div>
        //         }
        // </ListGroup>
        <div style={{width: '50%', margin: 'auto', marginTop: '50px', marginBottom: '30px'}}>
            {
                !isEmpty && 
                <Row style={{borderBottom: '2px solid black'}}>
                    <Col xs={3}></Col>
                    <Col xs={4}><p>Продукт</p></Col>
                    <Col ><p>Цена</p></Col>
                    <Col xs={2}><p>Брой</p></Col>
                    <Col><p>Общо</p></Col>
                    <Col></Col>
                </Row>
            }
                    
            {isEmpty ? <p style={{margin: 'auto'}} className="align-middle">Empty Cart</p> :  items.map((product: any, index: any) => (
                <Row className='cart-item' key={index}>
                    <Col xs={3}>
                    <img src={product.img} alt='pro' width='190px' height='150px' style={{marginLeft: '-5px'}}/>
                    
                    </Col>

                    <Col xs={4} className='my-auto'>
                    <p >{product.title}</p>
                    </Col>

                    <Col className='my-auto'>
                    <p>{product.price}лв</p>
                    </Col>

                    <Col className='my-auto' xs={2}>
                        <p>
                            <Button className='btn-sm mx-1' variant="outline-dark" onClick={() => updateItemQuantity(product.id, product.quantity - 1)}>-</Button>
                            {product.quantity}
                            <Button className='btn-sm mx-1' variant="outline-dark" onClick={() => updateItemQuantity(product.id, product.quantity + 1)}>+</Button>
                        </p>
                    </Col>

                    <Col className='my-auto'>
                        <p>{product.itemTotal}лв</p>
                    </Col>

                    <Col>
                        <button type="button" className="btn-close delete" aria-label="Close" onClick={() => removeItem(product.id)}></button>
                    </Col>
                </Row>
            ))}
            {
                !isEmpty && 
                    <div>
                        <div className='d-flex justify-content-between py-3'>
                            <Button className='btn-sm' variant="outline-danger" onClick={() => emptyCart()} style={{height: '50px'}}>Clear All</Button>
                            <div>
                                <div className="form-floating mb-3" style={{position: 'absolute'}}>
                                    <input autoComplete="off" type='text' className="form-control info-user-input" id="floatingInput" placeholder='promo code' onKeyUp={handleDiscount} onChange={(e: any) => { setSearchDiscountCode(e.currentTarget.value)}}/>
                                    <label htmlFor="floatingInput">Въведете промо код</label>
                                </div>
                                <Button className='btn-sm' variant="outline-success" onClick={handleDiscount} id='enter' style={{marginTop: '70px'}}>Въведи</Button>
                            </div>
                            <div>
                                <h4>Total Price: {cartTotal}лв</h4> 
                                {/* {
                                    discountInfo &&
                                    <div>
                                        <p style={{color: 'green', position: 'relative'}}>{`Отстъпка с код ${discountInfo.discountCode}: -${discountInfo.percent}%`}</p>
                                        <h4>Total Price: {discountInfo.price}лв</h4>
                                    </div>
                                } */}

                                {handleCorectCodeInfo()}

                                {/* {
                                    isIntroduced 
                                    ? <div>
                                        <p style={{color: 'green', position: 'relative'}}>{`Отстъпка с код ${discountInfo?.discountCode}: -${discountInfo?.percent}%`}</p>
                                        <h4>Total Price: {discountInfo?.price}лв</h4>
                                    </div>
                                    : 
                                        <div>
                                            <p style={{color: 'red', position: 'relative'}}>гршен код</p>
                                        </div>
                                } */}
                                <div className='d-fex justify-content-end py-3'>
                                    <Link to='/complete-order'><Button className='btn mx-1' variant="outline-success" >Завършете поръчката</Button></Link>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
            }
        </div>
    )
}
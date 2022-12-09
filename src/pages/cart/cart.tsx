import React, { useCallback, useEffect, useState } from 'react'
import { ListGroup, CloseButton, Image, Button, Row, Col } from 'react-bootstrap/'
import { useCart } from 'react-use-cart'
import { Link } from 'react-router-dom'
    
import './cart.scss'

export const Cart = () => {
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
                <Col><p>Цена</p></Col>
                <Col><p>Брой</p></Col>
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
                    <p  >{product.title}</p>
                    </Col>

                    <Col className='my-auto'>
                    <p>{product.price}лв</p>
                    </Col>

                    <Col className='my-auto'>
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
                // <ListGroup.Item className='cart-item' key={index}>
                //     <Image src={product.img} alt='pro' width='150px' height='150px'/>
                //         <p>{product.title}</p>
                //         <p>{product.price}лв</p>
                //         <p>
                //             <Button className='btn-sm mx-1' variant="outline-dark" onClick={() => updateItemQuantity(product.id, product.quantity - 1)}>-</Button>
                //             {product.quantity}
                //             <Button className='btn-sm mx-1' variant="outline-dark" onClick={() => updateItemQuantity(product.id, product.quantity + 1)}>+</Button>
                //         </p>
                //         <p>{product.itemTotal}лв</p>
                //         {/* <div> */}
                //             {/* <Button className='btn-sm mx-1' variant="outline-dark" onClick={() => updateItemQuantity(product.id, product.quantity - 1)}>-</Button>
                //             <Button className='btn-sm mx-1' variant="outline-dark" onClick={() => updateItemQuantity(product.id, product.quantity + 1)}>+</Button> */}
                //         {/* <Icon iconName="X" color="rgb(175, 175, 175)" size={15} onClick={() => removeItem(product.id)}/> */}
                //         <button type="button" className="btn-close btn-close-red" aria-label="Close" onClick={() => removeItem(product.id)}></button>
                            
                //             {/* <Button className='btn-sm mx-1' variant="outline-danger" onClick={() => removeItem(product.id)}>Remove Item</Button> */}
                //         {/* </div> */}
                // </ListGroup.Item>
            ))}
            {
                !isEmpty && 
                    <div>
                        <div className='d-flex justify-content-between py-3'>
                            <Button className='btn-sm mx-1' variant="outline-danger" onClick={() => emptyCart()}>Clear All</Button>
                            <h4>Total Price: {cartTotal}лв</h4>
                        </div>
                        <div className='d-flex justify-content-center py-3'>
                            <Link to='/complete-order'><Button className='btn mx-1' variant="outline-success" >Complete the order</Button></Link>
                        </div>
                    </div>
                }
        </div>
    )
}
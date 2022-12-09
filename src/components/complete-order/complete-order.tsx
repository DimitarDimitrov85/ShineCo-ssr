import React, { useCallback, useState, useEffect, useRef  } from 'react'
import { Spinner } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import { useCart } from 'react-use-cart'
import { Icon } from '../../components'
import { Row, Col } from 'react-bootstrap'

import './complete-order.scss'


// Да има ли или да няма цена понеже може да се промени ??????????????

const _deliveryPrice = {
    Econt: 6,
    Speedy: 7
} as any

const Input = ({type, placeholder, name, title}: any) => {
    return (
        <div className="form-floating mb-3">
            <input type={type} className="form-control info-user-input" id="floatingInput" placeholder={placeholder} name={name} required/>
            <label htmlFor="floatingInput">{title}</label>
        </div>
    )
    
}

export const CompleteOrder = () => {
    const form = useRef<any>()
    const [message, setMessage] = useState('')
    const [isSending, steIsSending] = useState(false)
    const [deliveryCompany, setDeliveryCompany] = useState('')
    const [sendResult, setSendResult] =useState('')
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

    const [totalPrice, setTotalPrice] = useState(cartTotal)

    useEffect(() => {
        console.log(items)
        let text: any = ''
        items.forEach((item) => {
            text += `${item.title}: ${item.quantity}pieces,\n`
            
        })
        setMessage(`Order:\n ${text}\n Total price: ${totalPrice}лв., \n Delivery company: ${deliveryCompany}`)
    },[deliveryCompany])

    const sendEmail = useCallback((e: any) => {

        e.preventDefault()
        setSendResult('')
        console.log(message)
        
        steIsSending(true)
        setTimeout(() => {
            steIsSending(false)
            setSendResult('OK')
        },5000)
        // emailjs.sendForm('service_j8i0v1r', 'template_akclrt9', form.current, 'pNH4kjrJTk9gWXOKw')
        //     .then((result) => {
        //         steIsSending(false)
        //         setSendResult(result.text)
        //         console.log(result.text);
        //     }, (error) => {
        //         setSendResult(error.text)
        //         console.log(error.text);
        //     })

    },[message])

    const onDeliveryChange = useCallback((e: any) => {
        setDeliveryCompany(e.currentTarget.id)
        console.log(cartTotal + _deliveryPrice[e.currentTarget.id])
        setTotalPrice(cartTotal + _deliveryPrice[e.currentTarget.id])
        console.log(e.currentTarget.id)
    },[cartTotal])

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <Row>
                    <Col>
                        <Input type="text" placeholder='First Name' title='First Name' name='first_name'/>
                    </Col>

                    <Col>
                        <Input type="text" placeholder='Last Name' title='Last Name' name='last_name'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input type="text" placeholder='Phone' title='Phone' name='phone'/>
                    </Col>

                    <Col>
                        <Input type="email" placeholder='Email address' title='Email address' name='user_email'/>
                    </Col>
                </Row>
                
                <h4>Delivery address</h4>
                <Row>
                    <Col>
                        <Input type="text" placeholder='City' title='City' name='city'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input type="text" placeholder='Region' title='Region' name='region'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Input type="text" placeholder='Street or neighborhood' title='Street or neighborhood' name='street'/>
                    </Col>
                </Row>
                
                <div className='delivery'>
                    <h5>Total Price: {totalPrice}лв</h5>
                    <div>
                        <p>Choose delivery company</p>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="Econt" onChange={onDeliveryChange}/>
                            <label className="form-check-label" htmlFor="Econt">
                                Econt
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="Speedy"  onChange={onDeliveryChange}/>
                            <label className="form-check-label" htmlFor="Speedy">
                                Speedy
                            </label>
                        </div>
                    </div>
                </div>
                <textarea defaultValue={message} name='message'></textarea>
                <input type="submit" value='Send'/>
            </form>

            <div className='send-result'>
                {
                    isSending
                    && <Spinner animation="border" className='spinner' variant="secondary"/>

                }
                {
                    sendResult === 'OK' 
                    && <div>
                        <h5 className='successful' style={{color: 'green'}}>Поръчката е направена успешно</h5>
                        <Icon
                            iconName="CheckLg"
                            color="green"
                            size={100}
                    />
                    </div>
                }
                {
                    (sendResult !== 'OK' && sendResult !== '') && 
                    <div>
                        <h5 className='error' style={{color: 'red'}}>Поръчката не беше изпратена</h5>
                        <Icon
                            iconName="XCircle"
                            color="red"
                            size={80}
                        />
                    </div>
                }
            </div>
        </div>
    )
}
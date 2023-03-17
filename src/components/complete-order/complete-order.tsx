import React, { useCallback, useState, useEffect, useRef  } from 'react'
import { Spinner } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import { useCart } from 'react-use-cart'
import { Icon } from '../../components'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import axios from 'axios'

import './complete-order.scss'

import { data } from '../../data'  

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
    const [deliveryAddress, setDeliveryAddress] = useState('')
    const [sendResult, setSendResult] =useState('')
    const [selectedOfficeAdress, setSelectedOfficeAdress] = useState('')
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

    const  { discountInfo } = useSelector((state: any) => state.ui)
    const [totalPrice, setTotalPrice] = useState<any>(null)
    const [officeAdress, setOfficeAdress] = useState<any>({ekont: [], speedy: []  })
        

    useEffect(() => {
        axios.get('http://ee.econt.com/services/Nomenclatures/NomenclaturesService.getOffices.json').then((e: any) => {
            setOfficeAdress(
                {...officeAdress, 
                    ekont: e.data.offices.filter((adress: any) => adress.currency === 'BGN'), 
                    speedy: data.speedyOffices.map((office: any) => (
                        {address: {fullAddress: office.address.fullAddressString.slice(4)}, id: office.id})).sort((a, b) => a.address.fullAddress > b.address.fullAddress ? 1 : -1)}
                        )
        }) 

    },[])

    useEffect(() => {
        sendResult === 'OK' && emptyCart()
    },[sendResult])

    useEffect(() => {
        setTotalPrice(discountInfo?.price || cartTotal)
    },[discountInfo, cartTotal])

    useEffect(() => {
        deliveryAddress === 'До адрес' && setSelectedOfficeAdress('')
        let text: any = ''
        items.forEach((item) => {
            text += `${item.title}: ${item.quantity}pieces,\n`
            
        })
        setMessage(`Поръчка:\n ${text}\n Общо: ${totalPrice}лв,
        ${discountInfo ? `
        \n Намаление с код: ${discountInfo.discountCode}, -${discountInfo.percent}%` : ''}
        \n Фирма доставчик: ${deliveryCompany}
        \n ${deliveryAddress}
        \n ${deliveryAddress === 'До офис на куриер' ? `${selectedOfficeAdress}` : ''}`)


    },[deliveryCompany, deliveryAddress, selectedOfficeAdress])

    const sendEmail = useCallback((e: any) => {

        e.preventDefault()
        setSendResult('')
        
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
        //         steIsSending(false)
        //         setSendResult(error.text)
        //         console.log(error.text);
        //     })

    },[message])

    const onDeliveryChange = useCallback((e: any) => {
        setDeliveryCompany(e.currentTarget.id)
    },[])

    const onAddressChange = useCallback((e: any) => {
        setDeliveryAddress(e.currentTarget.id)
    },[])

 
    const onValueChange = useCallback((e: any) => {
        setSelectedOfficeAdress(e.target.value)
    }, [])

    return (
        
        <div>
            {
                sendResult === 'OK' 
                ? <div className='send-result'>
                    <h5 className='successful' style={{color: 'green'}}>Поръчката е направена успешно</h5>
                    <Icon
                        iconName="CheckLg"
                        color="green"
                        size={100}
                />
                </div>
                : !isEmpty ? 
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <Row>
                            <Col>
                                <Input type="text" placeholder='First Name' title='Име' name='first_name'/>
                            </Col>

                            <Col>
                                <Input type="text" placeholder='Last Name' title='Фамилия' name='last_name'/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input type="text" placeholder='Phone' title='Телефон' name='phone'/>
                            </Col>

                            <Col>
                                <Input type="email" placeholder='Email address' title='Имейл' name='user_email'/>
                            </Col>
                        </Row>
                        
                        <h4>Адрес за доставка</h4>
                        <Row>
                            <Col>
                                <Input type="text" placeholder='City' title='Град' name='city'/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input type="text" placeholder='Region' title='Облас' name='region'/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Input type="text" placeholder='Street or neighborhood' title='Улица/Квартал' name='street'/>
                            </Col>
                        </Row>
                
                        <div className='delivery'>
                            <h5>Общо: {totalPrice}лв</h5>
                            <div style={{width: '300px'}}>
                                <p>Изберете начин за доставка</p>
                                <div className='d-flex justify-content-between contact'>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='radio' name='flexRadioDefault' id='ekont' onChange={onDeliveryChange}/>
                                        <label className='form-check-label' htmlFor='ekont'>
                                            Econt
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='radio' name='flexRadioDefault' id='speedy'  onChange={onDeliveryChange}/>
                                        <label className="form-check-label" htmlFor="speedy">
                                            Speedy
                                        </label>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between contact'>
                                    <div className='form-check'>
                                        <input className='form-check-input' type='radio' name='address' id='До адрес' onChange={onAddressChange}/>
                                        <label className='form-check-label' htmlFor='До адрес'>
                                            До адрес
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className='form-check-input' type='radio' name='address' id='До офис на куриер' onChange={onAddressChange}/>
                                        <label className='form-check-label' htmlFor='До офис на куриер'>
                                            До офис на куриер
                                        </label>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <select className="form-select" id="inputGroupSelect" onChange={onValueChange}>
                                        <option value=''>Choose...</option>
                                        { deliveryAddress === 'До офис на куриер' && 
                                            officeAdress[deliveryCompany]?.map((a: any) => (
                                                <option key={a.id} value={a.address.fullAddress}>{a.address.fullAddress}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <textarea defaultValue={message} name='message'></textarea>
                        <input className='send-btn' type="submit" value='Поръчай'/>
                    </form>

                    <div className='send-result'>
                        {
                            isSending
                            && <Spinner animation="border" className='spinner' variant="secondary"/>
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
                : <div style={{textAlign: 'center', padding: '30px 0 30px 0'}}>
                    <h4>
                    Кошничката е празна!
                    </h4>
                </div>
            }
        </div>
    )
}
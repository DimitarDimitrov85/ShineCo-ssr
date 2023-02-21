import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Carousel } from 'react-bootstrap'
import { data } from '../../data'
import { useSelector, useDispatch } from 'react-redux'
import { setActivePage } from '../../slices/uiSlice'
import Aos from 'aos'
import 'aos/dist/aos.css'

import axios from 'axios'

import first from './1.jpg'
import second from './images/2.jpg'
import third from './images/3.jpg'

import './home.scss'

const Img = ({ src }: any) => {
    return (
        <img src={`/images/${src}`} alt="" width={'80%'}/>
    )
}

const SectionPictures = ( { imgData, urlPath, align, title, showing, id }: any) => {

    const dispatch = useDispatch()

    // useEffect(() => {
    //     // axios.get('http://ee.econt.com/services/Nomenclatures/NomenclaturesService.getOffices.json').then((e: any) => console.log(e)) // ekont api
    //     axios.get('https://api.speedy.bg/v1/location/office/').then((e: any) => console.log(e)) // speedy api
    // },[])

    const onActive = useCallback((e: any) => {
        sessionStorage.setItem('activePage', e.currentTarget.id)
        dispatch(setActivePage(Number(e.currentTarget.id)))
    },[dispatch])
    
    return (
        <div className='section-pics' style={{[align]: '0px'}}  data-aos={showing}>
            <h3 style={{marginLeft: `${title.position}%`}}>{title.value}</h3>
            <Link to={`/${urlPath}`} onClick={onActive} id={id}>
            {/* {
                imgData.map((src: any) => (
                    <Img src={src} key={src}/>
                ))
            } */}
            <Img src={imgData} key={imgData}/>
            </Link>
            
        </div>
    )
}

export const Home = () => {

    useEffect(() => {
        Aos.init({duration: 1000, once: true})
    },[])

    return (
        <div>
            <Carousel fade pause={false} controls={false} indicators={false} >
                {/* <Carousel.Item style={{backgroundImage: 'url(/images/3_n.jpg)', backgroundPosition: 'center', background: 'red'}}> */}
                <Carousel.Item>
                    <div
                    className='corosel-item'
                    style={{backgroundImage: 'url(/images/A7200156-2webcover.jpg)'}}
                    // src="/logo192.png"
                    // src="/images/3_n.jpg"
                    // alt="First slide"
                    // height={'700px'}
                    // width={"100%"}
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        className='corosel-item'
                        style={{backgroundImage: 'url(/images/A7201368webcover.jpg)'}}
                    />
                    {/* <img
                    className="d-block w-100"
                    src="/images/7_n.jpg"
                    alt="Second slide"
                    height={'700px'}
                    /> */}

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div 
                        className='corosel-item'
                        style={{backgroundImage: 'url(/images/26_n.png)'}}
                    />
                    {/* <img
                    className="d-block w-100"
                    src="/images/25_n.jpg"
                    alt="Third slide"
                    height={'700px'}
                    /> */}
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div
                        className='corosel-item'
                        // className="d-block w-100"
                        style={{backgroundImage: 'url(/images/A7205349coverweb.jpg)'}}
                        // src="/logo192.png"
                        // src="/images/3_n.jpg"
                        // alt="First slide"
                        // height={'700px'}
                        // width={"100%"}
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div 
                        className='corosel-item'
                        style={{backgroundImage: 'url(/images/A7205437cover1.jpg)'}}
                    />
                    {/* <img
                    className="d-block w-100"
                    src="/images/7_n.jpg"
                    alt="Second slide"
                    height={'700px'}
                    /> */}

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div 
                        className='corosel-item'
                        style={{backgroundImage: 'url(/images/A7209396cover9a.jpg)'}}
                    />
                    {/* <img
                    className="d-block w-100"
                    src="/images/25_n.jpg"
                    alt="Third slide"
                    height={'700px'}
                    /> */}
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* <div style={{border: '3px solid red', width: '50%', margin: 'auto', textAlign: 'center'}}> */}
            <div className='info'>
                <h3>Безплатна доставка за поръчки над 200лв.</h3>
                    <p> 
                        Добре дошли в света на елегаността,стила и качеството в ShineCo.
                        ShineCo. е онлайн магазин за артикули с епоксидна смола. 
                        Ръчно изработени с артистичност във всеки детайл.
                        Бранд Създаден през 2021г. в България Гр.Варна. 

                        При нас ще откриете множество модели,
                        които биха били не само отлично допълнение към Вашият дом или офис , 
                        но и прекрасен подарък, с който да зарадвате близките си и любими хора. 

                        !Тук ако може една до друга и под друга изредени снимки, на видовете артикули, които предлага shineCo.!

                        Ако вече сте се сдобили с някой до нашите артикули които предлагаме, 
                        и Ви допадат, ще се радваме да споделите своето мнение и да ни 
                        препоръчате на Вашите приятели.
                        Ако все още не сте, то с удоволствие, ще Ви помогнем при избора на Вашето ново "Бижу"!
                        Връзката с клиентите, е специална за нас

                        НАШАТА ЦЕЛ Е КЛИЕНТЪТ ДА ОСТАНЕ ДОВОЛЕН ОТ КАЧЕСТВОТО, ОТ ИЗБОРА, И ОТ ОБСЛУЖВАНЕТО.
                    </p>
                    <SectionPictures imgData={data.home.clocks} urlPath='product-clocks' align='marginRight' title={{value: 'Часовници', position: '-1'}} showing='zoom-in' id='3'/>
                    <SectionPictures imgData={data.home.pads} urlPath='product-pads' align='marginLeft' title={{value: 'Подложки', position: '87'}} showing='zoom-in-up' id='1'/>
                    <SectionPictures imgData={data.home.tables} urlPath='product-tables' align='marginRight' title={{value: 'Маси', position: '-1'}} showing='zoom-in-down' id='5'/>
                    <SectionPictures imgData={data.home.fruitBowls} urlPath='product-fruitBowls'align='marginLeft' title={{value: 'Фруктиери', position: '87'}} showing='zoom-in-left' id='4'/>
                    <SectionPictures imgData={data.home.salvers} urlPath='product-salver' align='marginRight' title={{value: 'Подноси', position: '-1'}} showing='zoom-in-right' id='2'/>
                    <SectionPictures imgData={data.home.others} urlPath='other-product' align='marginLeft' title={{value: 'Други', position: '87'}} showing='zoom-in-right' id='6'/>
            </div>
            

        </div>
        
    )
}
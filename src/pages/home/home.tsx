import React, { useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap'
import { data } from '../../data'
import { useDispatch } from 'react-redux'
import { setActivePage } from '../../slices/uiSlice'
import Aos from 'aos'
import 'aos/dist/aos.css'

import './home.scss'

const Img = ({ src }: any) => {
    return (
        <img src={`/images/${src}`} alt="" width={'80%'}/>
    )
}

const SectionPictures = ( { imgData, urlPath, align, title, showing, id }: any) => {
    const dispatch = useDispatch()

    const onActive = useCallback((e: any) => {
        dispatch(setActivePage(Number(e.currentTarget.id)))
    },[dispatch])
    
    return (
        <div className='section-pics' style={{[align]: '0px'}}  data-aos={showing}>
            <h3 style={{marginLeft: `${title.position}%`}}>{title.value}</h3>
            <Link to={`/${urlPath}`} onClick={onActive} id={id}>
                <Img src={imgData} key={imgData}/>
            </Link>
        </div>
    )
}

export const Home = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        Aos.init({duration: 1000, once: true})
    },[])

    return (
        <div>
            <Carousel fade pause={false} controls={false} indicators={false} >
                <Carousel.Item>
                    <div className='corosel-item' style={{backgroundImage: 'url(/images/A7200156-2webcover.jpg)'}} />
                </Carousel.Item>

                <Carousel.Item>
                    <div className='corosel-item' style={{backgroundImage: 'url(/images/A7201368webcover.jpg)'}} />
                </Carousel.Item>

                <Carousel.Item>
                    <div  className='corosel-item' style={{backgroundImage: 'url(/images/26_n.png)'}} />
                </Carousel.Item>

                <Carousel.Item>
                    <div className='corosel-item' style={{backgroundImage: 'url(/images/A7205349coverweb.jpg)'}} />
                </Carousel.Item>

                <Carousel.Item>
                    <div className='corosel-item' style={{backgroundImage: 'url(/images/A7205437cover1.jpg)'}} />
                </Carousel.Item>

                <Carousel.Item>
                    <div  className='corosel-item' style={{backgroundImage: 'url(/images/A7209396cover9a.jpg)'}} />
                </Carousel.Item>
            </Carousel>
            <div className='info' >
                <h3>Безплатна доставка за поръчки над 200лв.</h3>
                    <p> 
                        Добре дошли в света на елегантността, стила и качеството в ShineCo.
                        ShineCo. е онлайн магазин за артикули от епоксидна смола. 
                        Ръчно изработени с артистичност във всеки детайл.
                        Бранд Създаден през 2021г. в България гр.Варна. 

                        При нас ще откриете множество модели,
                        които биха били не само отлично допълнение към Вашият дом или офис , 
                        но и прекрасен подарък, с който да зарадвате близките си и любими хора! 

                        Ако вече сте се сдобили с някой от нашите артикули, които предлагаме
                        и Ви допадат, ще се радваме да споделите своето мнение и да ни 
                        препоръчате на Вашите приятели.
                        Ако все още не сте то с удоволствие ще Ви помогнем при избора на Вашето ново "Бижу"!
                        Връзката с клиентите е специална за нас!
                        Нaшата цел е клиентът да остане доволен от качеството, избора и обслужването.
                    </p>
                    <SectionPictures imgData={data.home.clocks} urlPath='product-clocks?activePage=3' align='marginRight' title={{value: 'Часовници', position: '-20'}} showing='zoom-in' id='3'/>
                    <SectionPictures imgData={data.home.pads} urlPath='product-pads?activePage=1' align='marginLeft' title={{value: 'Подложки', position: '97'}} showing='zoom-in-up' id='1'/>
                    <SectionPictures imgData={data.home.tables} urlPath='product-tables?activePage=5' align='marginRight' title={{value: 'Маси', position: '-8'}} showing='zoom-in-down' id='5'/>
                    <SectionPictures imgData={data.home.fruitBowls} urlPath='product-fruitBowls?activePage=4'align='marginLeft' title={{value: 'Фруктиери', position: '97'}} showing='zoom-in-left' id='4'/>
                    <SectionPictures imgData={data.home.salvers} urlPath='product-salver?activePage=2' align='marginRight' title={{value: 'Подноси', position: '-15'}} showing='zoom-in-right' id='2'/>
                    <SectionPictures imgData={data.home.others} urlPath='other-product?activePage=6' align='marginLeft' title={{value: 'Други', position: '97'}} showing='zoom-in-right' id='6'/>
                    <video src='/images/Coaster.mp4' width='90%' height='100%' controls poster='/images/_SDS5930.jpg'></video>
            </div>
        </div>
    )
}
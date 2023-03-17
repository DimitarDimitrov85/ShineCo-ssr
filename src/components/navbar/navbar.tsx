import React, { useCallback, useEffect, useState, } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { useSelector, useDispatch } from 'react-redux'
import { setActivePage } from '../../slices/uiSlice'

import './navbar.scss'
    
export const NavBar = ( { onOrderPanelPosition, orderPanelPosition }: any) => {
    const { activePage } = useSelector((state: any) => state.ui)
    const dispatch = useDispatch()
    const { totalItems } = useCart()
    const [isShownMenu, setIsShownMenu] = useState(false)

    const onShowMenu = useCallback((e: any) => {
        orderPanelPosition !== 0 && e.stopPropagation()
        setIsShownMenu(true)
    },[setIsShownMenu, orderPanelPosition])

    useEffect(() => {
        window.addEventListener('click', () => setIsShownMenu(false))
    },[])

    useEffect(() => {console.log(isShownMenu)},[isShownMenu])

    const pages = [
        {path: '/', title: 'Начало'},
        {path: '/product-pads', title: 'Подложки'},
        {path: '/product-salver', title: 'Подноси'},
        {path: '/product-clocks', title: 'Часовници'},
        {path: '/product-fruitBowls', title: 'Фруктиери'},
        {path: '/product-tables', title: 'Маси'},
        {path: '/other-product', title: 'Други'},
        {path: '/about-us', title: 'За нас'},
    ]

    const onActive = useCallback((e: any) => {
        sessionStorage.setItem('activePage', e.currentTarget.id)
        dispatch(setActivePage(Number(e.currentTarget.id)))
    },[dispatch])

    return (
        <Navbar className={`navbar ${activePage === 0 ? 'navbar-home' : ''}`}>
            <div className='burger-menu' onClick={onShowMenu}>
                <div />
                <div />
                <div />
            </div>
            <Link to={'/'} id='0' onClick={onActive} className='brand'><img src='/images/logo-gold.png' alt=""/></Link>
            <Container>
                <Nav className="me-auto" {...isShownMenu ? {style: {left: '0px'}} : {}}>
                    <div className='menu-title-for-phone' onClick={(e: any) => {e.stopPropagation()}}>
                        <h3>Меню</h3>
                        <button type="button" className='btn-close' aria-label='Close' title='изтрий' onClick={() => setIsShownMenu(false)}></button>
                    </div>
                    {
                        pages.map((page: any, index: any) => (
                            <Link className={`link ${activePage === index ? 'selected' : ''}`} key={index} to={page.path} id={index} onClick={onActive}>{page.title}</Link>
                        ))
                    }
                </Nav>
                <div className="bag">
                        <img 
                            src={`/images/shopping-bags-${ totalItems > 0 ? 'full' : 'empty'}.png`}
                            alt="" 
                            width={40} 
                            onClick={(e) => onOrderPanelPosition(e, isShownMenu)} id='show'/>
                        {
                        totalItems > 0 && 
                            <span>
                            {totalItems}
                            </span>
                        }
                    </div>
            </Container>
        </Navbar>
    )
} 
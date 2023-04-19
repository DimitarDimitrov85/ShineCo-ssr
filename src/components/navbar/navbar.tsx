import React, { useCallback, useEffect, useState, } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { useSelector } from 'react-redux'

import './navbar.scss'
    
export const NavBar = ( { onOrderPanelPosition, orderPanelPosition }: any) => {
    const { activePage } = useSelector((state: any) => state.ui)
    const { totalItems } = useCart()
    const [isShownMenu, setIsShownMenu] = useState(false)

    const onShowMenu = useCallback((e: any) => {
        orderPanelPosition !== 0 && e.stopPropagation()
        setIsShownMenu(true)
    },[setIsShownMenu, orderPanelPosition])

    useEffect(() => {
        window.addEventListener('click', () => setIsShownMenu(false))

        return () => {
            window.removeEventListener('click', () => {})
        }
    },[])

    const pages = [
        {path: '/?activePage=0', title: 'Начало'},
        {path: `/product-pads?activePage=1`, title: 'Подложки'},
        {path: '/product-salver?activePage=2', title: 'Подноси'},
        {path: '/product-clocks?activePage=3', title: 'Часовници'},
        {path: '/product-fruitBowls?activePage=4', title: 'Фруктиери'},
        {path: '/product-tables?activePage=5', title: 'Маси'},
        {path: '/other-product?activePage=6', title: 'Други'},
        {path: '/about-us?activePage=7', title: 'За нас'},
    ]

    return (
        <Navbar className={`navbar ${activePage === 0 ? 'navbar-home' : ''}`}>
            <div className='burger-menu' onClick={onShowMenu}>
                <div />
                <div />
                <div />
            </div>
            <Link reloadDocument to={'/?activePage=0'} id='0' className='brand'><img src='/images/ShineCO LOGO.png' alt=''/></Link>
            <Container>
                <Nav className="me-auto" {...isShownMenu ? {style: {left: '0px'}} : {}}>
                    <div className='menu-title-for-phone' onClick={(e: any) => {e.stopPropagation()}}>
                        <button type="button" className='btn-close' aria-label='Close' onClick={() => setIsShownMenu(false)}></button>
                    </div>
                    {
                        pages.map((page: any, index: any) => (
                            <Link reloadDocument className={`link ${activePage === index ? 'selected' : ''}`} key={index} to={page.path} id={index}>{page.title}</Link>
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
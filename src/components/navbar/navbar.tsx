import React, { useCallback, useState } from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Icon } from '../../components'
import { useCart } from 'react-use-cart'
import { useSelector, useDispatch } from 'react-redux'
import { setActivePage } from '../../slices/uiSlice'

import './navbar.scss'
    
export const NavBar = ( { orderPanelPosition }: any) => {
    const { activePage } = useSelector((state: any) => state.ui)
    const dispatch = useDispatch()
    const { totalItems } = useCart()
    // const [activePage, setActivePage] = useState<any>(null)
    const pages = [
        {path: '/', title: 'Home'},
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
        <Navbar className="navbar" {...activePage === 0 && {style: {position: 'absolute', width: '100%', zIndex: '2'}}}>
            <Link to={'/'} id='0' onClick={onActive}><img src='/images/logo-gold.png' alt="" width={130} style={{marginLeft: '100px'}} className=''/></Link>
            {/* <img src='/images/logo-gold.png' alt="" width={130} style={{marginLeft: '100px'}} className=''/> */}
            <Container>
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                <Nav className="me-auto">
                    {
                        pages.map((page: any, index: any) => (
                            <Link className={`link ${activePage === index ? 'selected' : ''}`} key={index} to={page.path} id={index} onClick={onActive}>{page.title}</Link>
                        ))
                    }
                    {/* <NavDropdown title="Dropdown" id="nav-dropdown-dark-example" menuVariant="dark" >
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link style={{position: 'absolute', marginLeft: '65%'}}>
                    {/* <Icon
                        iconName="Cart2"
                        color="green"
                        size={30}
                        className="align-top"
                        onClick={orderPanelPosition}
                        id='show'
                    /> */}
                    <img src={`/images/shopping-bags-${ totalItems > 0 ? 'full' : 'empty'}.png`} alt="" width={40}  onClick={orderPanelPosition} id='show'/>
                    {
                    totalItems > 0 && 
                        <span style={{color: 'white', background: 'red', position: 'absolute', top: '0px', width: 'auto', height: '15px', borderRadius: '20px', paddingLeft: '3px', paddingRight: '3px', fontSize: '0.8em', display: 'inline-flex', alignItems: 'center'}}>
                        {/* // <span className='counter'> */}
                        {totalItems}
                        </span>
                    }
                    
                    </Nav.Link>
                    
                </Nav>
                {/* </Navbar.Collapse> */}
            </Container>
        </Navbar>
    )
} 
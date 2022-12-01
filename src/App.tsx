import React, { useCallback, useEffect, useState } from 'react'
import { CartProvider } from 'react-use-cart'
// import { Home } from './pages'
import { Page, Cart, Home } from './pages'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    // useHistory
} from 'react-router-dom'
import { useCart } from 'react-use-cart'

import { Button, Carousel, Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { Icon } from './components'
import { OrderPanel } from './components'
import { data } from './data'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.scss'

const App = () => {
    const [position, setPosition] = useState(-500)
    const { totalItems } = useCart()
    
    const orderPanelPosition = useCallback((e: any) => {
        setPosition(e.currentTarget.id === 'show' ? 0 : -500)
    },[])
    
    return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Navbar bg="dark" variant="dark" style={{flex: '1'}}>
                    <Container>
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/testPage'>Page</Link></Nav.Link>
                            <NavDropdown title="Dropdown" id="nav-dropdown-dark-example" menuVariant="dark">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link style={{position: 'absolute', marginLeft: '65%'}}>
                            <Icon
                                iconName="Cart2"
                                color="green"
                                size={30}
                                className="align-top"
                                onClick={orderPanelPosition}
                                id='show'
                            />
                            {
                            totalItems > 0 && 
                                <span style={{color: 'white', background: 'red', position: 'absolute', top: '0px', width: 'auto', height: '15px', borderRadius: '20px', paddingLeft: '3px', paddingRight: '3px', fontSize: '0.8em', display: 'inline-flex', alignItems: 'center'}}>
                                {/* // <span className='counter'> */}
                                {totalItems}
                                </span>
                            }
                            
                            </Nav.Link>
                            
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <OrderPanel hidePanel={orderPanelPosition} position={position}/>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/testPage' element={<Page/>}/>
                    <Route path='/cart' element={<Cart />}/>
                </Routes>

                {/* <footer className='py-5 my-5 bg-dark'> */}
                <footer style={{background: 'black', height: '200px'}}>
                    <p className='text-center text-white'>
                        Copyright &copy; Your Website 2022
                    </p>
                </footer>
            </div>
    )
}

export default App;

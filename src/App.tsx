import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCardInfo, setDiscountInfo, setActivePage } from './slices/uiSlice'
import { Pads, Salvers, Clocks, FruitBowls, Tables, OtherArticuls, Cart, Home, AboutUs } from './pages'
import { Routes, Route } from 'react-router-dom'
import { ProductInfo, OrderPanel, CompleteOrder, Footer, NavBar } from './components'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

const App = () => {
    const [position, setPosition] = useState(-520)
    const { cardInfo } = useSelector((state: any) => state.ui)
    const dispatch = useDispatch()

    const onOrderPanelPosition = useCallback((e: any, isShownMenu: any) => {
        !isShownMenu && e.stopPropagation()
        if(e.currentTarget.id === 'hide') {
            dispatch(setActivePage(null))
            sessionStorage.setItem('activePage', 'null')
        }
        setPosition(e.currentTarget.id === 'show' ? 0 : -520)
    },[dispatch])

    useEffect(() => {
        const currentCard: any = localStorage.getItem('cardInfo')
        const discountInfo: any = sessionStorage.getItem('discountInfo')
        dispatch(setCardInfo(JSON.parse(currentCard)))
        dispatch(setActivePage(Number(sessionStorage.getItem('activePage'))))
        dispatch(setDiscountInfo(JSON.parse(discountInfo)))
    },[dispatch])

    const handleLocation = useCallback(() => {
        const locationUrl = {
            '/': 0,
            '/product-pads': 1,
            '/product-salver': 2,
            '/product-clocks': 3,
            '/product-fruitBowls': 4,
            '/product-tables': 5,
            '/other-product': 6,
            '/about-us': 7,
        } as any
        sessionStorage.setItem('activePage', locationUrl[window.location.pathname])
        dispatch(setActivePage(locationUrl[window.location.pathname]))
    },[dispatch])

    useEffect(() => {
        window.addEventListener('popstate', handleLocation)
    },[handleLocation])

    return (
            <div>
                <NavBar orderPanelPosition={position} onOrderPanelPosition={onOrderPanelPosition}/>
                
                <OrderPanel hidePanel={onOrderPanelPosition} position={position}/>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/product-pads' element={<Pads />}/>
                    <Route path='/product-salver' element={<Salvers />}/>
                    <Route path='/product-clocks' element={<Clocks />}/>
                    <Route path='/product-fruitBowls' element={<FruitBowls />}/>
                    <Route path='/product-tables' element={<Tables />}/>
                    <Route path='/other-product' element={<OtherArticuls />}/>
                    <Route path='/about-us' element={<AboutUs />}/>
                    <Route path='/complete-order' element={<CompleteOrder />}/>
                    <Route path='/cart' element={<Cart />}/>
                    <Route path={cardInfo?.urlPath || '/'} element={<ProductInfo />}/>
                </Routes>

                <Footer />
            </div>
    )
}

export default App;

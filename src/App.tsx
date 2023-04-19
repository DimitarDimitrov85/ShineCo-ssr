import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCardInfo, setDiscountInfo, setActivePage } from './slices/uiSlice'
import { Pads, Salvers, Clocks, FruitBowls, Tables, OtherArticuls, Cart, Home, AboutUs } from './pages'
import { Routes, Route } from 'react-router-dom'
import { ProductInfo, OrderPanel, CompleteOrder, Footer, NavBar } from './components'
import { data } from './data'

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
        }
        setPosition(e.currentTarget.id === 'show' ? 0 : -520)
    },[dispatch])

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search)
        const cardIdParam: any = searchParams.get('cardId')
        if (cardIdParam) {
            const productParam: any = searchParams.get('Product')
            const finded: any = data[productParam]?.find((card: any) => card.id === Number(cardInfo?.id))
            document.title = `${finded?.title}.`
        }
        else {
            document.title = 'Онлайн магазин ShineCo.'
        }
        
    })

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search)
        const cardIdParam: any = searchParams.get('cardId')
        const productParam: any = searchParams.get('Product')
        const discountInfo: any = sessionStorage.getItem('discountInfo')
        dispatch(setCardInfo({id: Number(cardIdParam), product: productParam}))
        dispatch(setActivePage(Number(searchParams.get('activePage'))))
        dispatch(setDiscountInfo(JSON.parse(discountInfo)))
    },[dispatch])

    const handleLocation = useCallback(() => {
        const searchParams = new URLSearchParams(window.location.search)
        const cardIdParam: any = searchParams.get('cardId')
        const productParam: any = searchParams.get('Product')
        !cardInfo && dispatch(setCardInfo({id: Number(cardIdParam), product: productParam}))
        dispatch(setActivePage(Number(searchParams.get('activePage'))))
    },[dispatch, cardInfo])

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
                    <Route path='/product-info' element={<ProductInfo />}/>
                </Routes>

                <Footer />
            </div>
    )
}

export default App;

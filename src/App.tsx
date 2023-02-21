import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCardInfo, setDiscountInfo, setActivePage } from './slices/uiSlice'
import { Articul1, Articul2, Articul3, Articul4, Articul5, OtherArticuls, Cart, Home, AboutUs } from './pages'
import { Routes, Route } from 'react-router-dom'
import { ProductInfo, OrderPanel, CompleteOrder, Footer, NavBar } from './components'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

const App = () => {
    const [position, setPosition] = useState(-520)
    const { cardInfo } = useSelector((state: any) => state.ui)
    const dispatch = useDispatch()

    const orderPanelPosition = useCallback((e: any) => {
        e.stopPropagation()
        if(e.currentTarget.id === 'hide') {
            dispatch(setActivePage(null))
            sessionStorage.setItem('activePage', 'null')
        }
        setPosition(e.currentTarget.id === 'show' ? 0 : -520)
    },[dispatch])

    useEffect(() => {
        // console.log(localStorage.getItem('cardInfo'))
        // sessionStorage.clear()
        const discountInfo: any = sessionStorage.getItem('discountInfo')
        // dispatch(setCardInfo((localStorage.getItem('cardInfo'))))
        console.log(sessionStorage.getItem('activePage'))
        dispatch(setActivePage(Number(sessionStorage.getItem('activePage'))))
        dispatch(setCardInfo({id: Number(localStorage.getItem('productId')), urlPath: localStorage.getItem('productUrl')}))
        dispatch(setDiscountInfo(JSON.parse(discountInfo)))
    },[dispatch])
    
    return (
            <div>
                <NavBar  orderPanelPosition={orderPanelPosition}/>
                
                <OrderPanel hidePanel={orderPanelPosition} position={position}/>

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Articul1' element={<Articul1 />}/>
                    <Route path='/Articul2' element={<Articul2 />}/>
                    <Route path='/Articul3' element={<Articul3 />}/>
                    <Route path='/Articul4' element={<Articul4 />}/>
                    <Route path='/Articul5' element={<Articul5 />}/>
                    <Route path='/other-articuls' element={<OtherArticuls />}/>
                    <Route path='/about-us' element={<AboutUs />}/>
                    <Route path='/complete-order' element={<CompleteOrder />}/>
                    <Route path='/cart' element={<Cart />}/>
                    <Route path={cardInfo.urlPath || '/'} element={<ProductInfo />}/>
                </Routes>

                <Footer />
            </div>
    )
}

export default App;

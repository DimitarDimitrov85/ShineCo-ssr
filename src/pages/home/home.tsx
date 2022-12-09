import React, { useCallback, useEffect, useState } from 'react'
import { Button, Carousel } from 'react-bootstrap'

import first from './1.jpg'
import second from './images/2.jpg'
import third from './images/3.jpg'

export const Home = () => {
    return (
        <div>
            <Carousel fade pause={false} controls={false} indicators={false} >
                {/* <Carousel.Item style={{backgroundImage: 'url(/images/3_n.jpg)', backgroundPosition: 'center', background: 'red'}}> */}
                <Carousel.Item>
                    <div
                    // className="d-block w-100"
                    style={{backgroundImage: 'url(/images/3_n.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height:'700px'}}
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
                        style={{backgroundImage: 'url(/images/7_n.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height:'700px'}}
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
                        style={{backgroundImage: 'url(/images/25_n.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height:'700px'}}
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
            <div style={{border: '3px solid red', height: '600px'}}>

            </div>

        </div>
        
    )
}
import React, { useCallback, useState, useEffect } from 'react'
import { Icon } from '../../components'

import './footer.scss'


export const Footer = () => {
    return (
        <footer style={{background: 'black', height: '300px'}}>
                    <h4 className='text-center text-white'>Контакти</h4>
                    <div className='d-flex justify-content-between contacts-info'>
                        <div>
                            <div className='d-flex justify-content-between contact'>
                                <Icon
                                    iconName="GeoAltFill"
                                    color="rgb(153, 153, 153)"
                                    size={30}
                                    // className="align-top"
                                />
                                <p>uh ds89y 98sdhc798 h87sdc 897h sdch9</p>
                            </div>
                            <div className='d-flex justify-content-between contact'>
                                <Icon
                                    iconName="EnvelopeAtFill"
                                    color="rgb(153, 153, 153)"
                                    size={30}
                                    // className="align-top"
                                />
                                <p>uh ds89y 98sdhc798 h87sdc 897h sdch9</p>
                            </div>
                            <div  className='d-flex justify-content-between contact'>
                                <Icon
                                    iconName="TelephoneFill"
                                    color="rgb(153, 153, 153)"
                                    size={30}
                                    // className="align-top"
                                />
                                <p>uh ds89y 98sdhc798 h87sdc 897h sdch9</p>
                            </div>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/Art.Resin.Coaster" rel="noreferrer" target="_blank">
                                <img src="/images/facebook.png" alt=""  className="social-media-contact"/>
                            {/* <Icon
                                iconName="Facebook"
                                className="social-media-contact facebook"
                            /> */}
                            </a>
                            <img src="/images/instagram.png" alt=""  className="social-media-contact"/>
                            {/* <Icon
                                iconName="Instagram"
                                className="social-media-contact instagram"
                            /> */}
                            <img src="/images/tiktok.png" alt=""  className="social-media-contact"/>
                            {/* <Icon
                                iconName="Tiktok"
                                className="social-media-contact tiktok"
                            /> */}
                        </div>
                    </div>
                    
                    <p className='text-center text-white'>
                        Copyright &copy; Shine Corporation 2023
                    </p>
                </footer>
    )
}
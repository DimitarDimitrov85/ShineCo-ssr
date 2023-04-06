import React from 'react'
import { Icon } from '../../components'

import './footer.scss'


export const Footer = () => {
    return (
        <footer>
            <h4 className='text-center text-white'>Контакти</h4>
            <div className='d-flex justify-content-between contacts-info'>
                <div>
                    <div className='d-flex contact'>
                        <Icon
                            iconName="GeoAltFill"
                            color="rgb(153, 153, 153)"
                            size={30}
                        />
                        <p>Гр. Варна, ЗПЗ (бивш ДАП2)</p>
                    </div>
                    <div className='d-flex contact'>
                        <Icon
                            iconName="EnvelopeAtFill"
                            color="rgb(153, 153, 153)"
                            size={30}
                        />
                        <p>info@shinecobg.com</p>
                    </div>
                    <div  className='d-flex contact'>
                        <Icon
                            iconName="TelephoneFill"
                            color="rgb(153, 153, 153)"
                            size={30}
                        />
                        <p>+359 898 429 464</p>
                    </div>
                </div>
                <div className='social-media'>
                    <a href="https://www.facebook.com/Art.Resin.Coaster" rel="noreferrer" target="_blank">
                        <img src="/images/facebook.png" alt=""  className="social-media--contact"/>
                    </a>
                    <a href=" https://www.instagram.com/_shineco_/" rel="noreferrer" target="_blank">
                        <img src="/images/instagram.png" alt=""  className="social-media--contact"/>
                    </a>
                    <a href="https://www.tiktok.com/@_shineco_" rel="noreferrer" target="_blank">
                        <img src="/images/tiktok.png" alt=""  className="social-media--contact"/>
                    </a>
                </div>
            </div>
            
            <p className='text-center text-white copyright'>
                Copyright &copy; Shine Corporation 2021
            </p>
        </footer>
    )
}
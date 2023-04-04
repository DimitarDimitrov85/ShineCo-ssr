import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'

import './about-us.scss'

export const AboutUs = () => {
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])

    return (
        <div>
            <div className='info-about-us' >
                <h2>За нас</h2>
                <Row className='row'>
                    <Col>
                        <img src="/images/Zanas.jpg" alt="" width={'80%'}/>
                    </Col>
                        
                    <Col className='text'>
                        <p>
                            Благодаря Ви, че сте отделили минутка от времето си!
                            Shine Corporation ( ShineCo.) е бранд създаден прeз 2021г.от Михаела Димитрова, която(също)е част от основателите 
                            в Lights-photography( www.lights-photography). 
                            ShineCo. са ръчно изработени артикули от епоксидна смола. Те се отличават със своята иновативност и стилен дизайн. 
                            Голяма част от тях са единствените в България!
                        </p>
                    </Col>
                </Row>
                <Row className='row'>
                    <Col className='text'>
                        <p> 
                            ТВОРЧЕСТВАТА В БРАНДА SHINECO. СА РЪЧНО ИЗРАБОТЕНИ.
                            Обръщаме внимание на детайлите в дизайна на артикулите, което ги прави толкова иновативни и специални. 
                            Ако искате да бъдат изцяло персонализирани и подходящи за подарък за всеки повод, може да добавите печат или лого на тях.
                            Всеки артикул, също може да бъде променен по цвят и дизайн по Ваше предпочитание. 
                            При възникнали въпроси или нужда от съдействие, не се колебайте да се свържете с нас на посочения телефон!
                            Производството е разположено във Фирма Дистем ,
                            където също могат да бъдат видяни част от артикулите.
                        </p>
                    </Col>
                    <Col>
                        <video src="/images/ShineCo.mp4" width="90%" height="340" controls ></video>
                    </Col>
                </Row>
                <p>
                    ОБЩИ УСЛОВИЯ!
                    Поради естеството на работа с епоксидни смоли, пигменти с прахообразна база, пигменти с
                    алкохолна база и др., както и ръчната изработка, смесване и изливане на материалите и тяхното
                    изсъхване, ShineCo. не може да гарантира абсолютно 100% съответствие и еднаквост на
                    шарката на отделните бройки продукти. ShineCo. ще направи всичко възможно
                    отделните бройки да бъдат максимално еднакви и близки по шарка.
                </p>
                <p>Можете да ни намерите на адрес: гр. Варна, ЗПЗ (бивш ДАП2)</p>
            </div>
            <iframe
                title='5'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18464.030264415585!2d27.87031599107317!3d43.21153788060158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x83176d408ef668eb!2zNDPCsDEyJzQ1LjkiTiAyN8KwNTInMjEuNyJF!5e0!3m2!1sbg!2sbg!4v1675009316606!5m2!1sbg!2sbg" 
                width="100%" 
                height="450" 
                loading="lazy" 
                >
            </iframe>
        </div>
    )
}
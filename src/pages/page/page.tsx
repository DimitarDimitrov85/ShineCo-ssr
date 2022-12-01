import React, { useCallback, useEffect, useState } from 'react'
import { Button, Col, Container , Row, Card } from 'react-bootstrap'
// import * as Icon from 'react-bootstrap-icons'
import { Icon } from '../../components'
import { useCart } from 'react-use-cart'
import { data } from '../../data'

export const Page = () => {
    const { addItem } = useCart()
    return (
        // <Container>
            
        //     <Row style={{marginBottom: '20px'}}>
        //         <Col sm>
        //             <Card style={{ width: '18rem' }}>
        //                 <Card.Img variant="top" src="holder.js/100px180" />
        //                 <Card.Body>
        //                     <Card.Title>Card Title</Card.Title>
        //                     <Card.Text>
        //                     Some quick example text to build on the card title and make up the
        //                     bulk of the card's content.
        //                     </Card.Text>
        //                     <Button variant="primary" onClick={addProduct} id='0'>Go somewhere
        //                         <Icon
        //                             iconName="Basket"
        //                             color="red"
        //                             size={16}
        //                             className="align-top"
        //                         />
        //                     </Button>
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //         <Col sm>
        //             <Card style={{ width: '18rem' }}>
        //                 <Card.Img variant="top" src="holder.js/100px180" />
        //                 <Card.Body>
        //                     <Card.Title>Card Title</Card.Title>
        //                     <Card.Text>
        //                     Some quick example text to build on the card title and make up the
        //                     bulk of the card's content.
        //                     </Card.Text>
        //                     <Button variant="primary" onClick={addProduct} id='0'>Go somewhere
        //                         <Icon
        //                             iconName="Basket"
        //                             color="red"
        //                             size={16}
        //                             className="align-top"
        //                         />
        //                     </Button>
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //         <Col sm>
        //             <Card style={{ width: '18rem' }}>
        //                 <Card.Img variant="top" src="holder.js/100px180" />
        //                 <Card.Body>
        //                     <Card.Title>Card Title</Card.Title>
        //                     <Card.Text>
        //                     Some quick example text to build on the card title and make up the
        //                     bulk of the card's content.
        //                     </Card.Text>
        //                     <Button variant="primary" onClick={addProduct} id='1'>Go somewhere</Button>
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //         <Col>
        //             <Card style={{ width: '18rem' }}>
        //                 <Card.Img variant="top" src="holder.js/100px180" />
        //                 <Card.Body>
        //                     <Card.Title>Card Title</Card.Title>
        //                     <Card.Text>
        //                     Some quick example text to build on the card title and make up the
        //                     bulk of the card's content.
        //                     </Card.Text>
        //                     <Button variant="primary" onClick={addProduct} id='2'>Go somewhere</Button>
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col sm>
        //             <Card style={{ width: '18rem' }}>
        //                 <Card.Img variant="top" src="holder.js/100px180" />
        //                 <Card.Body>
        //                     <Card.Title>Card Title</Card.Title>
        //                     <Card.Text>
        //                     Some quick example text to build on the card title and make up the
        //                     bulk of the card's content.
        //                     </Card.Text>
        //                     <Button variant="primary" onClick={addProduct} id='0'>Go somewhere
        //                         <Icon
        //                             iconName="Basket"
        //                             color="red"
        //                             size={16}
        //                             className="align-top"
        //                         />
        //                     </Button>
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //         <Col sm>
        //             <Card style={{ width: '18rem' }}>
        //                 <Card.Img variant="top" src="holder.js/100px180" />
        //                 <Card.Body>
        //                     <Card.Title>Card Title</Card.Title>
        //                     <Card.Text>
        //                     Some quick example text to build on the card title and make up the
        //                     bulk of the card's content.
        //                     </Card.Text>
        //                     <Button variant="primary" onClick={addProduct} id='3'>Go somewhere</Button>
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //         <Col sm>
        //             <Card style={{ width: '18rem' }}>
        //                 <Card.Img variant="top" src="holder.js/100px180" />
        //                 <Card.Body>
        //                     <Card.Title>Card Title</Card.Title>
        //                     <Card.Text>
        //                     Some quick example text to build on the card title and make up the
        //                     bulk of the card's content.
        //                     </Card.Text>
        //                     <Button variant="primary" onClick={addProduct} id='4'>Go somewhere</Button>
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //         <Col>
        //             <Card style={{ width: '18rem' }}>
        //                 <Card.Img variant="top" src="holder.js/100px180" />
        //                 <Card.Body>
        //                     <Card.Title>Card Title</Card.Title>
        //                     <Card.Text>
        //                     Some quick example text to build on the card title and make up the
        //                     bulk of the card's content.
        //                     </Card.Text>
        //                     <Button variant="primary" onClick={addProduct} id='5'>Go somewhere</Button>
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //     </Row>
        // </Container>
            // <div style={{width: '50%', border: 'solid 3px black', margin: 'auto'}}>
            <div style={{width: '50%', margin: 'auto'}}>
            { data.map((pr: any) => (
                <Card style={{ width: '18rem', display: 'inline-block', margin: '15px', boxShadow: '5px 15px 15px rgb(214, 214, 214)' }} key={pr.id}>
                {/* <Card style={{ display: 'inline-block', marginRight: '10px', marginTop: '10px', boxShadow: '1px 1px 1px rgb(133, 133, 133)' }} key={pr.id}> */}
                    <Card.Img variant="top" src={pr.img}/>
                    <Card.Body>
                        <div  className='d-flex justify-content-between'>
                            <Card.Title>{pr.title}</Card.Title>
                            <span className='fw-bolder'>{pr.price}</span>
                        </div>
                        <Card.Text>
                        {pr.text}
                        </Card.Text>
                        {/* <Button variant="primary" onClick={addProduct} id={pr.id}>Go somewhere */}
                        <Button className='btn-sm' variant="outline-primary" onClick={() => addItem(pr)} id={pr.id}>Add to Cart
                            {/* <Icon
                                iconName="Cart3"
                                color="red"
                                size={10}
                                className="align-top"
                            /> */}
                        </Button>
                    </Card.Body>
                </Card>
                ))}
            </div>
        
    
    )
}
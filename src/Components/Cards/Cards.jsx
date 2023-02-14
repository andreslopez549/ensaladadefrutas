import React from 'react'
import './Cards.css';
import { Container, Col, Row } from 'react-bootstrap';
import Card1 from '../../images/card1.png';
import Card2 from '../../images/card2.png';
import Card3 from '../../images/card-3.png';
import Card4 from '../../images/card-4.png';

const Cards = () => {
    return (
        <div className='card_section'> 
            <Container>
                <Row>
                    <Col md={6}>
                    <div class="description ng-star-inserted" id="label-promotion-1-tag">Destino</div>
                        <div className='image_container'>
                            <img src={Card1} alt='card-1' />
                           
                        </div>
                    </Col>
                    <Col md={6} style={{position:"relative"}}>
                    <div class="description ng-star-inserted" id="label-promotion-1-tag">Destino</div>
                        <div className='image_container'>
                            <img src={Card2} alt='card-2' />
                            
                        </div>
                    </Col>
                    <Col md={6}>
                    <div class="description ng-star-inserted" id="label-promotion-1-tag">Destino</div>
                        <div className='image_container'>
                            <img src={Card3} alt='card-3' />
                        </div>
                    </Col>
                    <Col md={6}>
                    <div class="description ng-star-inserted" id="label-promotion-1-tag">Destino</div>
                        <div className='image_container'>
                            <img src={Card4} alt='card-4' />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>

    )
}

export default Cards

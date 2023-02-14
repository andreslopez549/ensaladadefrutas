import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import fbIcon from '../../images/facebook.png'
import twitterIcon from '../../images/twitter.png'
import youTubeIcon from '../../images/youtube.png'
import instaIcon from '../../images/instagram.png'
import linkedinIcon from '../../images/linked_in.png'
import LogoFooter1 from '../../images/Logo_Footer_1.png'
import LogoFooter2 from '../../images/LogoFooter2_.png'
import LogoFooter3 from '../../images/Logo_Footer-3.png'
import LogoFooter4 from '../../images/Logo_Footer_4.png'

const Footer = () => {
    return (
        <React.Fragment>
            <footer className='footer_main'>
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className='information_legal_container'>
                                <h3>Información Legal</h3>
                                <ul>
                                    <li>Términos y condiciones</li>
                                    <li>Política de cookies</li>
                                    <li>Código de conducta</li>
                                    <li>Política de tratamiento de datos personales</li>
                                    <li>Derechos y deberes del pasajero</li>
                                </ul>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className='atencion_container'>
                                <h3>Atención al cliente</h3>
                                <ul>
                                    <li>Canales de atención </li>
                                    <li>Aviación Civil</li>
                                    <li>Portal de agencias y empresas </li>
                                    <li>Solicitud de Facturación Electrónica</li>
                                    <li>Términos y condiciones Códigos naranjas</li>
                                </ul>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className='acerca_container'>
                                <h3>ACERCA DE NOSOTROS</h3>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className='social_icon_continer'>
                                <h3>Síguenos en </h3>
                                <div className='social_icon'>
                                    <div>
                                        <img src={fbIcon} alt='fb-Icon' />
                                    </div>

                                    <div>
                                        <img src={twitterIcon} alt='twitter-Icon' />
                                    </div>

                                    <div>
                                        <img src={youTubeIcon} alt='youtube-Icon' />
                                    </div>

                                    <div>
                                        <img src={instaIcon} alt='insta-Icon' />
                                    </div>
                                    <div>
                                        <img src={linkedinIcon} alt='linkedin-Icon' />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </footer>
            <div className='inner_footer'>
                <Container>
                    <Row>
                        <Col md={4}>
                            <div>
                                <p className='pt-2'>© Ultra Air 2022. Todos los derechos reservados.</p>
                                <p className='pb-2'>Ultra Air SAS NIT: 901428193-1</p>

                            </div>
                        </Col>

                        <Col md={8}>
                            <div className='logo_footer_container'>
                                <div>
                                    <img src={LogoFooter1} alt='logo-footer-1' />
                                </div>
                                <div>
                                    <img src={LogoFooter2} alt='logo-footer-1' />
                                </div>
                                <div>
                                    <img src={LogoFooter3} alt='logo-footer-1' />
                                </div>
                                <div>
                                    <img src={LogoFooter4} alt='logo-footer-1' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Footer

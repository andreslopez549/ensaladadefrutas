import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, DropdownButton, Dropdown } from "react-bootstrap";
// import { TbWorld } from "react-icons/tb";
// import { CgProfile } from "react-icons/cg"
// import Select from 'react-select'
import './Navbar.css';

function Header() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    return (
        <div className="App">
            <Navbar expand="lg">
                <Navbar.Brand href="#home"><svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980.27 375.03"><defs></defs><title>Untitled-2</title><path class="cls-1" d="M368.86,300.89V39.44A10.42,10.42,0,0,0,358.43,29H318.68a10.42,10.42,0,0,0-10.42,10.43V296.77c20.32,2.13,40.57,3.47,60.6,4.12" /><path class="cls-1" d="M358,320.71q-26.37,0-49.73-.73v15.61A10.43,10.43,0,0,0,318.69,346h39.74a10.43,10.43,0,0,0,10.43-10.43V320.66q-5.42,0-10.87,0" /><path class="cls-1" d="M478.4,298.18V165.73H526a10.43,10.43,0,0,0,10.43-10.43V115.56A10.43,10.43,0,0,0,526,105.13H478.4V39.44A10.42,10.42,0,0,0,468,29H428.23A10.42,10.42,0,0,0,417.8,39.44V301.18c20.62-.41,40.88-1.46,60.6-3" /><path class="cls-1" d="M417.8,319.09v16.5A10.43,10.43,0,0,0,428.23,346H468a10.43,10.43,0,0,0,10.43-10.43V314.14c-19.43,2.12-39.64,3.82-60.6,4.95" /><path class="cls-1" d="M609.11,280.43V228.79a64,64,0,0,1,48.59-62,10.41,10.41,0,0,0,7.91-10.11V116.16a10.44,10.44,0,0,0-12.06-10.31,124.65,124.65,0,0,0-105,122.94v61.69c21.3-3,41.6-6.42,60.6-10.05" /><path class="cls-1" d="M548.51,304.15v31.44A10.43,10.43,0,0,0,558.94,346h39.74a10.43,10.43,0,0,0,10.43-10.43V291.67c-18.75,4.44-39,8.68-60.6,12.48" /><path class="cls-1" d="M958.34,104.33H918.6a10.43,10.43,0,0,0-10.43,10.43v32.59l-12.62-12.88a124.41,124.41,0,0,0-206.41,128c46.67-12.09,74.79-22.31,74.79-22.31s-25.88,12.87-72.5,28.31c19,46.17,65,78.52,117.6,77.55a123.5,123.5,0,0,0,86.52-37.35l12.62-12.88v32.59a10.43,10.43,0,0,0,10.43,10.43h39.74a10.42,10.42,0,0,0,10.43-10.43V114.76a10.42,10.42,0,0,0-10.43-10.43m-220.7,85.05c-4.81-3-4.12-5.39,1.54-5.39H875.49c5.66,0,6,1.72.75,3.84l-75.85,30.67c-5.25,2.12-13.39,1.42-18.2-1.55Zm143.64,8-93.42,99.27c-3.88,4.12-6.1,3-5-2.58l10.45-51.34c1.14-5.54,6.22-11.95,11.35-14.31L879,194.22c5.14-2.36,6.16-.94,2.28,3.18" /><path class="cls-1" d="M241.64,286.42A126.49,126.49,0,0,0,260.43,220V114.77A10.43,10.43,0,0,0,250,104.34H210.25a10.43,10.43,0,0,0-10.42,10.43V220.43a65.51,65.51,0,0,1-19.64,46.66c16,7.2,36.3,13.84,61.45,19.33" /><path class="cls-1" d="M86.48,261.88a63.61,63.61,0,0,1-14.37-40.32v-1.08q-.09-2.16-.09-4.35c0-1.17,0-2.3.09-3.4v-98a10.43,10.43,0,0,0-10.43-10.44H21.94a10.43,10.43,0,0,0-10.43,10.44V221.56A124.59,124.59,0,0,0,137.19,346a122.81,122.81,0,0,0,82-32.45c-74.45-9.36-114-27.46-132.73-51.68" /></svg></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Reserva" id="basic-nav-dropdown1"
                            show={show1}
                            onMouseEnter={() => setShow1(!show1)}
                            onMouseLeave={() => setShow1(false)}
                        >
                            <h6>Reserva tu vuelo</h6>
                            <NavDropdown.Item href="#action/3.1">Web Check - In</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Estado de tu vuelo</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Edita tu reserva</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Viajar" id="basic-nav-dropdown2"
                            show={show2}
                            onMouseEnter={() => setShow2(!show2)}
                            onMouseLeave={() => setShow2(false)}
                        >
                            <h6>Tu reserva</h6>
                            <NavDropdown.Item href="#action/3.1">Grupos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Charters</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Promociones</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Info para volar" id="basic-nav-dropdown3"
                            show={show3}
                            onMouseEnter={() => setShow3(!show3)}
                            onMouseLeave={() => setShow3(false)}
                        >
                            <h6>Equipaje y más servicios</h6>
                            <NavDropdown.Item href="#action/3.1">Equipaje</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Servicios Adicionales</NavDropdown.Item>

                            <h6>Información</h6>
                            <NavDropdown.Item href="#action/3.3"> Dónde Comprar</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"> Medios de Pago</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Cancelaciones y Compensaciones </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Preguntas frecuentes </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Calamidad o Enfermedad </NavDropdown.Item>

                            <h6>Políticas</h6>

                            <NavDropdown.Item href="#action/3.4">Pasajeros con Necesidades Especiales</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Menores y Niños</NavDropdown.Item>

                            <h6>Documentación en aeropuerto</h6>
                            <NavDropdown.Item href="#action/3.1">En el aeropuerto</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Destinos" id="basic-nav-dropdown4"
                            show={show4}
                            onMouseEnter={() => setShow4(!show4)}
                            onMouseLeave={() => setShow4(false)}

                        >
                            <h6>Destinos</h6>
                            <NavDropdown.Item href="#action/3.1">Bogotá</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Cali</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Cartagena</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Medellín</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Pereira</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">San Andrés</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Santa Marta</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className='d-flex'>
                        <div className='d-flex align-items-center'>
                            <CgProfile className='inic_icon' />
                            <button className='inic'>Inicia sesión</button>
                        </div>
                        <div className='divider'></div>
                        <div className='d-flex align-items-center'>
                            <button className='inic'> Regístrate  </button>
                        </div>
                    </div>
                </Navbar.Collapse> */}
            </Navbar>
        </div>
    );
}

export default Header;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components';
import '../App.css';
import Modal from 'react-bootstrap/Modal';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7'

const Offshore = '/img/offshore.png';
const Resident = '/img/resident.png';
const Transient = '/img/transient.png'

const Detail = styled.p`
font-family: 'Kanit', sans-serif;
text-align: center;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 43px;
color: #000000;
`

function Species() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    return (
        <div className="Species">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <a onClick={() => setShow1(true)}>
                            <div id="Resident">
                                <img src={Resident} />
                                <div id="ResidentData">
                                    <Detail>สายพันธุ์ทั่วไป</Detail>
                                    <Detail>(Resident)</Detail>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3">
                        <a onClick={() => setShow2(true)} >
                            <div id="Transient">
                                <img src={Transient} />
                                <div id="TransientData">
                                    <Detail>สายพันธุ์อพยพ</Detail>
                                    <Detail>(Transient)</Detail>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3">
                        <a onClick={() => setShow3(true)} >
                            <div id="Offshore">
                                <img src={Offshore} />
                                <div id="OffshoreData">
                                    <Detail>สายพันธุ์ทะเลลึก</Detail>
                                    <Detail>(Offshore)</Detail>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <Modal
                show={show1}
                onHide={() => setShow1(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Body>
                    <a onClick={() => setShow1(false)} id="closeButton">&times;</a>
                    <Carousel>
                        <Carousel.Item>
                            <Page5></Page5>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Page6></Page6>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Page7></Page7>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>

            <Modal
                show={show2}
                onHide={() => setShow2(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Body>
                    <a onClick={() => setShow2(false)} id="closeButton">&times;</a>
                    <Carousel>
                        <Carousel.Item>
                            <Page6></Page6>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Page7></Page7>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Page5></Page5>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>

            <Modal
                show={show3}
                onHide={() => setShow2(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Body>
                    <a onClick={() => setShow3(false)} id="closeButton">&times;</a>
                    <Carousel>
                        <Carousel.Item>
                            <Page7></Page7>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Page5></Page5>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Page6></Page6>
                        </Carousel.Item>
                    </Carousel>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default Species;
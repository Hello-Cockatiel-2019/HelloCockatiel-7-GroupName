import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components';
import '../App.css';

const Topic1 = styled.h1`
position: absolute;
font-family: 'Kanit', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 80px;
line-height: 95px;
color: #000000;
margin-top: 40px;
margin-left:60px;
`
const Detail1 = styled.p`
font-family: 'Kanit', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 65px;
color: #000000;
`
const Topic2 = styled.h1`
font-family: 'Kanit', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 80px;
line-height: 95px;
color: #000000;
`
const Detail2 = styled.p`
font-family: 'Kanit', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 40px;
color: #000000;
width:400%;
`
function About() {

    return (
        <Carousel id="About">
            <Carousel.Item>
                <div id="Background2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                            </div>
                            <div className="col-lg-6">
                                <Topic1>ABOUT</Topic1>
                                <div className="About">
                                    <Detail1>COMMON NAME:Orca (Killer Whale)</Detail1>

                                    <Detail1>SCIENTIFIC NAME:Orcinus orca</Detail1>

                                    <Detail1>TYPE:Mammals</Detail1>

                                    <Detail1>GROUP NAME:Pod</Detail1>

                                    <Detail1>AVERANGE LIFE SPAN IN THE WILD:50 to 80 years</Detail1>

                                    <Detail1>SIZE:23 to 32 feet</Detail1>

                                    <Detail1>WEIGHT:Up to 6 tons</Detail1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div id="Background3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="About2">
                                    <Topic2>Orca</Topic2>
                                    <Detail2>"ออร์กา" (Orca) หรือ "วาฬเพชฌฆาต" (Killer whales)<br />
                                        สัตว์เลี้ยงลูกด้วยนมขนาดใหญ่อยู่ในวงศ์โลมา (Delphinidae)<br />
                                        ชื่อวิทยาศาสตร์ : ออคินัส ออกา (Orcinus orca)<br />
                                        แหล่งอาศัย : มหาสมุทรทั่วโลก<br />
                                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        อาร์กติก-แอนตาร์กติก รวมทั้งในทะเลแถบเขตร้อน</Detail2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default About;
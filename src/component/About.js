import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import '../App.css';
import Popup from "reactjs-popup";

const Orca1 = '/img/Orca1.png';
const Orca2 = '/img/Orca2.png';
const Topic1 = styled.h1`
position: absolute;
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 80px;
line-height: 95px;
color: #000000;
margin-top: 40px;
`
const Detail1 = styled.p`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 76px;
color: #000000;
`
const Topic2 = styled.h1`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 60px;
line-height: 95px;
color: #000000;
margin-left:50px;
`
const Detail2 = styled.p`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 40px;
color: #000000;
width:400%;
padding:20px 10px 20px 10px;
`

function About() {
    return (

        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={Orca1} className="Pic1" />
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

                        <Popup trigger={<button className="button"> <span>>></span> </button>} modal>
                            {close => (
                                <div>
                                    <a className="close" onClick={close}> &times;</a>

                                    <img src={Orca2} className="Pic2" />
                                    <Topic2>Orca</Topic2>
                                    <div>
                                        <Detail2>"ออร์กา" (Orca) หรือ "วาฬเพชฌฆาต" (Killer whales)<br />
                                            สัตว์เลี้ยงลูกด้วยนมขนาดใหญ่อยู่ในวงศ์โลมา (Delphinidae)<br />
                                            ชื่อวิทยาศาสตร์ : ออคินัส ออกา (Orcinus orca)<br />
                                            แหล่งอาศัย : มหาสมุทรทั่วโลก<br />
                                            อาร์กติก-แอนตาร์กติก รวมทั้งในทะเลแถบเขตร้อน</Detail2>
                                    </div>

                                </div>
                            )}
                        </Popup>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;
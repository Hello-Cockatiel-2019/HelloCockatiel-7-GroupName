import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import '../App.css';

const Orca1 = '/img/Orca1.png';
const Topic = styled.h1`
position: absolute;
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 80px;
line-height: 95px;
color: #000000;
margin-top: 40px;
`
const Detail = styled.p`
position: absolute;
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 64px;
line-height: 76px;
color: #000000;
`

function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <img src={Orca1} className="Pic1" />
                </div>
                <div className="col-lg-6">
                    <Topic>ABOUT</Topic>
                    <div>
                    <Detail>COMMON NAME:Orca (Killer Whale)</Detail>
                    <Detail>SCIENTIFIC NAME:Orcinus orca</Detail>
                    <Detail>TYPE:Mammals</Detail>
                    <Detail>GROUP NAME:Pod</Detail>
                    <Detail></Detail>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default About;
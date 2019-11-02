import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import '../App.css';

const Entity = '/img/Ellipse.png'

const Topic = styled.h1`
position: relative;
text-align: center;
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 72px;
line-height: 85px;
color: #000000;
`
const Type = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
`
const Detail = styled.p`
font-family: Rubik;
text-align: center;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 43px;
color: #000000;
`
function Species() {
    return (
        <div className="Species">
            <Topic>สายพันธุ์หลัก</Topic>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Type src={Entity} />
                        <Detail>สายพันธุ์ทั่วไป</Detail>
                        <Detail>(Resident)</Detail>
                    </div>
                    <div className="col-lg-4">
                        <Type src={Entity} />
                        <Detail>สายพันธุ์อพยพ</Detail>
                        <Detail>(Transient)</Detail>
                    </div>
                    <div className="col-lg-4">
                        <Type src={Entity} />
                        <Detail>สายพันธุ์ทะเลลึก</Detail>
                        <Detail>(Offshore)</Detail>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Species;
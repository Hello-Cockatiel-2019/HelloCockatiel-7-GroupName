import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import Page82 from './Page82';

const Orca8 = '/img/Orca8.png';
const Topic = styled.h1`
top:50px;
position: relative;
font-size: 120px;
text-align: center;
color:white;
font-family:'Kanit', sans-serif;

`

function Page8(){
    return(
        <Carousel  id="Anotomy">
        <Carousel.Item>
        <div class="bg8">
    <Topic>Anatomy</Topic>
        <img src={Orca8} className="pic8"/>
    </div>
        </Carousel.Item>
        <Carousel.Item>
         <Page82></Page82>
        </Carousel.Item>
        </Carousel>
            
    )

}
export default Page8;
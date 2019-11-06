import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import '../App.css';

const Topic = styled.h1`
position: absolute;
margin-top: 600px;
margin-bottom: 0px;
margin-right: 773px;
margin-left: 50px;
width: 521px;
height: 115px;
font-family: 'Kanit', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 80px;
line-height: 95px;

color: #000000;
`
const Meaning = styled.p`
position: absolute;
width: 479px;
height: 56px;
margin: 700px 806px 24px 50px;
font-family: 'Kanit', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;

color: rgba(0, 0, 0, 0.54);
`


function Home() {
  return (
    <div className="HomePadding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Topic>Killer Whale</Topic>
            <Meaning> the largest of the dolphins and
           one of the world's most powerful predators</Meaning>
            <a href="#" id="button">About</a>
          </div>
          <div className="col-lg-6">
          </div>
        </div>
      </div>
    </div>

  )
}
export default Home;
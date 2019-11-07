import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import '../App.css';

const orca82 = '/img/orca82.png';
const Topic1 = styled.h1`
top:50px;
position: relative;
font-size: 120px;
color:white;
text-align: center;
font-family:'Kanit', sans-serif;

`

function Page82(){
    return(
        <div class="bg82">
    <Topic1>Anatomy</Topic1>
        <img src={orca82} className="pic9"/>
    </div>
  
            
    )

}
export default Page82;
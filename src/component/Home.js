import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Orca1 from '../img/Orca1.png';

function Home(){
    return(<div class="row">
  <div class="col-lg-4">.col-lg-4</div>
  <div class="col-lg-4">
      <img src={Orca1}/>
  </div>
</div>)
}
export default Home;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const transient = '/img/transientDetail.png'
const Pic = styled.img`
position: relative;
right:60px;
top:20px;
height:600px;
width:600px

`

const Text1 = styled.h1`
font-family: 'Kanit', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 60px;
line-height: 40px;
color: #FFFFFF;
margin-top:60px;
line-height: 50px;
`
const Text2 = styled.h1`
font-family: 'Kanit', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 50px;
margin-top:60px;
color: #FFFFFF;

`
const Text3 = styled.h1`
font-family: 'Kanit', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 50px;
margin-top:60px;
color: #FFFFFF;

`

function page6() {

  return (
    <div class="Backgroundtransient">
      <div className="container">
        <div class="row">
          <div class="col-lg-6"><Pic src={transient} /></div>
          <div class="col-lg-6">
            <Text1>สายพันธุ์อพยพ (Transient)</Text1>
            <Text2>มักเดินทางไปทั่วตามชายฝั่งทะเล รวมกลุ่มกันเล็กๆ ราว 2-6 ตัว</Text2>
            <Text3>แต่ไม่เป็นครอบครัวเหนียวแน่นและมีพฤติกรรมไม่ซับซ้อนเท่าสายพันธุ์ทั่วไป</Text3>
          </div>
        </div>
      </div>
    </div>)
}
export default page6;
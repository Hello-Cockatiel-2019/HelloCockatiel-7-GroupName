import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';



const Text1 = styled.h1`
font-family: 'Kanit', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 60px;
line-height: 60px;
margin:40px 0px 0px 300px;
color: #000000;

`
const Text2 = styled.h1`
font-family: 'Kanit', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 28px;
margin:130px 10px 0px -740px;
color: #000000;

`
const Text3 = styled.h1`
font-family: 'Kanit', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 28px;
margin:190px 0px 0px -920px;
color: #000000;

`

function page5() {


  return (
    <div class="BackgroundResident">
      <div class="row">
        <Text1>สายพันธุ์ทั่วไป (Resident)</Text1>
        <Text2>ส่วนใหญ่อาศัยอยู่ตามชายฝั่งด้านตะวันออกเฉียงเหนือ</Text2>
        <Text3>ของมหาสมุทรแปซิฟิกอยู่รวมกันเป็นครอบครัวอย่างเหนียวแน่น</Text3>
      </div>
    </div>)
}
export default page5;
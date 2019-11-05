import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';


const offshore = '/img/offshoreDetail.png'
const Pic = styled.img`
position:relative;
bottom:130px;
right:120px;
`

const Text1 = styled.h1`
font-family: 'Kanit', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 60px;
line-height:  50px;
color: #FFFFFF;
margin-top:80px;
`
const Text2 = styled.h1`
font-family: 'Kanit', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 60px;
color: #FFFFFF;
`

function page7() {

  return (
    <div class="Backgroundoffshore">
      <div className="container">
        <div class="row">
          <div class="col-lg-6"><Pic src={offshore} /></div>
          <div class="col-lg-6">
            <Text1>สายพันธุ์ทะเลลึก (Offshore)</Text1>
            <Text2>&nbsp;&nbsp;&nbsp;&nbsp;นักวิทยาศาสตร์เพิ่งค้นพบวาฬเพชฌฆาตสายพันธุ์นี้
            เมื่อปี 1988 ซึ่งมีพันธุกรรมแยกออกจาก 2 สายพันธุ์
            ส่วนใหญ่อาศัยอยู่ในทะเลเปิด มักรวมตัวกันเป็นฝูงขนาดใหญ่
            ประมาณ 60 ตัวแต่พฤติกรรมอื่นๆ ยังมีข้อมูลน้อยมาก</Text2>
          </div>
        </div>
      </div>
    </div>)
}
export default page7;
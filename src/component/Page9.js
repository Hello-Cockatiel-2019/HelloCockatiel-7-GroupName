import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { className } from 'postcss-selector-parser';
import '../App.css';



const Paragraph1 = styled.p`
font-size: 32px;
top:100px; 
margin-left:25px;
position: relative;
color:white;
font-family: 'Kanit', sans-serif;
`
const Paragraph11 = styled.p`
text-decoration: underline;font-size: 36px;
top:120px; margin-left:50px;
position: relative;
color:white;
font-family:'Kanit', sans-serif;   
`
const Paragraph2 = styled.p`
font-size: 32px;
top:330px; margin-left:1100px;
position: relative;
color:white;
font-family:'Kanit', sans-serif;

`
const Paragraph3 = styled.p`
font-size: 36px;
top:500px;margin-left:50px;
position: relative;
font-family:'Kanit', sans-serif;
font-style: normal;
font-weight: normal;
text-align: center;
color:white;

`
const Topic = styled.h1`
font-size: 120px;
top:150px;
font-family: 'Kanit', sans-serif;
position: relative;
text-align: center;
color:white;

`


function Page9(){
    return(
        <div class="bg9" id="Behavior">
           
           <Paragraph1>"วาฬเพชฌฆาตเป็นสัตว์สังคม จนได้รับฉายาว่า </Paragraph1>
           <Paragraph11>"หมาป่าแห่งท้องทะเล"</Paragraph11>
    <Paragraph2>มีตัวเมียเป็นจ่าฝูงหรือผู้นำฝูง</Paragraph2>

    <Topic>พฤติกรรม</Topic>
     <Paragraph3>วาฬเพชฌฆาตก็จะส่งเสียง ที่แตกต่างกัน และยังพบอีกด้วยว่าสมองของมัน สามารถแสดงออกถึงอารมณ์คล้ายกับมนุษย์ได้อีกด้วย</Paragraph3>

    
        
    </div>
  
            
    )

}
export default Page9;
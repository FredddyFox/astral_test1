import React, { Component } from 'react';
import styled from "styled-components";
import Logo from "../assets/logo.png";

import '../App.css';

const TextInfoCompany = styled.div`
width:39%;
height:100vh;
background: url(https://ilyakhasanov.ru/images/background/21.jpg) 100% 100% / cover ;
position:absolute;
left:1%;
margin-top:3%;
display:flex;
justify-content:center;
color:black;
outline: 2px solid #000;
`;
const Logotype = styled.div`
width:37%;
height:30vh
margin-top:5vh;
background: url(${Logo}) 100% 100% / cover ;
`;

const Statistic = styled.div`
position:absolute;
bottom:2vh;
`;

class Info extends Component {
  render() {
    return (
      <div>
          <TextInfoCompany>
            <Logotype>
              </Logotype>
              <Statistic><iframe class="highcharts-iframe" src="https://cloud.highcharts.com/embed/BywZbLzM7/"></iframe></Statistic>
          </TextInfoCompany>
      </div>
    );

}
}

export default Info;
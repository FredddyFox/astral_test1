import React, { Component } from 'react';
import styled from "styled-components";

const BottomStyled = styled.div`
width:100%;
height:10vh;
background:#fe7f18;
margin-top:110vh;
margin-bottom:5vh;
display:flex;
align-items:center;
color:white;
`;
const MinInfo = styled.h2`
font-size:150%;
display:flex;
justify-content:center;
text-shadow: 1px 1px 0 black, -1px -1px 0 black;
`;
// const CommunicationsImg = styled.img`
// width:8vh;
// height:8vh;
// `;

class Footer extends Component {
  render() {
    // const {FooterImage} = this.props;
    return (
      <div>
          <BottomStyled>
            <MinInfo>Test 0.0.1</MinInfo>
            {/* {FooterImage.map(Footer =>{
                return (
                    <CommunicationsImg src={Footer.src}/>
                )
            })} */}
          </BottomStyled>
      </div>
    );

}
}

export default Footer;
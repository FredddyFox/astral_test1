import React, { Component } from 'react';
import styled from "styled-components";

const ContainSearch = styled.div`
width:100%;
height:10vh;
background:#fe7f18;
margin-top:5vh;
display:flex;
align-items:center;
justify-content:center;
color:white;
`;
const NameTehnic = styled.h2`
font-size:150%;
text-shadow: 1px 1px 0 black, -1px -1px 0 black;
`;
const Test = styled.p`
margin-left:25%;
font-size:150%;
text-shadow: 1px 1px 0 black, -1px -1px 0 black;
`;

class Search extends Component {
  render() {
    return (
      <div>
          <ContainSearch>
            <NameTehnic>Корзина для покупок</NameTehnic>
          </ContainSearch>
      </div>
    );

}
}

export default Search;
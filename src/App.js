import React, { Component } from 'react';
import styled from "styled-components";
import './App.css';

import Search from "./components/Search";
import Content from "./components/Content";
import Info from "./components/Info";
import Footer from "./components/Footer";

import {SHORT_INFORMATION} from './constants/InformationMaster';

class App extends Component {
  
  render() {
    return (
      <div>

        <Search/>
        <Info />
        
        <Content
                  src={SHORT_INFORMATION.Infirmation1.src}
                  title={SHORT_INFORMATION.Infirmation1.title}
                  text={SHORT_INFORMATION.Infirmation1.text}
                  text2={SHORT_INFORMATION.Infirmation1.text2}
                  >
        </Content>

        <Content
                  src={SHORT_INFORMATION.Infirmation2.src}
                  title={SHORT_INFORMATION.Infirmation2.title}
                  text={SHORT_INFORMATION.Infirmation2.text}
                  text2={SHORT_INFORMATION.Infirmation2.text2}
                  >
        </Content>

        <Footer/>
        </div>
    );

}
}

export default App;

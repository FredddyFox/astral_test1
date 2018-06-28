import _ from 'lodash';
import React, { Component } from 'react';
import styled from "styled-components";

import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";
import S3 from "../assets/s3.png";
import S4 from "../assets/s4.png";
import S5 from "../assets/s5.png";
import S6 from "../assets/s6.png";

const AllContent = styled.div`
width:58%;
height:50vh;
background: url(https://ilyakhasanov.ru/images/background/21.jpg) 100% 100% / cover ;
position:absolute;
right:1%;
margin-top:3%;
padding-top:50vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color:black;
outline: 2px solid #000;
overflow: auto;
`;

const Frame = styled.div`
width:90%;
height:30vh;
background:white;
font-size:90%;
margin-top:1vh;
outline: 2px solid #000;
`;

const PgotoProduct = styled.img`
width:20%;
height:15vh;
position:absolute;
left:40%;
`;
const phoneInfo = [
    {
        id: 0,
        src:S1,
        name: 'samsung',
        price: '200'
    },
    {
        id: 1,
        src:S2,
        name: 'iphone 10',
        price: '500'
    },
    {
        id: 2,
        src:S3,
        name: 'asus zenfon 5',
        price: '310'
    },
    {
        id: 3,
        src:S4,
        name: 'xiaomi 5',
        price: '320'
    },
    {
        id: 4,
        src:S5,
        name: 'meizu ',
        price: '220'
    },
    {
        id: 5,
        src:S6,
        name: 'nokia ',
        price: '120'
    },
];

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            basket: [],
            searchedPhone: []
        };

        this.handleAddToBasket = this.handleAddToBasket.bind(this); 
        this.handleClearBasket = this.handleClearBasket.bind(this);
        this.handleSearchInBasket = this.handleSearchInBasket.bind(this); 
    }

    handleAddToBasket(id, price) {
        return () => {
            const { basket } = this.state;

            // const findItem = _.find(basket, item => (item.id === id));

            // if (findItem) {
                // this.setState({ basket: basket[id].concat(currentPhone) })
            // }

            const currentPhone = _.find(phoneInfo, phone => (phone.id === id));

            this.setState({ basket: basket.concat(currentPhone) })
        };
    }

    handleClearBasket() {
        this.setState({ basket: [] });
    }

    handleSearchInBasket(event) {
        const { value } = event.target;

        if (value) {
            const searchedPhone = _.find(phoneInfo, phone => phone.name.indexOf(value) === -1 ? null : phone.name);   
            
            if (!searchedPhone) {
                this.setState({ searchedPhone: [] });
            } else {
                this.setState({ searchedPhone: [searchedPhone] });
            }
        } else {
            this.setState({ searchedPhone: [] });
        }    
    }

  render() {
    const { basket, searchedPhone } = this.state;
    const { src, title, text, text2 } = this.props;

    const hasSearch = _.isEmpty(searchedPhone);


    return (
      <div>
        <AllContent>
            <input onChange={this.handleSearchInBasket} placeholder="search" />
          {(hasSearch ? phoneInfo : searchedPhone).map(phone => (
           <Frame>
           <div key={phone.id}>
           <PgotoProduct src={phone.src}/>
                <h3>{phone.name}</h3>
                <p>Цена:{phone.price}$</p>
                <button onClick={this.handleAddToBasket(phone.id, phone.price)}>Добавить в корзину</button>
            </div>
            </Frame>
          ))}
              <div>
                {basket.map((item, index) => (
                    <div key={index}>
                    <center><h3>Выбранный товар:</h3></center>
                        <Frame>
                            <center>
                                <h3>Товар:{item.name}</h3>
                                <br/>
                                <p>Цена:{item.price}$</p>
                            <p><button id="clear_cart" onClick={this.handleClearBasket}>Очистить корзину</button></p>
                            </center>
                            
                        </Frame>
                    </div>
                ))}
              </div>
          </AllContent>
      </div>
    );

}
}

export default Content;
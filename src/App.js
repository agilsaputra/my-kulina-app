import React, {Component} from 'react';
import "./App.css";
import styled from 'styled-components' ;
import Calendar from './calendar';
import ExampleApp from './modal';
import Addtocart from './addtocart';
import Icon from './iconbutton';





const Button = styled.button`
  /* Adapt the colors based on primary prop */
  /*  <img src={img01} className="img01" alt="img01" /> */
  /* import img01 from './img01.jpg'; */
  background: ${props => props.primary ? "grey" : "white"};
  color: ${props => props.primary ? "white" : "grey"};

  font-size:12px;
  border-radius: 5px;
  margin-top: 10px;
  border: 0.5px solid grey;
  padding:6px 60px;
  color: grey;
  align-items:center;
  

`;

class App extends Component {
  render () {
    return (
   
      <div className="App">
       
      <div class="modaltitle"> 
      <Icon/>
      <div class="label-lokasi"> 
      <p>ALAMAT PENGANTARAN</p> </div>

      <div class="lokasi"><p>toplet tower</p></div>
        
        <ExampleApp/> </div>
       
       
        <div class="calendar">

        <Calendar/>
        </div>
       
        <div class="button">
        <Button >Lunch </Button>
        <Button >Dinner </Button>
        </div> 
          
      <body> 
        <div class="flex-container">
              <div class= "card">
                <div class="card-image01"> </div>
                <div class="card-text">

               <h3> Nasi Rames </h3>
                <p> by kunia app</p>
                <div class="flex">
                <h3 class="harga">Rp 35.000</h3>
                <div class="card-btn">
                <Addtocart/>
                  
                  </div>
                  </div>

                </div>
              </div>

              <div class= "card">
                <div class="card-image02"> </div>
                <div class="card-text">

                  <h3>Jamur BBQ</h3>
                  <p>by kulina app</p>
                  <div class="flex">
                    <h3 class="harga">Rp 45.000</h3>
                    <div class="card-btn"><Addtocart/></div>
                  </div>
                </div>
              </div>

              <div class= "card">
                <div class="card-image03"> </div>
                <div class="card-text">

                  <h3>Nasi Kuning</h3>
                  <p>by kulina app</p>
                <div class="flex">
                  <h3 class="harga">Rp 55.000</h3>
                  <div class="card-btn"><Addtocart/></div>
                </div>
                </div>
              </div>

              <div class= "card">
                <div class="card-image04"> </div>
                <div class="card-text">

                <h3>Beef Grill</h3>
                <p>by kulina app</p>
                <div class="flex">
                  <h3 class="harga">Rp 15.000</h3>
                  <div class="card-btn"><Addtocart/></div>
                </div>
                </div>
              </div>

              <div class= "card">
                <div class="card-image05"> </div>
                <div class="card-text">

                <h3>Kepiting SaosTiram</h3>
                <p>by kulina app</p>
                <div class="flex">
                <h3 class="harga">Rp 25.000</h3>
                <div class="card-btn"><Addtocart/></div>
                </div>
                </div>
              </div>
              

        </div>
      </body>

        </div>
    )
  }
}

export default App ;
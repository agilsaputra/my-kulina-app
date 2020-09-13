import React, {Component} from 'react';
import "./App.css";
import styled from 'styled-components' ;
import SimpleReactCalendar from 'simple-react-calendar'




const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "grey" : "white"};
  color: ${props => props.primary ? "white" : "grey"};

  font-size:12px;
  border-radius: 5px;
  margin: 1px;
  border: 0.5px solid grey;
  padding:6px 60px;
  color: grey;
  align-items:center;

`;

class App extends Component {
  render () {
    return (

      <div className="App">
        <p>Toogle button group</p> 
       
        <div class="button">
        <Button >Lunch </Button>
        <Button >Dinner </Button>
        </div> 
          
      <body> 
        <div class="flex-container">
              <div>1</div>

              <div>2</div>
              
              <div>3</div>  
        </div>
      </body>

        </div>
    )
  }
}

export default App ;
import React, {Component} from 'react';
import "./App.css";
import styled from 'styled-components' ;


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "grey" : "white"};
  color: ${props => props.primary ? "white" : "grey"};

  font-size: 1em;
  margin: 1px;
  padding: 0.25em 1em;
  border: 1px solid grey;
  cursor: pointer;
  border-radius: 3px;
`;


class App extends Component {
  render () {
    return (

      <div className="App">
        
        <h1> Tokopedia Tower </h1> 

        <Button >Lunch</Button>
        <Button primary>Dinner</Button> 
    
        <div class="flex-container">
              <div>1</div>
              <div>2</div>
              <div>3</div>  
        </div>
      </div>
    )
  }
}

export default App ;
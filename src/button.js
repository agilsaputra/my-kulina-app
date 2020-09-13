import React, { Component } from 'react';


class ResumeTypes extends Component {

  constructor(props) {
    super(props);
    this.state = {ClickedButton: ''};
    this.handleChange = this.handleChange.bind(this);
  } 

  handleChange(id) {

    this.setState({ClickedButton: id})
    this.props.selectedtype.bind(this, id)()

  }

  render() {


  return this.props.resumetypes.map((resumetype, selectedtype) => (
       <input type="button" 
       className={resumetype.id === this.state.ClickedButton ? "App-Button-Active" : "App-Button-Default"}
       style={{width: '25%', border: "none"}} 
       id={resumetype.id} 
       key={resumetype.id} 
       value={ resumetype.type} 
       onClick={ () => this.handleChange(resumetype.id)}/>
       //onClick={this.props.selectedtype.bind(this, resumetype.id)}/>      

    ));

  }
}

export default ResumeTypes
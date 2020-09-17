
import React from 'react';
import Modal from 'react-modal';



class ExampleApp extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false
      };
      
      this.handleOpenModal = this.handleOpenModal.bind(this);
      this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }
    
    render () {
      return (
        <div>
          <button onClick={this.handleOpenModal}>Trigger Modal</button>
          <Modal 
             isOpen={this.state.showModal}
             className="Modal"
             overlayClassName="Overlay"
           
             contentLabel="label"
          >
             
            <button onClick={this.handleCloseModal}>Close Modal</button>
           <div class="content-modal"><h3>Cek makanan yang tersedia di lokasi kamu !</h3>
           <div class="input"><input type="text" id="fname" name="fname"></input></div>
          </div></Modal>
        </div>
      );
    }
  }
  
  const props = {};
  
  export default ExampleApp;
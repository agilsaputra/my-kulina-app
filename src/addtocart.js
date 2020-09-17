
import React from 'react';
import Modal from 'react-modal';



class Cart extends React.Component {
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
          <button onClick={this.handleOpenModal}class="btn">ADD +</button>
          <Modal 
             isOpen={this.state.showModal}
             className="addtocart"
             overlayClassName="OverlayCart"
           
             contentLabel="label"
          >
             
            <button onClick={this.handleCloseModal}>Close Modal</button>
           <div class="content-cart"><h3></h3>
          </div></Modal>
        </div>
      );
    }
  }
  
  const props = {};
  
  export default Cart;
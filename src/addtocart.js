
import React from 'react';
import Modal from 'react-modal';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import IconButton from '@material-ui/core/IconButton';



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
             
            <IconButton onClick={this.handleCloseModal}><CloseOutlinedIcon/></IconButton>
           <div class="content-cart">
             <p>5 items |  Rp 125.000</p>
          </div></Modal>
        </div>
      );
    }
  }
  
  const props = {};
  
  export default Cart;
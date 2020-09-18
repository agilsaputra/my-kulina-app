
import React from 'react';
import Modal from 'react-modal';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';



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
          <IconButton onClick={this.handleOpenModal}><ExpandMoreOutlinedIcon/></IconButton>
          <Modal 
             isOpen={this.state.showModal}
             className="Modal"
             overlayClassName="Overlay"
           
             contentLabel="label"
          >
             
            <IconButton onClick={this.handleCloseModal}><CloseOutlinedIcon/></IconButton>
           <div class="content-modal"><h3>Cek makanan yang tersedia di lokasi kamu !</h3>
           <div class="input"><input type="text" id="fname" name="fname"></input></div>
          </div></Modal>
        </div>
      );
    }
  }
  
  const props = {};
  
  export default ExampleApp;
import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
/* import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import Form from "./Form"; */
import UpdateForm from "./UpdateForm";

class EditProduct extends Component {
  state = { showModal: false };

  getInitialState = () => {
    return { showModal: false };
  };
  close = () => {
    this.setState({ showModal: false });
  };
  open = () => {
    this.setState({ showModal: true });
  };
  //bsStyle="primary" bsSize="small"
  render() {
    return (
      <div>
        <button className="btn btn-sm btn-primary" onClick={this.open}>
          Edit
        </button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Enter the product details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              <UpdateForm />
            </p>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button onClick={this.close}>Close</Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditProduct;

import React, {  useState } from "react"
import { Modal, Button } from "react-bootstrap"

const ErrorModal = (props) => {

    return (
        <>

    <Modal  
    {...props} 
          centered
          backdrop="static" 
          keyboard={false}>
    <Modal.Body>
      Please fill in all required fields before submitting the form.
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.onHide}>
        Close
      </Button>
    </Modal.Footer>
    </Modal>
    </>
    
    )
    }
    
    export default ErrorModal
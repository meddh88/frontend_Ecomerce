import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router"

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { toast } from 'react-toastify';




function ModalComponent(props) {
  


    return(
    <div>
      <Modal isOpen={props.modal} toggle={()=>props.setModal(false)

      }>
        <ModalHeader toggle={()=>props.setModal(false)}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={ ()=>props.setModal(false)}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={ ()=>props.setModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  ); 
    }
export default ModalComponent;


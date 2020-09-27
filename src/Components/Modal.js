import React from "react";
import { X } from "react-feather";
import Draggable from "react-draggable";
import { ModalContext } from "../Contexts/ModalProvider";
import { Form, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const Modal = () => {
  return (
    <ModalContext.Consumer>
      {({
        windowPosition,
        hasDraggedWindowPosition,
        screenShot,
        heightWidth,
        crop,
        setCrop,
      }) => (
        <Draggable
          handle=".modal-handle"
          defaultPosition={{ x: windowPosition.x, y: windowPosition.y }}
          position={
            hasDraggedWindowPosition
              ? { x: windowPosition.x, y: windowPosition.y }
              : null
          }
        >
          <div id="modal" className="modal-window">
            <div className="modal-window-inner-border">
              <>
                <div className="modal-body">
                  <div className="modal-handle">
                    <div className="modal-close-button">
                      <X color="#5d6484" size="14" />
                    </div>
                  </div>
                  <div className="modal-content">
                    <ReactCrop
                      src={screenShot}
                      crop={crop}
                      onChange={(crop) => {
                        setCrop(crop);
                      }}
                    />

                    <Container fluid>
                      <h1>Select Code</h1>
                      <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Example textarea</Form.Label>
                          <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                      </Form>
                      <Button>oha bufonu</Button>
                    </Container>
                  </div>
                </div>
              </>
            </div>
          </div>
        </Draggable>
      )}
    </ModalContext.Consumer>
  );
};

export default Modal;

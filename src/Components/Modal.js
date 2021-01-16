import React, { useEffect, useState } from "react";
import { X } from "react-feather";
import Draggable from "react-draggable";
import { ModalContext } from "../Contexts/ModalProvider";
import { Form, Container, Button, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { recognize } from "../Ocr.js";
import { BeatLoader } from "react-spinners";
const Modal = () => {
  const [formValue, setFormValue] = useState("");
  const [pending, setPending] = useState(false);

  return (
    <ModalContext.Consumer>
      {({
        windowPosition,
        hasDraggedWindowPosition,
        screenShot,
        heightWidth,
        crop,
        setCrop,
        cropImage,
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
                    <div className="modal-close-button" onClick={(event) => {
                      let element = document.getElementById('modal')
                      element.parentNode.removeChild(element);
                    }}>
                      <X color="#5d6484" size="14" />
                    </div>
                  </div>
                  <div className="modal-content">
                    <h1>Code Buddy</h1>
                    <ReactCrop
                      style={{
                        width: heightWidth["width"],
                        height: heightWidth["height"],
                      }}
                      src={screenShot}
                      crop={crop}
                      onChange={(crop) => {
                        setCrop(crop);
                      }}
                      onComplete={(crop, pixelCrop) => {
                        console.log(crop, pixelCrop);
                      }}
                    />

                    <Container fluid>
                      <Form>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Control
                            as="textarea"
                            rows="5"
                            value={formValue}
                            onChange={(e) => {
                              setFormValue(e.target.value);
                            }}
                          />
                        </Form.Group>
                      </Form>
                      <Row>
                        <Col xs={5}>
                          <Button
                            disabled={pending}
                            onClick={() => {
                              setPending(true);
                              recognize(
                                cropImage(screenShot, crop, heightWidth),
                                setFormValue,
                                setPending
                              );
                            }}
                          >
                            Submit
                          </Button>
                        </Col>
                        <Col xs={2}>
                          {pending ? <BeatLoader color={"#e84118"} /> : ""}
                        </Col>
                        <Col xs={5}></Col>
                      </Row>
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

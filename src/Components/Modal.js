import React from "react";
import { X } from "react-feather";
import Draggable from "react-draggable";
import { ModalContext } from "../Contexts/ModalProvider";
import { Form, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { recognize } from "../Ocr.js";

export function image64toCanvasRef(canvasRef, image64, pixelCrop) {
  const canvas = canvasRef; // document.createElement('canvas');
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  const ctx = canvas.getContext("2d");
  const image = new Image();
  image.src = image64;
  image.onload = function () {
    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );
  };
}

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
                    <h1>Please Select Code</h1>
                    <ReactCrop
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
                          <Form.Control as="textarea" rows="5" />
                        </Form.Group>
                      </Form>
                      <Button onClick={() => recognize(screenShot)}>
                        oha bufonu
                      </Button>
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

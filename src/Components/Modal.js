import React from "react";
import { X } from "react-feather";
import Draggable from "react-draggable";
import { ModalContext } from "../Contexts/ModalProvider";

const Modal = () => {
  const addPx = async (initial, toAdd) => {
    console.log(initial);
    let num;
    num = parseInt(initial.slice(0, -2));
    num += toAdd;
    let toReturn = num.toString() + "px";

    return toReturn;
  };
  return (
    <ModalContext.Consumer>
      {({
        windowPosition,
        hasDraggedWindowPosition,
        screenShot,
        heightWidth,
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
            <div
              className="modal-window-inner-border"
              style={{
                transform: windowPosition,
                height: addPx(heightWidth.height, 20),
              }}
            >
              <>
                <div className="modal-body">
                  <div className="modal-handle">
                    <div className="modal-close-button">
                      <X color="#5d6484" size="14" />
                    </div>
                  </div>
                  <div
                    className="modal-content"
                    style={{
                      height: addPx(heightWidth.height, 15),
                    }}
                  >
                    <img
                      className="ohaa"
                      src={screenShot}
                      style={{
                        height: heightWidth.height,
                        width: heightWidth.width,
                      }}
                    />
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

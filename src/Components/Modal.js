import React from 'react';
import { X } from 'react-feather';
import Draggable from 'react-draggable';
import { ModalContext } from '../Contexts/ModalProvider';


const addPx = (initial, toAdd) => {

  console.log(initial);
  let num;
  num = parseInt(initial.slice(0,-2))
  num += toAdd
  let toReturn = num.toString()+"px";

  return toReturn

}

const Modal = () => {
  const addPx = async (initial, toAdd) => {
  

    console.log(initial);
    let num;
    num = parseInt(initial.slice(0,-2))
    num += toAdd
    let toReturn = num.toString()+"px";
  
    return toReturn
  
  }
  return (
    <ModalContext.Consumer>
      {({ windowPosition, hasDraggedWindowPosition, screenShot, heightWidth}) => (
        <Draggable
          handle=".modal-handle"
          defaultPosition={{x: windowPosition.x, y: windowPosition.y}}
          position={hasDraggedWindowPosition ? { x: windowPosition.x, y: windowPosition.y } : null}
        >
          <div id="modal" className="modal-window" style={{
            transform: windowPosition, height:addPx(heightWidth[0], 100), width:addPx(heightWidth[1], 100)
        }}>
            <div className="modal-window-inner-border">
                <>
                  <div className="modal-body">
                    <div className="modal-handle">
                      <div className="modal-close-button">
                        <X color="#5d6484" size="14" />
                      </div>
                    </div>
                    <div className="modal-content">
                    <img src={screenShot} style={{height:heightWidth[0], width:heightWidth[1]}}/>
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

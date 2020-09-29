import React, { useEffect, useState } from "react";
import useWindowPosition from "../Hooks/useWindowPosition";
import {cropImage} from "./cropImage"

export const ModalContext = React.createContext({});

const styleSize = (a) => parseInt(a.slice(0,-2))

const ModalProvider = ({ children }) => {
  const { windowPosition } = useWindowPosition();
  const [screenShot, setScreenShot] = useState(undefined);
  const [heightWidth, setHeightWidth] = useState({});
  const [crop, setCrop] = useState({
    unit: "px", // default, can be 'px' or '%'
    x: 0,
    y: 0,
  });
  function getExtensionId() {
    window.postMessage({ type: "GET_EXTENSION_ID" }, "*");
  }

  function getScreenShot() {
    let video = document.getElementsByClassName("video-stream")[0];
    let canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    let context = canvas.getContext("2d");

    let image = new Image();
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    image.src = canvas.toDataURL("image/jpeg", 1.0);
    setHeightWidth({ height: video.style.height, width: video.style.width ,
    factorHeight: canvas.height/styleSize(video.style.height), 
    factorWidth: canvas.width/styleSize(video.style.width)});

    return image.src;
  }

  useEffect(() => {
    // Set up event listeners from Content script
    setScreenShot(getScreenShot());

    window.addEventListener("message", function (event) {});
  }, []);

  return (
    <ModalContext.Provider
      value={{
        screenShot,
        windowPosition,
        heightWidth,
        crop,
        setCrop,
        cropImage
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

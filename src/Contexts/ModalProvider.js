import React, { useEffect, useState } from "react";
import useWindowPosition from "../Hooks/useWindowPosition";
import {cropImage} from "./cropImage"

export const ModalContext = React.createContext({});

const ModalProvider = ({ children }) => {
  const { windowPosition } = useWindowPosition();
  const [extensionId, setExtensionId] = useState(undefined);
  const [screenShot, setScreenShot] = useState(undefined);
  const [heightWidth, setHeightWidth] = useState({});
  const [crop, setCrop] = useState({
    unit: "px", // default, can be 'px' or '%'
    x: 130,
    y: 50,
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
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    setHeightWidth({ height: video.style.height, width: video.style.width });
    let image = document.createElement("a");
    image.download = "snap-" + video.currentTime + ".png";
    image.href = canvas.toDataURL("image/jpeg", 1.0);
    console.log("Baban");
    window.postMessage({ type: "GET_SCREENSHOT", myMessage: image.href }, "*");

    return image.href;
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

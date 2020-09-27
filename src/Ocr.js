import Tesseract from "tesseract.js";

function recognize(img, setter) {
  Tesseract.recognize(img, "eng", { logger: (m) => console.log(m) }).then(
    ({ data: { text } }) => {
      console.log(text);
      setter(text)
    }
  );
}

export { recognize };

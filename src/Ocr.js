import Tesseract from "tesseract.js";

function recognize(img, setter, setPending) {
  // Todo Remove console log
  Tesseract.recognize(img, "eng", {
    logger: (m) => console.log(m.progress),
  }).then(({ data: { text } }) => {
    console.log(text);
    setter(text);
    setPending(false);
  });
}

export { recognize };

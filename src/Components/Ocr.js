import Tesseract from 'tesseract.js';


function recognize(img){
    Tesseract.recognize(
        img,
        'eng',
        { logger: m => console.log(m) }
      ).then(({ data: { text } }) => {
        console.log(text);
        document.getElementById("Output").value = text
      })

}

export {recognize}

import React from "react";
// import HTMLFlipBook from "react-pageflip";
// import { useCallback, useRef } from "react";

import { pdfjs} from "react-pdf";
// import pdfFile from "../assets/Java.pdf";
// import "./Flip.scss";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;


/* const PdfPage = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div ref={ref}>
      <Document file={pdfFile} >
        <Page pageNumber={pageNumber} width={595} />
      </Document>
    </div>
  );
});

const BlankCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2 styles={{ backgroundColor: "red" }}>{props.children}</h2>
      </div>
    </div>
  );
});

const PageCover = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content" >
        <Document file={pdfFile}>
          <Page pageNumber={pageNumber} width={595} />
        </Document>
      </div>
    </div>
  );
}); */


function PdfToImage() {
  return (
    <div>
      
    </div>
  )
}


export default PdfToImage;


//must install all the below dependencies 
/* npm i @react-pdf/renderer
npm i react-dom
npm i react-pageflip
npm i react-pdf
npm i react-pdf-to-image
npm i react-scripts
npm install worker-loader --save
npm cache clean --force
npm start
npm install sass...
npm start 
npm install pdfjs-dist react-pageflip

*/
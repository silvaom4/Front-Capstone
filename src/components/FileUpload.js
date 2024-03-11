import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import pdfToText from 'react-pdftotext';
import { Button } from "reactstrap";


const FileUpload = ( {newFile, newFileName} ) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      newFileName(acceptedFiles[0].name)
      if (acceptedFiles) {
        pdfToText(acceptedFiles[0])
          .then((text) =>{
            setUploadedFiles(text)
            newFile(text);
          } )
          .catch((error) => console.error("Failed to extract text from pdf"));
      }
    },
  });
//TO DO : Customize and Style this Drag and Drop to Upload box as you want🧑‍💻😊
  return (
    <div id='UploadFileBox'{...getRootProps()}>
        {/* <h1 className="text-muted">
            File Upload
        </h1> */}
      <input className="is-valid" {...getInputProps()} />
      <h6>Drag and drop PDF/TXT here or click to browse.</h6>
    </div>
  );
};
export default FileUpload;
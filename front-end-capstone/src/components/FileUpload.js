import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import pdfToText from 'react-pdftotext';
import { Button } from "reactstrap";


const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
        console.log(acceptedFiles[0]);
      if (acceptedFiles) {
        pdfToText(acceptedFiles[0])
          .then((text) => setUploadedFiles(text))
          .catch((error) => console.error("Failed to extract text from pdf"));
      }
      console.log(uploadedFiles);
    },
  });
//TO DO : Customize and Style this Drag and Drop to Upload box as you want🧑‍💻😊
  return (
    <div {...getRootProps()}>
        <h1>
            File Upload
        </h1>
      <input className="is-valid" {...getInputProps()} />
      <Button color="primary" outline size="lg">Drag and drop files here or click to browse.</Button>
    
    </div>
  );
};
export default FileUpload;
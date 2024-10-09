import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import "../Admin.css";
//TODO agregar videos y reordenamiento de imagenes
export function DropZone({ props }) {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    noDragEventsBubbling: true,
    accept: {
      "image/*": [],
      "video/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles((prevState) => [
        ...prevState,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

  const thumbs = files.map((file) => (
    <div className="thumb" key={file.name}>
      <div className="thumbInner">
        <img
          src={file.preview}
          className="img"
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{
          border: "2px dashed #007bff",
          borderRadius: "5px",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        <p>{isDragActive ? 'Soltá archivos aquí' : `Arrastra o hace click para agregar imagenes`}</p>
      </div>
      <aside className="thumbsContainer">{thumbs}</aside>
      {(files && files.length && (
        <Button
          onClick={() => {
            props.fileUploadHandler(files);
            setFiles([]);
          }}
        >
          Agregar archivos
        </Button>
      )) ||
        null}
    </section>
  );
}

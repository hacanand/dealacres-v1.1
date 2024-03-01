
import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';


const FileDropzone = ({ onFilesDrop,description }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    if (onFilesDrop) {
      onFilesDrop([...acceptedFiles]);
    }
  }, [onFilesDrop]);

  const removeFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*', // Accept only image files
  });

  return (
    <div>
      <div {...getRootProps()} className='bg-[#e6f1f8] px-16 flex flex-col items-center justify-center'>
        <input {...getInputProps()} />
        <Image src={'/propertyListing/assets/upload.png'} width={60} height={60} className='mt-10' />
        <p className='font-bold'>{isDragActive ? 'Drop the images here' : 'Drag & drop Image here'}</p>
        <p className='text-xs'>{description}</p>
        <button className='bg-blue-600 rounded-md px-6 py-1 font-bold text-white mt-4 mb-8'>Upload</button>
      </div>
      <div>
        {selectedFiles.map((file, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <img src={URL.createObjectURL(file)} alt={`Image ${index}`} style={{ maxWidth: '100%', maxHeight: '100px' }} />
            <button onClick={() => removeFile(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileDropzone;

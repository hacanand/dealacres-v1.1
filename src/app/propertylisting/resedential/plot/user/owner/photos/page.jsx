'use client';
import Navigation from '@/components/propertyListing/Navigation/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import FileDropzone from '@/components/propertyListing/FileDropZone';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState } from 'react';
import AddMedia from '@/components/propertyListing/common/AddMedia';
const Page = () => {

    const [droppedFiles, setDroppedFiles] = useState([]);

    const handleFilesDrop = (acceptedFiles) => {
      
      setDroppedFiles(acceptedFiles);
    };
  
    const isFilesDropped = () => {
      return droppedFiles.length > 0;
    };
    

  return (
<AddMedia/>
  );
};

export default Page;

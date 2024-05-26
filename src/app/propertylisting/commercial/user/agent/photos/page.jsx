'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import FileDropzone from '@/components/propertyListing/FileDropZone';
import NavigationBroker from '@/components/propertyListing/Navigation/NavigationBroker';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AddMedia from '@/components/propertyListing/common/AddMedia';
const Page = () => {

   
    const [droppedFiles, setDroppedFiles] = useState([]);


    const handleFilesDrop = (acceptedFiles) => {
        setDroppedFiles(acceptedFiles);
    };

    const isFilesDropped = () => {
        return droppedFiles.length > 0;
    }


    return (
    <AddMedia mutlistage to={"pricing"}/>
    );
};

export default Page;

'use client';
import NavigationBroker from '@/components/propertyListing/Navigation/NavigationBroker';
import Image from 'next/image';
import Link from 'next/link';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState } from 'react';

import FileDropzone from '@/components/propertyListing/FileDropZone';
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
     <AddMedia multistage to="pricing"/>
    )
};

export default Page;

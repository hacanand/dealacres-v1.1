'use client';

import NavigationBroker from "@/components/propertyListing/Navigation/NavigationBroker";

import Image from "next/image";
import AmenitiesList from '@/components/propertyListing/Amenities';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import FileDropzone from "@/components/propertyListing/FileDropZone";
import { propertyFacing } from "@/components/propertyListing/constants";
import Button from "@/components/propertyListing/Button/Button";
import Link from 'next/link';
import { useState } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AmenitiesSection from "@/components/propertyListing/common/AmenitiesSection";



const Page = () => {
    
    const [selectedPropertyFacing, setSelectedPropertyFacing] = useState([]);
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const areFieldsFilled = selectedPropertyFacing.length > 0 || uploadedFiles.length > 0;

    const handleFilesDrop = (acceptedFiles) => {
        console.log('Dropped files:', acceptedFiles);
        setUploadedFiles(acceptedFiles);
    };

    const handlePropertyFacingChange = (face) => {
        setSelectedPropertyFacing((prevFacing) => {
            if (prevFacing.includes(face)) {
                return prevFacing.filter((facing) => facing !== face);
            } else {
                return [...prevFacing, face];
            }
        });
    };

    return (
        <AmenitiesSection to={'builder-details'}/>
    );

}


export default Page



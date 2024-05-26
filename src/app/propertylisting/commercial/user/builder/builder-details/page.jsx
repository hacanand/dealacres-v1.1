'use client';

import React from 'react'
import Image from 'next/image'

import { useState } from 'react';
import ContactNumber from '@/components/propertyListing/ContactNumber';
import FeedbackModal from "@/components/propertyListing/FeedbackModal";
import PostModal from '@/components/propertyListing/PostModal';
import PersonalDetails from '@/components/propertyListing/common/PersonalDetails';

const Page = () => {
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
    const [isGDPRChecked, setIsGDPRChecked] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [companyAddress1, setCompanyAddress1] = useState('');
    const [city, setCity] = useState('');
    const [companyDescription, setCompanyDescription] = useState('')
    const [contactNumber, setContactNumber] = useState('');
    

    const openPostModal = () => {
        setIsPostModalOpen(true);
    };

    const closePostModal = () => {
        setIsPostModalOpen(false);
    };
    const handlePostSubmit = (e) => {
        e.preventDefault();
        openFeedbackModal();
        closePostModal();
    };
    const openFeedbackModal = () => {
        setIsFeedbackModalOpen(true);
    };

    const closeFeedbackModal = () => {
        setIsFeedbackModalOpen(false);
    };
    const handleFeedbackSubmit = (e) => {
        e.preventDefault();

    };
    const isContinueButtonDisabled = !isGDPRChecked || companyName.trim() === '' || companyAddress1.trim() === ''|| companyDescription.trim() === '' ||
    contactNumber.trim() === '';;

    return (
<PersonalDetails isLastStage />
    )
}

export default Page
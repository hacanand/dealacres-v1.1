'use client'
import React from 'react'
import styles from './blogsidebar.module.css'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
const TopicButton = ({ label, size }) => {
  const router = useRouter();
  
   
  const handleClick = () => {
    const topic = label.toLowerCase().replace(/\s+/g, '-');
    router.push(`/blog?category=${topic}`);
  }
  return (
    <button className={`
    w-full
    text-center uppercase ${styles.topicButton} p-2 rounded-[20px] whitespace-normal break-words
    ${size === 'big' ? 'col-span-2' : 'col-span-1'}
    `} onClick={handleClick}>
      {label}
    </button>
  )
}

export default TopicButton

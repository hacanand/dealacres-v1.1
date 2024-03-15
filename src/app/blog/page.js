import React from 'react'
import Blogcards from '@/components/blogcards/Blogcards'
import Featured from '@/components/Featured/Featured'
import Guides from '@/components/Guides/Guides'
import NewBlogHead from '@/components/allBlog/NewBlogHead'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className='bg-white '>
    {/* <Bloghead heading='Finanace' content='Something Something'/> */}
    <NewBlogHead/>
     
    
    <div className='p-4  md:p-6 max-w-screen-xl mx-auto '>
    <Featured/>
    <Blogcards/>
    <Blogcards/>
    <div style={{ position: 'relative', width: '100%', height: '20vh',marginBottom:"30px" }}>
    <Image src='/all blog/SellerManual.png' alt='seller manual'  layout='fill'
        objectFit='cover' />
    </div>
    <Blogcards/>
    <Blogcards/>
    <div style={{ position: 'relative', width: '100%', height: '20vh',marginBottom:"30px" }}>
    <Image src='/all blog/SellerManual.png' alt='seller manual'  layout='fill'
        objectFit='cover' />
    </div>
    <Blogcards/>
      <Guides/>
    </div>
     </div>
  )
}

export default Blog
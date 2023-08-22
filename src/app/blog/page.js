import Bloghead from '@/components/bloghead/Bloghead'
import React from 'react'
import Blogcards from '@/components/blogcards/Blogcards'
import Featured from '@/components/Featured/Featured'
import Guides from '@/components/Guides/Guides'
const Blog = () => {
  return (
    <div className='bg-white'>
    <Bloghead heading='Finanace' content='Something Something'/>
    <Featured/>
    <Blogcards/>
    <Blogcards/>
    <Blogcards/>
    <Blogcards/>
    <Blogcards/>
    <Guides/>
     </div>
  )
}

export default Blog
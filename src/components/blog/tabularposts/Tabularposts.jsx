import React from 'react'
import TableHeader from './TableHeader'
// import posts from '@/data/allPostsData.json'
// import articles from '@/data/articlesData.json'
import PostCard from '../PostCard'
import ArticleCard from './ArticleCard'
import Heading from '../Heading'
import styles from './tabular.module.css'

const Tabularposts = ({
  posts,
  articles
}) => {
  return (
    <div className='my-4 bg-[#edf6f7] overflow-x-auto'>

      {/* <Heading heading='Read More' /> */}
      <div className="grid grid-cols-[repeat(3,90%)] md:grid-cols-3">
            <TableHeader header='Popular Posts' />
            <TableHeader header='Latest Posts' />
            <TableHeader header='Relevant Articles' />

      </div>

      
      <div className='  grid grid-cols-3 max-md:w-[270%]    max-h-[550px] overflow-y-auto   '>
        <div className='max-md:min-w-[90%] my-2  md:col-span-1 '>
          {/* <div>

            <TableHeader header='Popular Posts' />
          </div> */}
          <div className='bg-[#edf6f7] lg:max-h-[600px] '>
            {
              posts.map((post, index) => {
                return (
                  <PostCard key={index} title={post.title} img={post.img} />
                )
              })
            }
          </div>

        </div>

        <div className='max-md:min-w-[90%] my-2  md:col-span-1 '>
          {/* Latest Posts do some validation for grabing latest posts through date. */}

          {/* <TableHeader header='Latest Posts' /> */}
          <div className='bg-[#edf6f7] lg:max-h-[600px]'>
            {
              posts.map((post, index) => {
                return (
                  <PostCard key={index} title={post.title} img={post.img} />
                )
              })
            }
          </div>
        </div>

        <div className='max-md:min-w-[90%] my-2  md:col-span-1 '>
          {/* Relevant Articles. */}


          {/* <TableHeader header='Relevant Articles' /> */}
          <div className={`lg:max-h-[600px] 
          ${styles.articles}
          `}>

            {
              articles.map((article, index) => {
                return (
                  <ArticleCard key={index} title={article.title} img={article.img} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tabularposts

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
    <div className='my-4 bg-[#edf6f7]'>

      {/* <Heading heading='Read More' /> */}
      <div className='=  min-[820px]:grid min-[820px]:grid-cols-3 max-w-screen-2xl mx-auto'>
        <div className='my-2 px-4 min-[820px]:col-span-1 '>
          <div>

            <TableHeader header='Popular Posts' />
          </div>
          <div className='bg-[#edf6f7] min-[820px]:max-h-[600px] min-[820px]:overflow-y-scroll'>
            {
              posts.map((post, index) => {
                return (
                  <PostCard key={index} title={post.title} img={post.img} />
                )
              })
            }
          </div>

        </div>

        <div className='my-2 px-4 min-[820px]:col-span-1 '>
          {/* Latest Posts do some validation for grabing latest posts through date. */}

          <TableHeader header='Latest Posts' />
          <div className='bg-[#edf6f7] min-[820px]:max-h-[600px] min-[820px]:overflow-y-scroll'>
            {
              posts.map((post, index) => {
                return (
                  <PostCard key={index} title={post.title} img={post.img} />
                )
              })
            }
          </div>
        </div>

        <div className='my-2 px-4 min-[820px]:col-span-1 '>
          {/* Relevant Articles. */}


          <TableHeader header='Relevant Articles' />
          <div className={`min-[820px]:max-h-[600px] min-[820px]:overflow-y-scroll
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

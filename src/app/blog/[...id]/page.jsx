// data imports
import BlogSideBar from "@/components/blog/blogsidebar/BlogSidebar";
import postData from "./blogData.json"
// import topicsData from '@/data/topicsData.json'
// import allPostsData from '@/data/allPostsData.json';

// ui imports
import BlogPost from "@/components/blog/post/BlogPost";
import Tabularposts from "@/components/blog/tabularposts/Tabularposts";
import Guides from "@/components/blog/guides/Guides";


const topicsData = [
  "RENTAL",
  
  "Delhi NCR",
  
  "HOME Decor",
  
  "HELP GUIDE",
  
  "construction",
  
  "LifeSTYLE",
  
  "TRends",
  
  "CO-workation",
  
  "legal and taxation",
  
  "packers and movers",
  
  "Retail and Hospitality"
  ]

const allPostsData = [
  {
      "title": "Preparing Your Home for a Loved One with Alzheimer’s: A Caregiver’s Guide",
      "img": "article-thumb-1.jpg"
  }
  ,
  {
      "title": "Why is My House So Dusty? 5 Easy Ways to Eliminate Dust",
      "img": "article-thumb-2.webp"
  }
  ,
  {
      "title": "Preparing Your Home for a Loved One with Alzheimer’s: A Caregiver’s Guide",
      "img": "article-thumb-1.jpg"
  }
  ,
  {
      "title": "Why is My House So Dusty? 5 Easy Ways to Eliminate Dust",
      "img": "article-thumb-2.webp"
  }
  ,
  {
      "title": "Preparing Your Home for a Loved One with Alzheimer’s: A Caregiver’s Guide",
      "img": "article-thumb-1.jpg"
  }
  ,
  {
      "title": "Why is My House So Dusty? 5 Easy Ways to Eliminate Dust",
      "img": "article-thumb-2.webp"
  }
]

const articlesData = [
  {
      "title": "Solar Panels for Apartments: The Complete Guide for Renters",
      "img": "solar-panels.webp"
  },
  {
      "title": "Solar Panels for Apartments: The Complete Guide for Renters",
      "img": "solar-panels.webp"
  },
  {
      "title": "Solar Panels for Apartments: The Complete Guide for Renters",
      "img": "solar-panels.webp"
  },
  {
      "title": "Solar Panels for Apartments: The Complete Guide for Renters",
      "img": "solar-panels.webp"
  }
]

const guidesData = [
  {
      "title": "Buyer's Guide",
      "img": "buyers-guide.png",
      "theme": "orange"
  },
  {
      "title": "Seller's Guide",
      "img": "sellers-guide.png",
      "theme": "yellow"
  },
  {
      "title": "Rental Guide",
      "img": "rental-guide.png",
      "theme": "green"
  },
  {
      "title": "Home Interior",
      "img": "home-interior-guide.png",
      "theme": "purple"
  },
  {
      "title": "Home Vastu",
      "img": "home-vastu-guide.png",
      "theme": "blue"
  }
]
export default function SingleBlogPage() {





  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className='flex flex-col min-h-screen min-[960px]:grid min-[960px]:grid-cols-6'>

        <div className="min-[960px]:col-span-4 px-2 py-2">
          {/* Post Section */}
          <BlogPost postData={postData} />
        </div>

        <div className="min-[960px]:col-span-2 px-2 py-2">
          {/* Feeds section */}
          <BlogSideBar allPosts={allPostsData} topics={topicsData} />
        </div>
        
    </div>

    <Tabularposts 
    posts={allPostsData} 
    articles = {articlesData} />

    <Guides showHeading guides={guidesData}  align="center"/>

  
    </div>
  )
}



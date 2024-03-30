import PopularProjectCard from './PopularProjectCard'
import Link from 'next/link'
import { FaAngleDown, FaExternalLinkAlt } from 'react-icons/fa'

const popularProjectContentStyle = {
  width:'100%',
  display:'flex',
  flexWrap:'wrap',
  gap: '20px',
  alignItems:'center',
 margin:''
  
  
}

function PopularProjects() {
  return (
    <div style={{width:'100%',marginBottom:'1rem'}}>
      <div className="md:justify-normal flex-nowrap md:flex-wrap overflow-x-auto w-full flex gap-5 items-center" >
        <PopularProjectCard/>
        <PopularProjectCard/>
        <PopularProjectCard/>
      </div>
      <div className='w-1/2 py-1 rounded my-4 flex items-center justify-center text-white font-bold bg-blue-700 gap-2  md:mx-0 '>
        <Link className='' href='#viewMore'>More <FaAngleDown size={20} style={{display: 'inline'}}/> </Link>
       
      </div>  
    </div>
  )
}

export default PopularProjects
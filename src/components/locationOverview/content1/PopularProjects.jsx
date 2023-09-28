import PopularProjectCard from './PopularProjectCard'
import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const popularProjectContentStyle = {
  width:'100%',
  display:'flex',
  flexWrap:'wrap',
  rowGap: '2rem',
  justifyContent:'space-between',
  alignItems:'center',
  margin:'1.5rem 0 1.5rem 0',
}

function PopularProjects() {
  return (
    <div style={{width:'100%',marginBottom:'1rem'}}>
      <div style={popularProjectContentStyle}>
        <PopularProjectCard/>
        <PopularProjectCard/>
        <PopularProjectCard/>
      </div>
      <div style={{width:'100%',display:'flex',justifyContent:'flex-end',alignItems:'center',color:'#0061df'}}>
        <Link href='#viewMore'>View More <FaExternalLinkAlt style={{display:'inline'}}/></Link>
      </div>  
    </div>
  )
}

export default PopularProjects
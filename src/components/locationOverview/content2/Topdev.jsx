import styles from './topdev.module.css'
import Devcard from './Devcard'

const topdevStyle={
  width:'100%',
  display:'flex',
  flexWrap:'wrap',
  justifyContent:'center',
  alignItems:'center',
  marginTop:'1rem',
  gap: '8px'
}

function Topdev() {
  return (
    <div  className='grid grid-cols-3 gap-1 xs:gap-2 sm:gap-4 mt-4'>
      <Devcard imgSrc="/property/developerLogo.webp"/>
      <Devcard imgSrc="/property/developerLogo.webp"/>
      <Devcard imgSrc="/property/developerLogo.webp"/>
    </div>
  )
}

export default Topdev
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
    <div  className='md:!justify-normal w-full flex flex-nowrap md:flex-wrap justify-normal items-center gap-4 md:gap-2 mt-4 overflow-x-auto'>
      <Devcard imgSrc="/property/developerLogo.webp"/>
      <Devcard imgSrc="/property/developerLogo.webp"/>
      <Devcard imgSrc="/property/developerLogo.webp"/>
      <Devcard imgSrc="/property/developerLogo.webp"/>
    </div>
  )
}

export default Topdev
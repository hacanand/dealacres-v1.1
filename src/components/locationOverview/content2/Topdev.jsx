import styles from './topdev.module.css'
import Devcard from './Devcard'

const topdevStyle={
  width:'100%',
  display:'flex',
  flexWrap:'wrap',
  justifyContent:'space-between',
  alignItems:'center'
}

function Topdev() {
  return (
    <div style={topdevStyle}>
      <Devcard imgSrc="/property/developerLogo.webp"/>
      <Devcard imgSrc="/property/developerLogo.webp"/>
      <Devcard imgSrc="/property/developerLogo.webp"/>
      <Devcard imgSrc="/property/developerLogo.webp"/>
    </div>
  )
}

export default Topdev
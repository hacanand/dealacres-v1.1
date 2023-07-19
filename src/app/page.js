import Image from 'next/image'
import Header from '../components/header/Header'
import Services from '@/components/services/Services'

export default function Home() {
  return (
    <div>
      <Header/>
      <Services/>
    </div>
  )
}

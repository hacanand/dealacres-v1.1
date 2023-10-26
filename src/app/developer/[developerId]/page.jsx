import styles from './page.module.css'
import {Lato} from 'next/font/google'
import Header from '@/components/singleDeveloper/Header'
import Maincontent from '@/components/singleDeveloper/mainContent/Maincontent'
import SideContentContainer from '@/components/property/sidecontentcontainer/SideContentContainer'
import Topdev from '@/components/locationOverview/content2/Topdev'
import IntrestingReading from '@/components/locationOverview/content2/IntrestingReads'
import FAQ from '@/components/property/maincontentcontainer/FAQ'

const lato = Lato({
    subsets: ['latin'],
    weight: ['300','400','700','900']
})

const FaqData = [
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
    {Q:'Are there any metro stations near DLF Kings court?',A:'Greater Kailash metro station is near to Dlf Kings Court.'},
]

function page() {
    return(
        <>
            <Header/>
            <div style={lato.style} className={styles.singleDevPageContainer}>
                <div className={styles.singleDevPageContentContainer}>  
                    <Maincontent/>
                    <SideContentContainer title='M3M India Pvt. Ltd'/>
                </div>
                <div>
                    <h5>Top Developers in Sector 37D</h5>
                    <Topdev/>
                </div>
                <div>
                    <h5>Intresting Readings</h5>
                    <IntrestingReading/>
                </div>
                <div>
                    <h5>Frequently Asked Questions</h5>
                    <FAQ  faqdata = {FaqData} />
                </div>
            </div>
        </>
    )
}

export default page
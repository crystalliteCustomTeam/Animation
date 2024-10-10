import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Partners from './components/partners/Partners'
import Production from './components/production/Production'
import OurServices from './components/ourservices/OurServices'
import Team from './components/team/Team'
import Portfolio from './components/portfolio/portfolio'
import Packages from './components/packages/Packages'
import Casestudies from './components/casestudies/Casestudies'

import AwardWinning from './components/awardwinning/AwardWinning'
import Footer from './components/footer/Footer'

const page = () => {

    return (
        <>
            <Header />
            <Banner />
            <Partners />
            <Production />
            <OurServices />
            <Team />
            <Portfolio />
            <Packages />
            <Casestudies />

            <AwardWinning />
            <Footer />
        </>
    )
}

export default page

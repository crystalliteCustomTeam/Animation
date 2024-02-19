// Import Page Components
import Banner from '@/app/infinity-lp/component/banner/Banner';
import Logo from '@/app/infinity-lp/component/logo/Logo';
import Video from '@/app/infinity-lp/component/video/Video';
import Display from '@/app/infinity-lp/component/display/Display';
import Explainer from '@/app/infinity-lp/component/explainer/Explainer';
import Types from '@/app/infinity-lp/component/types/Types';
import Packages from '@/app/infinity-lp/component/packages/Packages';
import Statistics from '@/app/infinity-lp/component/statistics/Statistics';
import Header from '@/app/infinity-lp/component/header/Header';
import Footer from '@/app/infinity-lp/component/footer/Footer';
import Clients from '@/app/infinity-lp/component/clients/Clients';
import Work from '@/app/infinity-lp/component/work/Work';
import Streamlined from '@/app/infinity-lp/component/streamlined/Streamlined';
import Faqs from '@/app/infinity-lp/component/faqs/Faqs';
import Thinking from '@/app/infinity-lp/component/thinking/Thinking';

export default function Page() {

    return (
        <>
            <Header />
            <Banner />
            <Logo />
            <Video />
            <Streamlined />
            <Display />
            <Types />
            <Packages />
            <Statistics />
            <Work />
            <Faqs />
            <Thinking />
            <Clients />
            <Explainer />
            <Footer />
        </>
    )
}
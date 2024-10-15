import Head from "next/head";
import Image from "next/image";
// import { Container, Row, Col } from 'react-bootstrap'
// ===== CSS
import styles from "/styles/blogNew/InnerBanner.module.css"
// ===== Components
import { getSinglePost } from "../../../../lib/posts";
import BlogNavigation from "@/components/blogs-new/BlogNavigation";
import BlogsRelevant from "@/components/blogs-new/BlogsRelevant";
// ===== Images
import Client from "media/blogs/innerclient.png"
import verified from "media/blogs/verified.png"
import experience from "media/blogs/experience.png"
import BlogFaqs from "@/components/blogs-new/BlogFaqs";
import BlogArticle from "@/components/blogs-new/BlogArticle";


export async function generateMetadata({ params, searchParams }, parent) {
    // read route params
    const postData = await getSinglePost(params.postslug);
    return {
        title: postData.seo.title,
        description: postData.seo.metaDesc,
        //===== OG Tags =====
        openGraph: {
            title: postData.seo.opengraphTitle,
            description: postData.seo.metaDesc,
            url: postData.seo.opengraphUrl,
            siteName: postData.seo.opengraphSiteName,
            locale: 'en_US',
            type: postData.seo.opengraphType,
            images: "/public/images/icons/footerlogo.png",
        },
        //===== Canonical =====
        alternates: { canonical: postData.seo.canonical },
    }
}

export default async function Post({ params, searchParams }) {
    // =============== Post Data ===============
    let featuredImageUrl = "https://inhouse.cryscampus.com/wordpress/animation/wp-admin/uploads/2023/08/moz-brand-authority-768x439-1.png";

    const postData = await getSinglePost(params.postslug);
    //=============== Render ===============
    return (
        <>
            {postData && (
                <>
                    <Head>
                        <title key="title">{postData.title}</title>
                        <meta name="description" content={postData.metaDesc} key="metadesc" />
                        <meta property="og:title" content={postData.opengraphTitle} />
                        <meta key="og-description" property="og:description" content={postData.metaDesc} />
                        <meta property="og:url" content={postData.opengraphUrl} />
                        <meta property="og:type" content={postData.opengraphType} />
                        <meta property="og:locale" content="en_IN" />
                        <meta property="og:site_name" content={postData.opengraphSiteName} />
                    </Head>
                    {postData.blogDescription.schema && (
                        <>
                            <div dangerouslySetInnerHTML={{ __html: postData.blogDescription.schema }}></div>
                        </>
                    )}
                    <section className={`w-full flex items-center justify-start lg:pb-[110px] bg-none bg-no-repeat relative overflow-hidden z-1 top-[97px] pt-[35px] lg:pt-[85px]`}>
                        <div className="container">
                            <div className="grid grid-cols-12 content-center lg:gap-16 items-center">
                                <div className='col-span-12 lg:col-span-6 flex flex-col items-start py-[35px]'>
                                    <div className={styles.blogTopDes}>
                                        <h3 className="text-[#FF2D4A] text-[16px] md:text-[20px] w-full font-light font-sans leading-[30px] tracking-wider text-start mt-3 mb-1">{postData.categories.nodes[0].name}</h3>
                                        <h1 className='text-white text-[28px] lg:text-[35px] xl:text-[50px] font-[600] poppins font-sans md:leading-[60px] text-start'>{postData.title}</h1>
                                        {postData.blogDescription.topDescription && (
                                            <>
                                                <p dangerouslySetInnerHTML={{ __html: postData.blogDescription.topDescription }} className="text-[14px] xl:text-[16px] font-normal font-sans leading-normal tracking-wider text-justify pt-3 pb-1 text-white text-opacity-90 sm:text-[17px] border-b-2 border-gray-500"></p>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div className="col-span-12 lg:col-span-6">
                                    {postData.featuredImage ?
                                        (
                                            <Image quality={75} src={`https://inhouse.cryscampus.com/wordpress/animation/wp-content/uploads/${postData.featuredImage.node.mediaDetails.file}`} alt="BitsWits" width={736} height={450} className="img-fluid" />
                                        )
                                        :
                                        (
                                            <Image quality={75} src={featuredImageUrl} alt="BitsWits" width={736} height={450} className="img-fluid" />
                                        )
                                    }
                                </div>
                            </div>
                            <div className={`md:p-5 p-4 bg-[#383737] mt-10 rounded-3xl`}>
                                <div className={`lg:grid md:grid-cols-12 flex flex-col-reverse flex-wrap items-center gap-5`}>
                                    <div className="lg:col-span-2">
                                        <Image src={Client} alt='Bitswits' className='object-fill object-center lg:mx-0 mx-auto' />
                                    </div>
                                    <div className="lg:col-span-9">
                                        <div>
                                            <ul className='list-outside list-disc marker:text-2xl flex md:flex-nowrap flex-wrap pl-5 items-center gap-x-12 mb-3'>
                                                <li>
                                                    <p className='font-sans mb-0'>By <span>{postData.author.node.name}</span></p>
                                                </li>
                                                <li>
                                                    <p className='flex items-center gap-2 text-[#005dff] font-sans'> Verified Expert In Development
                                                        <Image src={verified} alt='Bitswits' width={16} height={16} className='ms-3' />
                                                    </p>
                                                </li>
                                                <li className={``}>
                                                    <p className='font-sans mb-0 flex items-center'>
                                                        <Image src={experience} alt='Bitswits' width={16} height={16} className='me-3' />
                                                        3 Years Of Experience
                                                    </p>
                                                </li>
                                            </ul>

                                            <div className={styles.desc}>
                                                <p className='font-sans text-[18px] leading-[35px] font-[300]'>{postData.author.node.description}</p>
                                            </div>

                                            <div className={`flex items-center gap-5 pt-5 ${styles.expertise}`}>
                                                <span className={`${styles.expertisePara} font-sans`}>EXPERTISE</span>
                                                {postData.author.node.userexperties.experties.map((experties, index) => (
                                                    <span key={index} className={`font-sans text-black ${styles.btn}`}>
                                                        {experties}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={`mt-[40px] ${styles.articleSec}`} id="leftcontent">
                        <div className="container">
                            <div className="lg:grid lg:grid-cols-12 flex flex-col-reverse flex-wrap lg:gap-5 gap-10">
                                <div className="lg:col-span-8">
                                    <div dangerouslySetInnerHTML={{ __html: postData.content }} className="font-sans"></div>
                                    {/* <BlogFaqs faqData={postData.blogDescription.faq} /> */}
                                </div>
                                <div className="lg:col-span-4">
                                    <div className={styles.sidebar}>
                                        <BlogNavigation postData={postData} />
                                        <BlogsRelevant postData={postData} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <BlogArticle />
                </>
            )}
        </>
    );
}
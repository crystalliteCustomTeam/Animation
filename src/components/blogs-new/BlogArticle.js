import Link from 'next/link';
import Image from 'next/image';
import styles from "../../../styles/blogNew/BlogContent.module.css"
//
import { getPostList } from "../../../lib/posts";
// Images
// import Arrow from "media/newblogs/blogArrow.png"
import verifies from "media/blogs/verified.png"
import profile from "media/blogs/author.png"
import FeaturedImage from './FeaturedImage';
import { FaArrowRightLong } from 'react-icons/fa6';


const BlogArticle = async () => {

    const posts = await getPostList();

    return (
        <>
            <section className={styles.blogcontent}>
                <div className='container'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12'>
                            <h2 className={`font-sans ${styles.heading}`}>Read Next</h2>
                        </div>
                        <div className='col-span-12'>
                            <div className='mt-md-4'>
                                <div className='grid grid-cols-12 gy-3'>
                                    {
                                        posts.nodes.map((post) => (
                                            <div className='col-span-12 md:col-span-6 lg:col-span-4 p-2'>
                                                <div className={styles.card}>
                                                    <FeaturedImage post={post} className="w-100" />
                                                    <div className={styles.cardContent}>
                                                        {
                                                            post.categories.nodes.map((category) => (
                                                                <p className={`font-sans ${styles.categoriesPara}`} key={category.slug}>
                                                                    {category.name}
                                                                </p>
                                                            ))
                                                        }
                                                        <Link href={`/blog/${post.slug}`}>
                                                            <h5 className='poppins text-black text-[22px] font-[500] leading-[30px]'>{post.title}</h5>
                                                        </Link>
                                                        <div dangerouslySetInnerHTML={{ __html: post.excerpt }} className={styles.blogDesciption}>
                                                        </div>
                                                        <div className={styles.btn}>
                                                            <Link href={`/blog/${post.slug}`} className='text-black flex items-center gap-2 font-sans'>
                                                                Read More
                                                                <FaArrowRightLong />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className={styles.cardBottom}>
                                                        <div className={styles.cardBottomImg}>
                                                            <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid' />
                                                        </div>
                                                        <div className={styles.cardbottomContent}>
                                                            <div className='flex items-center gap-2 pb-1'>
                                                                <h3 className='font-sans text-black'> {post.author.node.name}
                                                                </h3>
                                                                <Image src={verifies} alt='bitswits' width={13} height={13} />
                                                            </div>
                                                            <p className='font-sans text-black'>{post.author.node.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogArticle

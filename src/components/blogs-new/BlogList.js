"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "@/styles/blogNew/BlogContent.module.css"
//===== Components
import { getPostList } from "@/lib/posts";
import FeaturedImage from "@/src/components/blogs-new/FeaturedImage";
//===== Images
import verifies from "media/blogs/verified.png"
import profile from "media/blogs/author.png"
import { FaArrowRightLong } from 'react-icons/fa6';


const BlogList = () => {
    const [posts, setPosts] = useState({ nodes: [], pageInfo: {} });
    const [buttonText, setButtonText] = useState('Load More');
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);

    const fetchPosts = async (endCursor = null) => {
        try {
            setLoading(true);
            const newPosts = await getPostList(endCursor);
            return newPosts;
        } catch (error) {
            console.error("Error fetching posts:", error);
            return { nodes: [], pageInfo: {} };
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        (async () => {
            const initialPosts = await fetchPosts();
            setPosts(initialPosts);
            setInitialLoad(false);
        })();
    }, []);

    const handleLoadMore = async () => {
        setButtonText('Loading...');
        setButtonDisabled(true);

        const morePosts = await fetchPosts(posts.pageInfo?.endCursor);

        setPosts((prevPosts) => ({
            pageInfo: morePosts.pageInfo,
            nodes: [...prevPosts.nodes, ...morePosts.nodes],
        }));

        if (morePosts.pageInfo?.hasNextPage) {
            setButtonText('Load More');
            setButtonDisabled(false);
        } else {
            setButtonText('No more posts to load');
            setButtonDisabled(true);
        }
    };
    // ===========Search Code===========

    return (
        <>
            <section className={`!pt-0 ${styles.blogcontent}`}>
                <div className='container'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12'>
                            <div className={`flex items-center justify-center ${styles.form} mb-4 lg:mb-16`}>
                                <form>
                                    <select className={styles.search}>
                                        <option defaultValue="All">All</option>
                                        <option value="Blockchain" className='font-sans'>Blockchain</option>
                                        <option value="eCommerce" className='font-sans'>eCommerce</option>
                                        <option value="General" className='font-sans'>General</option>
                                        <option value="Mobile Application" className='font-sans'>Mobile Application</option>
                                        <option value="News" className='font-sans'>News</option>
                                    </select>
                                    <input type="text" />
                                    <button type='button' className='font-sans'>Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12'>
                            <div className={`mb-5 lg:mb-10 ${styles.tabs}`}>
                                <ul className='pt-5'>
                                    <li className={`${styles.active} font-sans`}>
                                        All
                                    </li>
                                    <li className={`${styles.nonActive} font-sans`}>
                                        Blockchain
                                    </li>
                                    <li className={`${styles.nonActive} font-sans`}>
                                        eCommerce
                                    </li>
                                    <li className={`${styles.nonActive} font-sans`}>
                                        General
                                    </li>
                                    <li className={`${styles.nonActive} font-sans`}>
                                        Mobile Application
                                    </li>
                                    <li className={`${styles.nonActive} font-sans`}>
                                        News
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='mt-md-4 col-span-12'>
                            <div className='grid grid-cols-12 gy-3'>
                                {(loading && initialLoad) && (
                                    <div className='col-span-12 text-center'>
                                        <div className={styles.loader}>
                                            <div className={styles.loaderRoller}>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            <div className={styles.loaderTxt}>Loading...</div>
                                        </div>
                                    </div>
                                )}
                                {
                                    posts.nodes.map((post, i) => (
                                        <div key={i} className='p-2 col-span-12 md:col-span-6 lg:col-span-4'>
                                            <div className={styles.card}>
                                                <FeaturedImage post={post} className="w-100" />
                                                <div className={styles.cardContent}>
                                                    <div>
                                                        {
                                                            post.categories.nodes.map((category) => (
                                                                <p className={`block text-[#F32F53] font-semibold mr-md:text-base text-sm leading-normal capitalize font-sans pt-4 mb-1`} key={category.slug}>
                                                                    {category.name}
                                                                </p>
                                                            ))
                                                        }
                                                        <Link href={`/blog/${post.slug}`}>
                                                            <h5 className='md:text-[20px] text-base leading-normal font-normal text-[#000] font-sans'>{post.title}</h5>
                                                        </Link>
                                                    </div>
                                                    <div dangerouslySetInnerHTML={{ __html: post.excerpt }} className={styles.blogDesciption}>
                                                    </div>
                                                    <div className={styles.btn}>
                                                        <Link href={`/blog/${post.slug}`} className='text-black font-sans flex items-center gap-3'>
                                                            Read More
                                                            <FaArrowRightLong />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className={styles.cardBottom}>
                                                    <div className='w-[32%]'>
                                                        <Image src={profile} width={50} height={50} alt='Bitswits' className='img-fluid w-100' />
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
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12'>
                            <button
                                className={`font-sans ${styles.loadMore} border-2`}
                                onClick={handleLoadMore}
                                disabled={buttonDisabled}
                            >
                                {buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogList
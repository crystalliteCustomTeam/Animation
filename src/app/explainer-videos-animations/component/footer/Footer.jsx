"use client"
import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import styles from '@/app/explainer-videos-animations/component/footer/footer.module.css';
// Import Components
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
// ==== Images 
import payment from "media/banner/payment.png"
import top from "media/banner/top.png"
import facebook from "media/icons/fb.png";
import twitter from "media/icons/x.png";
import youtube from "media/icons/youtube.png";
import instagram from "media/icons/insta.png";
import linkedin from "media/icons/linkedin.png";
import vimeo from "media/icons/vemio.png";

const socialLinks = [
    {
        icon: facebook,
        link: "https://www.facebook.com/infinityanimationsofficial"
    },
    {
        icon: twitter,
        link: "https://twitter.com/infinityan_/"
    },
    {
        icon: instagram,
        link: "https://www.instagram.com/infinityanimationsofficials"
    },
    {
        icon: linkedin,
        link: "https://www.linkedin.com/company/infinity-animations/"
    },
    {
        icon: youtube,
        link: "https://www.youtube.com/@Infinity-Animations"
    },
    {
        icon: vimeo,
        link: "https://www.vimeo.com/infinityanimations"
    },
]

const Video = () => {
    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])

    const [score, setScore] = useState('Submit');

    const router = usePathname();

    const currentRoute = router.pathname;
    const [pagenewurl, setPagenewurl] = useState('');
    useEffect(() => {
        const pagenewurl = window.location.href;
        console.log(pagenewurl);
        setPagenewurl(pagenewurl);
    }, []);

    const handleSubmit = async (e) => {



        e.preventDefault()
        var currentdate = new Date().toLocaleString() + ''

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        }

        const JSONdata = JSON.stringify(data)

        setScore('Sending Data');
        console.log(JSONdata);


        fetch('/api/email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`)
            if (res.status === 200) {
                console.log(`Response Successed ${res}`)
            }
        })



        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            "Brand": "Infinity Animations",
            "Page": pagenewurl,
            "Date": currentdate,
            "Time": currentdate,
            "JSON": JSONdata,

        });

        await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
        const { pathname } = router;
        if (pathname == pathname) {
            window.location.href = '/thank-you';
        }

    }


    return (
        <>
            <section className={`newcon ${styles.touch}`}>
                <div className={`container mx-auto ${styles.pointer} `}>
                    <div className={`md:grid md:grid-cols-2 items-center ${styles.world}`}>
                        <div>
                            <h3 className={styles.touchnow}>Get In <span className="colorred2">Touch</span> Now!</h3>
                            <p className={styles.wordsmosth}>Its High Time to Showcase
                                Your
                                Store to the World</p>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.form2} >
                                    <input type="text" minLength="4" required name="name" className="form-control" placeholder="Enter Your Name" />
                                    <input type="email" required name="email" className="form-control" placeholder="Enter Your Email" />
                                </div>
                                <div className={styles.form2}>
                                    <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" className="form-control" placeholder="Enter Your Number" />
                                </div>
                                <div>
                                    <textarea name="message" className={styles.megg} id="exampleFormControlTextarea1" placeholder="Type Message" rows="5"></textarea>
                                    <input type="submit" value="Get Started" className={styles.showcas} />
                                </div>
                            </form>
                        </div>
                        <div className={styles.newtab}>
                            <ul className={styles.newfight}>
                                <li className="fontmontserratregular text-white pb-3"><IoCall /><a className="text-white" href="tel:833-666-6689">  833-666-6689</a></li>
                                <li className="fontmontserratregular text-white pb-3"><MdEmail /><a className="text-white" href="mailto:queries@infinityanimations.com">  queries@infinityanimations.com</a></li>
                                <li className="fontmontserratregular text-white pb-3"><FaGlobe /><a className="text-white" href="https://infinityanimations.com/">  www.infinityanimationspro.com</a></li>
                                <li><Image src={payment} className="img-fluid" alt="" /></li>
                                <ul className="flex items-center gap-4 mt-4 md:mt-6">
                                    {
                                        socialLinks.map((e, i) => {
                                            return (
                                                <li key={i} className="bg-transparent border border-[#fc0] w-[40px] h-[40px] rounded-[5px] flex items-center justify-center p-1 hover:bg-second">
                                                    <Link target="_blank" href={e.link}>
                                                        <Image src={e.icon} className="w-[20px]" alt="Infinity Animation" />
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>

                <a className={styles.animatio} href="#header">
                    <Image src={top} alt="" />
                </a>
            </section>
            <section className={styles.longton}>
                <div className={`container mx-auto `}>
                    <div className={`md:grid md:grid-cols-1 items-center ${styles.world1}`}>
                        <p>© 2024 - All Rights Reserved <Link target="_blank" className="no-underline" href="https://bhaooinc.com/">Bhaoo INC</Link></p>
                    </div>

                </div>
            </section>


        </>
    )
}

export default Video

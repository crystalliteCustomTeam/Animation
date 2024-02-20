"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation';
// Import Components
import styles from '@/app/infinity-lp/component/footer/footer.module.css';
import payment from "../../../../../public/banner/payment.png"
import top from "../../../../../public/banner/top.png"
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import React, { useEffect,useState } from 'react';
import Axios from "axios";

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
            <div class={`container mx-auto ${styles.pointer} `}>
                    <div class={`md:grid md:grid-cols-2 items-center ${styles.world}`}>
                        <div>
                            <h3 className={styles.touchnow}>Get In <span class="colorred2">Touch</span> Now!</h3>
                                <p className={styles.wordsmosth}>Its High Time to Showcase
                                    Your
                                    Store to the World</p>
                                    <form onSubmit={handleSubmit}>
                                <div className={styles.form2} >
                                    <input type="text" minLength="4" required name="name" class="form-control" placeholder="Enter Your Name" />
                                    <input type="email"  required name="email" class="form-control" placeholder="Enter Your Email" />
                                </div>
                                <div className={styles.form2}>
                                    <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" class="form-control" placeholder="Enter Your Number" />
                                </div>
                                <div class="">
                                    <textarea name="message"  className={styles.megg} id="exampleFormControlTextarea1" placeholder="Type Message" rows="5"></textarea>
                                    <input type="submit" value="Get Started" className={styles.showcas} />
                                   
                                </div>
                                </form>
                    </div>
                    <div className={styles.newtab}>
                            <ul className={styles.newfight}>
                                <li class="fontmontserratregular  pb-3"><IoCall /><a class="colorwhite" href="tel:833-666-6684">  833-666-6684</a></li>
                                <li class="fontmontserratregular  pb-3"><MdEmail /><a class="colorwhite" href="mailto:info@infinityanimations.com">  info@infinityanimations.com</a></li>
                                <li class="fontmontserratregular  pb-3"><FaGlobe /><a class="colorwhite" href="https://infinityanimations.com/">  www.infinityanimations.com</a></li>
                                <li><Image src={payment} class="img-fluid" alt="" /></li>
                        </ul>
                    </div>
                    </div>
            </div>

            <a className={styles.animatio} href="#header">
                <Image src={top} alt="" />
            </a>
            </section>
            <section className={styles.longton}>
            <div class={`container mx-auto `}>
                        <div class={`md:grid md:grid-cols-1 items-center ${styles.world1}`}>
                            <p>Copyright © 2024, Infinity Animations All Rights Reserved</p>
                        </div>
                        
                </div>
            </section>

            
        </>
    )
}

export default Video

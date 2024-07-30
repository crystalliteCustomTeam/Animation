"use client"
import React, { useEffect, useState } from 'react';
// ===== CSS
import styles from "./blogNavigation.module.css"

const BlogNavigation = ({ postData }) => {
    const [h2Tags, setH2Tags] = useState([]);
    const [activeHeading, setActiveHeading] = useState(null);
    const [isNavVisible, setIsNavVisible] = useState(true);

    //=============== Parse h2 tags ===============//
    useEffect(() => {
        if (postData && postData.content) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(postData.content, 'text/html');
            const h2Elements = doc.querySelectorAll('h2');

            let h2ElementLeft = document.querySelectorAll("#leftcontent h2");
            Array.from(h2ElementLeft).map((e, i) => {
                e.setAttribute("id", `heading${i + 1}`);
            });

            const h2TagsArray = Array.from(h2Elements).map(h2 => h2.innerText);
            setH2Tags(h2TagsArray);

            if (h2Elements.length > 0) {
                const firstHeadingId = `#${h2Elements[0].getAttribute('id')}`;
                setActiveHeading(firstHeadingId);
            }
        }
    }, [postData]);

    //=============== Handle heading ===============//
    const handleHeadingClick = (id) => {
        setActiveHeading(id);
        console.log(id);
    };

    //=============== Toggle navigation ===============//
    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <>
            {h2Tags.map((item, index) => (
                <div key={index}
                    className={`${styles.Diver} ${activeHeading === `#heading${index + 1}` ? styles.DiverActive : styles.DiverHover}`}
                >
                    <a
                        className="text-[14px] sm:text-[16px] px-[25px] py-[12px] text-white text-opacity-90 font-[300] font-sans leading-[1.52857143] tracking-wider text-start "
                        href={`#heading${index + 1}`}
                        onClick={() => handleHeadingClick(`#heading${index + 1}`)}
                    >
                        {item}
                    </a>
                </div>
            ))}
        </>
    );
};

export default BlogNavigation;

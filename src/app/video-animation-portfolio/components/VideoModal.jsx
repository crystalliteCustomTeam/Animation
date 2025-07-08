"use client";
import { Dialog } from "@material-tailwind/react";
import styles from "../../../../styles/portfolio/videomodal.module.css";

const VideoModal = ({ show, iframeUrl, onHide }) => {
    return (
        <Dialog
            open={show}
            handler={onHide}
            className='popup h-full w-full' style={{ background: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(8px)' }}
        >
            <div className={styles.iframePopup}>

                {iframeUrl && (
                    <div className={styles.videoBox}>
                        <video
                            src={iframeUrl}
                            width="100%"
                            height="100%"
                            controls
                            autoPlay
                            style={{ border: "none" }}
                        ></video>
                        <div className={styles.closedBtn} onClick={onHide}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <g data-name="Group 7207" transform="translate(-2 -2)">
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="12"
                                        fill="#fff"
                                        data-name="Ellipse 1"
                                        transform="translate(2 2)"
                                    ></circle>
                                    <path
                                        d="M10.706 10.653l-2.451-3.524-2.407 3.524h-2.7l3.756-5.163-3.565-4.99h2.669l2.335 3.292 2.291-3.292h2.538l-3.539 4.9 3.785 5.25z"
                                        data-name="Path 1"
                                        transform="translate(6 8)"
                                    ></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                )}

            </div>
        </Dialog >
    );
};

export default VideoModal;

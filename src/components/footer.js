import React from 'react'
import styles from '../styles/footer.module.css'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <section className={styles.footerSection}>
                <div className='container'>
                    <div className={styles.fsec}>
                        <div className={styles.edu}>
                            <span className={styles.edulogo} >
                                <Image
                                    src="../../images/link.svg"
                                    width={250}
                                    height={200}
                                    alt="Picture of the link"
                                />
                            </span>
                            <p>Interdum velit laoreet id donec ultrices
                                tincidunt arcu. Tincidunt tortor aliquam nulla
                                facilisi cras fermentum odio eu.
                            </p>
                            <div className={styles.symbols}>
                                <span className={styles.icons}><FaFacebookF />   </span>
                                <span className={styles.icons}> <FaInstagram /></span>
                                <span className={styles.icons}> <FaSquarePinterest /></span>
                                <span className={styles.icons}> <FaTwitter /></span>
                            </div>

                        </div>
                        <div className={styles.listing}>
                            <div className={styles.services}>
                                <h4>Our Services:</h4>

                                <ul>
                                    <a href='#'><li className={styles.serviceslist}><span className={styles.rticon}><MdChevronRight /></span><p>Web Development</p></li></a>
                                    <a href='#'><li className={styles.serviceslist}><span className={styles.rticon}><MdChevronRight /></span><p>UI/UX Design</p></li></a>
                                    <a href='#'> <li className={styles.serviceslist}><span className={styles.rticon}><MdChevronRight /></span><p>Management</p></li></a>
                                    <a href='#'> <li className={styles.serviceslist}><span className={styles.rticon}><MdChevronRight /></span><p>Digital Maketing</p></li></a>
                                    <a href='#'> <li className={styles.serviceslist}><span className={styles.rticon}><MdChevronRight /></span><p>Blog News</p></li></a>
                                </ul>
                            </div>
                            <div className={styles.link}>
                                <h4>Quick Links:</h4>
                                <ul>
                                    <a href='#'> <li className={styles.linklist}><span className={styles.rticon}><MdChevronRight /></span><p>Templates</p></li></a>
                                    <a href='#'><li className={styles.linklist}><span className={styles.rticon}><MdChevronRight /></span><p>Blog & Article</p></li></a>
                                    <a href='#'><li className={styles.linklist}><span className={styles.rticon}><MdChevronRight /></span><p>Integrations</p></li></a>
                                    <a href='#'> <li className={styles.linklist}><span className={styles.rticon}><MdChevronRight /></span><p>Webinar</p></li></a>
                                    <a href='#'> <li className={styles.linklist}><span className={styles.rticon}><MdChevronRight /></span><p>Privacy & Policy</p></li></a>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.gal}>
                            <h4>Gallery</h4>

                            <div className={styles.gallery}>
                                
                                <span className={styles.galleryicn} >
                                    <Image
                                        src="../../images/gp.svg"
                                        width={85}
                                        height={85}
                                        alt="Picture of the link" 
                                    />
                                </span>
                                <span className={styles.galleryicn} >
                                    <Image
                                        src="../../images/gs.svg"
                                        width={85}
                                        height={85}
                                        alt="Picture of the link"
                                    />
                                </span>
                                <span className={styles.galleryicn} >
                                    <Image
                                        src="../../images/gl.svg"
                                        width={85}
                                        height={85}
                                        alt="Picture of the link"
                                    />
                                </span>
                                <span className={styles.galleryicn}>
                                    <Image
                                        src="../../images/gls.svg"
                                        width={85}
                                        height={85}
                                        alt="Picture of the link"
                                    />
                                </span>
                                <span  className={styles.galleryicn} >
                                    <Image
                                        src="../../images/ggs.svg"
                                        width={85}
                                        height={85}
                                        alt="Picture of the link"
                                    />
                                </span>
                                <span className={styles.galleryicn} >
                                    <Image
                                        src="../../images/gge.svg"
                                        width={85}
                                        height={85}
                                        alt="Picture of the link"
                                    />
                                </span>









                            </div>

                        </div>

                    </div>
                </div>

            </section>
            <footer className={styles.footer}>
                <p>Copyright © 2024 <span> edunity </span>|| All Rights Reserved</p>
            </footer>

        </>
    )
}

export default Footer
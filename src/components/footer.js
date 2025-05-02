import React from 'react'
import styles from '../styles/footer.module.css'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <section className={styles.Footer}>
                <div className={styles.container}>
                    <div className={styles.fsec}>
                        <div className={styles.edu}>
                            <span >
                                <Image    
                                src="../..public/images/link.svg"
                                width={100}
                                height={100}
                                alt="Picture of the link"
                            />
                            </span>
                            <p>Interdum velit laoreet id donec ultrices
                                tincidunt arcu. Tincidunt tortor aliquam nulla
                                facilisi cras fermentum odio eu.
                            </p>
                            <div className={styles.symbols}>
                                <span className={styles.icons}>
                                <FaFacebookF />
                                
                                <FaInstagram />
                                <FaSquarePinterest />
                                <FaTwitter />

                                </span>

                            </div>




                        </div>
                        <div className={styles.services}>
                            <h4>Our Services:</h4>
                            <ul>
                                <li className={styles.serviceslist}>Web Development</li>
                                <li className={styles.serviceslist}>UI/UX Design</li>
                                <li className={styles.serviceslist}>Management</li>
                                <li className={styles.serviceslist}>Digital Maketing</li>
                                <li className={styles.serviceslist}>Blog News</li>
                            </ul>
                            <h4>Quick Links:</h4>
                            <ul>
                                <li className={styles.linklist}>Templates</li>
                                <li className={styles.linklist}>Blog & Article</li>
                                <li className={styles.linklist}>Integrations</li>
                                <li className={styles.linklist}>Webinar</li>
                                <li className={styles.linklist}>Privacy & Policy</li>
                            </ul>
                        </div>
                      
                        <div className={styles.gallery}>
                            
                            <span >
                                <Image    
                                src="../..public/images/link.svg"
                                width={100}
                                height={100}
                                alt="Picture of the link"
                            />
                            </span>
                            <span >
                                <Image    
                                src="../..public/images/link.svg"
                                width={100}
                                height={100}
                                alt="Picture of the link"
                            />
                            </span>
                            <span >
                                <Image    
                                src="../..public/images/link.svg"
                                width={100}
                                height={100}
                                alt="Picture of the link"
                            />
                            </span>
                            <span>
                            <Image    
                                src="../..public/images/link.svg"
                                width={100}
                                height={100}
                                alt="Picture of the link"
                            />
                            </span>
                            <span >
                                <Image    
                                src="../..public/images/link.svg"
                                width={100}
                                height={100}
                                alt="Picture of the link"
                            />
                            </span>
                             <span >
                                <Image    
                                src="../..public/images/link.svg"
                                width={100}
                                height={100}
                                alt="Picture of the link"
                            />
                            </span>

                         
                            
                        







                    </div>

                </div>
                </div>

            </section>

        </>
    )
}

export default Footer
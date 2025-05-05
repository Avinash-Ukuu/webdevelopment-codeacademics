import React from 'react'
import styles from '../styles/categories.module.css'
import Image from 'next/image'

const categories = () => {
    return (
        <>
            <section>
                <div className='container'>



                    <h1 className={styles.mainheading}>Browse By Categories</h1>
                    <div className={styles.firstdiv}>

                        <div className={styles.web}>
                            <div className={styles.webImage}>
                                <Image
                                    src="OverlayBordertwo.svg"
                                    alt="image"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <p className={styles.webName}>
                                Web Development
                            </p>
                        </div>

                        <div className={styles.web}>
                            <div className={styles.webImage}>
                                <Image
                                    src="meanmern.svg"
                                    alt="image"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <p className={styles.webName}>
                                MEAN / MERN
                            </p>
                        </div>

                        <div className={styles.web}>
                            <div className={styles.webImage}>
                                <Image
                                    src="personal development.svg"
                                    alt="image"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <p className={styles.webName}>
                                Personal Development
                            </p>
                        </div>

                        <div className={styles.web}>
                            <div className={styles.webImage}>
                                <Image
                                    src="../../uiux.svg"
                                    alt="image"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <p className={styles.webName}>
                            UI/UX Design 
                            </p>
                        </div>

                        <div className={styles.web}>
                            <div className={styles.webImage}>
                                <Image
                                    src="ghraphicdesign.svg"
                                    alt="image"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <p className={styles.webName}>
                            Graphic Design
                            </p>
                        </div>

                        <div className={styles.web}>
                            <div className={styles.webImage}>
                                <Image
                                    src="digitalmarketing.svg"
                                    alt="image"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <p className={styles.webName}>
                            Digital Marketing
                            </p>
                        </div>



                         <div className={styles.web}>
                            <div className={styles.webImage}>
                                <Image
                                    src="videoeditortwo.svg"
                                    alt="image"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <p className={styles.webName}>
                            Video Editing
                            </p>
                        </div>

                        <div className={styles.web}>
                            <div className={styles.webImage}>
                                <Image
                                    src="qatesting.svg"
                                    alt="image"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <p className={styles.webName}>
                            QA / Testing
                            </p>
                        </div>

                        <div className={styles.web}>
                            <div className={styles.webImage}>
                                <Image
                                    src="pythondjango.svg"
                                    alt="image"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <p className={styles.webName}>
                            Python / Django
                            </p>
                        </div>

                      

                    </div>



                </div>



            </section>

        </>
    )
}

export default categories

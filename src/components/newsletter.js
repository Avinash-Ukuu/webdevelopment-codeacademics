import React from 'react'
import styles from '../styles/newsletter.module.css'
import Image from 'next/image'
const newsletter = () => {
    return (
        <>
            <section className={styles.jsec}>
                <div className='container'>
                    
                    <div className={styles.nsltter}>
                        <div className={styles.jon}>
                            <h3>Join Our Newsletter</h3>
                            <p>Subscribe our newsletter to get our latest update & news.</p>

                        </div>

                        <div className={styles.eye}>
                            <input type='text' placeholder='Enter your email:' ></input>
                            <button className={styles.but}><a href='#'>Subscribe Now</a></button>

                        </div>
                </div>









                </div>
            </section>



        </>
    )
}

export default newsletter
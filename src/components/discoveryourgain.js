import React from 'react'
import Styles from '../styles/discoveryourgain.module.css'
import image from 'next/image'
import { PiArrowRightThin } from "react-icons/pi";
const discoveryourgain = () => {
    return (
        <>
            <section className={Styles.discoverSection}>
                <div className='container'>
                    <div className={Styles.discover}>
                        <div className={Styles.carrierGain}>
                       <p>Choose Your Carrier</p>
                       <h2>Discover Your Gain</h2>
                        </div>
                        <div className={Styles.mainBox}>
                            <div className={Styles.purpleBOx}>
                                <div className={Styles.Content}>
                                    <span className={Styles.start}><p>Start From Today</p></span>
                                    <span className={Styles.joinourTrainning}><p>Join Our Training Courses &
                                        Build Your Skill.</p></span>
                                    
                                </div>
                                <div className={Styles.mainButton}>
                                        <button className={Styles.button}>
                                            <p>Join Now</p>
                                            <div className={Styles.circle}>
                                                <span className={Styles.arrows}><PiArrowRightThin size={25} />
                                                </span>
                                            </div>
                                        </button>
                                    </div>
                            </div>
                            <div className={Styles.purpleBOx}>
                            <div className={Styles.Content}>
                                    <span className={Styles.start}><p>Start From Today</p></span>
                                    <span className={Styles.joinourTrainning}><p>Join Our Training Courses &
                                        Build Your Skill.</p></span>
                                    <div className={Styles.mainButton}>
                                        <button className={Styles.button}>
                                            <p>Join Now</p>
                                            <div className={Styles.circle}>
                                                <span className={Styles.arrows}><PiArrowRightThin size={25} />
                                                </span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default discoveryourgain

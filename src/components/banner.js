import React from 'react'
import Styles from '../styles/banner.module.css'
import Image from 'next/image'
import { PiArrowRightThin } from "react-icons/pi";

const banner = () => {
  return (
    <>
      <section className={Styles.mainBanner}>
        <div className="container">
          <div className={Styles.launchBanner}>
            <div className={Styles.leftContent}>
              <div className={Styles.welcomeLaunch}>
                <h6>WELCOME EDUNITY ONLINE COURSE</h6>
                <h1>Launch Your Career in Web Development</h1>
                <p>Master HTML, CSS, JavaScript, React, and backend technologies to build powerful websites and web apps from scratch.</p>
              </div>
              <div className={Styles.mainJoin}>
                <p>Join Now</p>
                <div className={Styles.joinRound}>
                  <span className={Styles.arrow}><PiArrowRightThin size={18} color='white' />         </span>
                </div>
                
              </div>
            </div>
        
          
          </div>
          <div className={Styles.placement100}>
                  <p>100% Placement Assistance</p>
                  <span className={Styles.image5}>
                     <Image
                                    src="/image5.png"
                                    width={170}
                                    height={50}
                                    alt="Picture of 5 person in the 100% placement box"
                                  />
                    
                  </span>
                </div>
        </div>
       
      </section>
    </>
  )
}
export default banner
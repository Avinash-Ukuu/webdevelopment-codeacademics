import React from 'react'
import Styles from '../styles/learngrow.module.css'
import Image from 'next/image'
import { PiArrowRightThin } from "react-icons/pi";
const learngrow = () => {
  return (
    <>
      <section className={Styles.learngrowSection}>
        <div className='container'>
          <div className={Styles.mainLearnGrow}>
            <div className={Styles.learnLeft}>
              <div className={Styles.learnUp}>
                <div className={Styles.learnGirl}>
                  <Image
                    src="/learnGirl.png"
                    width={200}
                    height={170}
                    alt="Picture of a girl in learnGrow Section"
                  />
                </div>
                <div className={Styles.learnTower}>
                  <Image
                    src="/learnTower.png"
                    width={153}
                    height={153}
                    alt="Picture of 5 person in the 100% placement box"
                  />
                </div>
              </div>
              <div className={Styles.learnDown}>
                <Image
                  src="/learnPeople.png"
                  width={500}
                  height={0}
                  alt="Picture of 5 person in the 100% placement box"
                />
                <div className={Styles.yellowCircle}>
                  <span className={Styles.eight}><h4>8+</h4></span>
                  <span className={Styles.experience}><p> Years Of Experiences</p></span>
                </div>
              </div>
            </div>

            <div className={Styles.learnRight}>
             
                <div className={Styles.text}>

                  <span className={Styles.ourAboutUs} ><p>OUR ABOUT US</p></span>
                  <h2>Learn & Grow Your Web Development From Anywhere </h2>
                  <span className={Styles.joinText}><p>Join our expert-led training and learn to build websites, dashboards, and full-stack apps using cutting-edge tools like HTML5, CSS3, JavaScript, React, Node.js, Express, and MongoDB.</p></span>
                  <div className={Styles.practicalList}>
                    <div className={Styles.UP}>
                      <div className={Styles.items}>100% PRACTICAL TRAINNING</div>
                      <div className={Styles.items}>RESUME + PORTFOLIO ASSISTANCE</div>
                    </div>

                    <div className={Styles.DOWN}>
                      <div className={Styles.items}>REAL CLIENT PROJECTS</div>
                      <div className={Styles.items}>PERSONALITY DEVELOPMENT AND INTERVIEW ASSISTANCE</div>
                    </div>
                  </div>
                </div>
            
             
              <div className={Styles.loadButton}>
                <button className={Styles.createButton}>
                  <p>Load More</p>
                  <div className={Styles.circle}>
                    <span className={Styles.arrows}><PiArrowRightThin size={25} />
                    </span>
                  </div>
                </button>
              </div>
            
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default learngrow

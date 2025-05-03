import React from 'react'
import styles from '../styles/choosecode.module.css'
import Image from 'next/image'

const choosecode = () => {
  return (
    <>
      <section className={styles.main}>
        <div className='container'>
          <div className={styles.mainside}>
            <div className={styles.leftside}>
              <div className={styles.choosepluslogo}>
                <div className={styles.whychoose}>
                  <h1>WHY CHOOSE US</h1>
                </div>
                <span className={styles.chooselogo}>
                  <Image
                    src="../../image.svg"
                    alt="image"
                    width={50}
                    height={50}
                  />


                </span>

              </div>

              <div className={styles.textfirst}>
                <h1>Why Choose Code Academics / Benefits</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris..
                </p>
              </div>


              <div className={styles.lefttext}>
                <div className={styles.fourtext}>
                  <h2>Industry Experts as Trainers</h2>
                  <p>
                    Gravida dictum fusce
                    placerat ultricies integer
                  </p>
                </div>
                <div className={styles.fourtext}>
                  <h2>Doubt-clearing & Interview Prep Sessions</h2>
                  <p>
                    Gravida dictum fusce
                    placerat ultricies integer
                  </p>
                </div>
                <div className={styles.fourtext}>
                  <h2>Hands-on Projects with GitHub Portfolio</h2>
                  <p>
                    Gravida dictum fusce
                    placerat ultricies integer
                  </p>
                </div>
                <div className={styles.fourtext}>
                  <h2>Affordable Fees with EMI Options  </h2>
                  <p>
                    Gravida dictum fusce
                    placerat ultricies integer
                  </p>
                </div>

              </div>


            </div>
            <div className={styles.rightside}>
              <Image className={styles.rightsideimg}
                src="/choose.png"
                alt="choose"
               layout='fill'
              />
            </div>

          </div>
        </div>
      </section >

    </>
  )
}

export default choosecode
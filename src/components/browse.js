import React from 'react'
import styles from '../styles/browse.module.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import { VscArrowRight } from "react-icons/vsc";
import { FaCircle } from 'react-icons/fa6';


const browse = () => {
  return (
    <>
      <section className={styles.expertSection}>

        <div className='container'>

          <div className={styles.main}>

            <div className={styles.expertLeft}>

              <div className={styles.instructor}>OUR INSTRUCTOR</div>
              <div className={styles.heading}><h1>Meet Our Expert <br />  Instructor</h1>
              </div>
              <div className={styles.paraghraph}>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris..</p>
              </div>

              <div className={styles.commonbutton}>
                <button className={styles.left}>
                  <a>contact us</a>
                  <div className={styles.leftcircle}>
                    <span className={styles.arrowleft}>< VscArrowRight /></span>
                  </div>
                </button >

                <button className={styles.right}>
                  <a>Find courses</a>
                  <div className={styles.rightcircle}>
                    <span className={styles.arrowright}> <VscArrowRight /></span>
                  </div>
                </button >

              </div>

            </div>


            <div className={styles.expertRight}>

              <div className={`${styles.boxes} ${styles.boxOne}`}>

                <div className={`${styles.whitebox} ${styles.whiteboxone}`}>
                  
                 <p className={styles.esther}> Esther Howard</p> 
                 <p className={styles.junior}>Junior instructor</p>
                 <div className={styles.whitecircle}>
                  <span className={styles.arrowhead}><VscArrowRight />  </span>
                 
                 </div>
               
                

                </div>
              </div>

              <div className={`${styles.boxes} ${styles.boxtwo}`}>
              <div className={`${styles.whitebox} ${styles.whiteboxone}`}>
              <p className={styles.esther}> Baverly Hathcock </p>
              <p className={styles.junior}>Junior Instructor</p>
              {/* <span className={arrowhead}><VscArrowRight/></span> */}
              <div className={styles.whitecircle}>
              <span className={styles.arrowhead}>  <VscArrowRight />   </span>
              </div>
              </div>

              </div>

              <div className={`${styles.boxes} ${styles.boxthree}`}>
              <div className={`${styles.whitebox} ${styles.whiteboxone}`}>
                <p className={styles.esther}>Donald Gonzales</p>
                <p className={styles.junior}>Junior Instructor</p>
                <div className={styles.whitecircle}>
                  <span className={styles.arrowhead}> <VscArrowRight /> </span>
                
                </div>
              </div>

              </div>
              <div className={`${styles.boxes} ${styles.boxfour}`}>
              <div className={`${styles.whitebox} ${styles.whiteboxone}`}>
                <p className={styles.esther}>Eddie Lenz</p>
                <p className={styles.junior}>Junior Instructor</p>
                <div className={styles.whitecircle}>
                  <span className={styles.arrowhead}>  <VscArrowRight />  </span>
                
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

export default browse

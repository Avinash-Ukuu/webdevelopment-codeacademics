import React from 'react'
import styles from '../styles/joinus.module.css'
import Image from 'next/image'
import { IoIosPaper } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { PiArrowRightThin } from "react-icons/pi";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";


const Joinus = () => {
  return (
    <>
      <section className={styles.course}>
        {/* This is Join with us section */}
        <div className='container'>
          <div className={styles.joinus}>
            <p className={styles.tpc}>TOP POPULAR COURSES</p>
            <div className={styles.jws}>
              <h2>Edunity Courses Student Can Join With Us.</h2>
              <div className={styles.button}>
                <button className={styles.createButton}>
                  <p >Load More Courses</p>
                  <div className={styles.circle}>
                    <span className={styles.arrows}><PiArrowRightThin />
                    </span>
                  </div>

                </button>
              </div>

            </div>


          </div>
          {/* This is about course section */}
          <div className={styles.maincourse}>
          <div className={styles.toplinecourse}>
          <div className={styles.ourcourses}>
            <div className={styles.BusinessAnalysis}>
              <span > <Image
                src="../../images/topleft.svg"
                width={382}
                height={253}
                
                alt="Picture of the link"
              /></span>
              <p className={styles.dm}>Digital Marketing</p>
            </div>
            <div className={styles.bckgd}>
            
              <div className={styles.rating}>
                <div className={styles.star}>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <p>4.5k</p>
                </div>
                <span className={styles.dolar}><BiDollar /><p>50.00</p></span>
              </div>
              <h3>It Statistics Data Science And Business Analysis</h3>

              <div className={styles.lsbckgnd}>
                <div className={styles.lesson}><span><IoIosPaper /></span><p>Lesson 10</p></div>
                <div className={styles.lesson}><span><FaClock /></span><p>19h 30m</p></div>
                <div className={styles.lesson}><span><IoPersonSharp /></span><p>Student 20+</p></div>
              </div>
              <div className={styles.naming}>
                <div className={styles.faculty}>
                  <span className={styles.fimg}> <Image
                    src="../../images/samantha.svg"
                    width={44}
                    height={44}
                    alt="Picture of the faculty"
                  /></span>
                  <p>Samantha</p>
                </div>
                <button>
                  <p  className={styles.createButton}>Enroll<span className={styles.bottomarrow}><LiaLongArrowAltRightSolid /></span></p>


                </button>


              </div>

            </div>
          </div>
          <div className={styles.ourcourses}>
            <div className={styles.BusinessAnalysis}>
              <span > <Image
                src="../../images/topmid.svg"
                width={382}
                height={253}
                
                alt="Picture of the link"
              /></span>
              <p className={styles.dm}>Digital Marketing</p>
            </div>
            <div className={styles.bckgd}>
            
              <div className={styles.rating}>
                <div className={styles.star}>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <p>4.5k</p>
                </div>
                <span className={styles.dolar}><BiDollar /><p>50.00</p></span>
              </div>
              <h3>Bilginer Adobe Illustrator For Graphic Design</h3>
             

              <div className={styles.lsbckgnd}>
                <div className={styles.lesson}><span><IoIosPaper /></span><p>Lesson 10</p></div>
                <div className={styles.lesson}><span><FaClock /></span><p>19h 30m</p></div>
                <div className={styles.lesson}><span><IoPersonSharp /></span><p>Student 20+</p></div>
              </div>
              <div className={styles.naming}>
                <div className={styles.faculty}>
                  <span className={styles.fimg}> <Image
                    src="../../images/charle.svg"
                    width={44}
                    height={44}
                    alt="Picture of the faculty"
                  /></span>
                  <p>charle</p>
                </div>
                <button>
                  <p  className={styles.createButton}>Enroll<span className={styles.bottomarrow}><LiaLongArrowAltRightSolid /></span></p>


                </button>


              </div>

            </div>
          </div>
          <div className={styles.ourcourses}>
            <div className={styles.BusinessAnalysis}>
              <span > <Image
                src="../../images/topright.svg"
                width={382}
                height={253}
                
                alt="Picture of the link"
              /></span>
              <p className={styles.dm}>Digital Marketing</p>
            </div>
            <div className={styles.bckgd}>
            
              <div className={styles.rating}>
                <div className={styles.star}>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <p>4.5k</p>
                </div>
                <span className={styles.dolar}><BiDollar /><p>50.00</p></span>
              </div>
              <h3>Starting SEO as your Home Based Business</h3>
             

              <div className={styles.lsbckgnd}>
                <div className={styles.lesson}><span><IoIosPaper /></span><p>Lesson 10</p></div>
                <div className={styles.lesson}><span><FaClock /></span><p>19h 30m</p></div>
                <div className={styles.lesson}><span><IoPersonSharp /></span><p>Student 20+</p></div>
              </div>
              <div className={styles.naming}>
                <div className={styles.faculty}>
                  <span className={styles.fimg}> <Image
                    src="../../images/morgant.svg"
                    width={44}
                    height={44}
                    alt="Picture of the faculty"
                  /></span>
                  <p>Morgan</p>
                </div>
                <button>
                  <p  className={styles.createButton}>Enroll<span className={styles.bottomarrow}><LiaLongArrowAltRightSolid /></span></p>


                </button>


              </div>

            </div>
          </div>
          
          </div>
          <div className={styles.bottomlinecourse}>
          <div className={styles.ourcourses}>
            <div className={styles.BusinessAnalysis}>
              <span > <Image
                src="../../images/bottomleft.svg"
                width={382}
                height={253}
                
                alt="Picture of the link"
              /></span>
              <p className={styles.dm}>Digital Marketing</p>
            </div>
            <div className={styles.bckgd}>
            
              <div className={styles.rating}>
                <div className={styles.star}>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <p>4.5k</p>
                </div>
                <span className={styles.dolar}><BiDollar /><p>50.00</p></span>
              </div>
              <h3>Bilginer Adobe Illustrator For Graphic Design</h3>

              <div className={styles.lsbckgnd}>
                <div className={styles.lesson}><span><IoIosPaper /></span><p>Lesson 10</p></div>
                <div className={styles.lesson}><span><FaClock /></span><p>19h 30m</p></div>
                <div className={styles.lesson}><span><IoPersonSharp /></span><p>Student 20+</p></div>
              </div>
              <div className={styles.naming}>
                <div className={styles.faculty}>
                  <span className={styles.fimg}> <Image
                    src="../../images/brian.svg"
                    width={44}
                    height={44}
                    alt="Picture of the faculty"
                  /></span>
                  <p>Brian Brewer</p>
                </div>
                <button>
                  <p  className={styles.createButton}>Enroll<span className={styles.bottomarrow}><LiaLongArrowAltRightSolid /></span></p>


                </button>


              </div>

            </div>
          </div>
          <div className={styles.ourcourses}>
            <div className={styles.BusinessAnalysis}>
              <span > <Image
                src="../../images/bottommid.svg"
                width={382}
                height={253}
                
                alt="Picture of the link"
              /></span>
              <p className={styles.dm}>Digital Marketing</p>
            </div>
            <div className={styles.bckgd}>
            
              <div className={styles.rating}>
                <div className={styles.star}>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <p>4.5k</p>
                </div>
                <span className={styles.dolar}><BiDollar /><p>50.00</p></span>
              </div>
              <h3>It Statistics Data Science And Business Analysis</h3>
                
             

              <div className={styles.lsbckgnd}>
                <div className={styles.lesson}><span><IoIosPaper /></span><p>Lesson 10</p></div>
                <div className={styles.lesson}><span><FaClock /></span><p>19h 30m</p></div>
                <div className={styles.lesson}><span><IoPersonSharp /></span><p>Student 20+</p></div>
              </div>
              <div className={styles.naming}>
                <div className={styles.faculty}>
                  <span className={styles.fimg}> <Image
                    src="../../images/rodrique.svg"
                    width={44}
                    height={44}
                    alt="Picture of the faculty"
                  /></span>
                  <p>Rodrique</p>
                </div>
                <button>
                  <p  className={styles.createButton}>Enroll<span className={styles.bottomarrow}><LiaLongArrowAltRightSolid /></span></p>


                </button>


              </div>

            </div>
          </div>
          <div className={styles.ourcourses}>
            <div className={styles.BusinessAnalysis}>
              <span > <Image
                src="../../images/bottomright.svg"
                width={382}
                height={253}
                
                alt="Picture of the link"
              /></span>
              <p className={styles.dm}>Digital Marketing</p>
            </div>
            <div className={styles.bckgd}>
            
              <div className={styles.rating}>
                <div className={styles.star}>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <span className={styles.orange}><FaStar /></span>
                  <p>4.5k</p>
                </div>
                <span className={styles.dolar}><BiDollar /><p>50.00</p></span>
              </div>
              <h3>Starting SEO as your Home Based Business</h3>
             

              <div className={styles.lsbckgnd}>
                <div className={styles.lesson}><span><IoIosPaper /></span><p>Lesson 10</p></div>
                <div className={styles.lesson}><span><FaClock /></span><p>19h 30m</p></div>
                <div className={styles.lesson}><span><IoPersonSharp /></span><p>Student 20+</p></div>
              </div>
              <div className={styles.naming}>
                <div className={styles.faculty}>
                  <span className={styles.fimg}> <Image
                    src="../../images/morganb.svg"
                    width={44}
                    height={44}
                    alt="Picture of the faculty"
                  /></span>
                  <p>Morgan</p>
                </div>
                <button>
                  <p  className={styles.createButton}>Enroll<span className={styles.bottomarrow}><LiaLongArrowAltRightSolid /></span></p>


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

export default Joinus
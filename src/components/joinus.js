import React from 'react'
import styles from '../styles/joinus.module.css'
import Image from 'next/image'
import { IoIosPaper } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { FaClock } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { PiArrowRightThin } from "react-icons/pi";



const joinus = () => {
  return (
    <>
      <section className={styles.course}>
        <div className='container'>
          <div className={styles.joinus}>
            <p>TOP POPULAR COURSES</p>
            <div className={styles.jws}>
              <h1>Edunity Courses Student Can Join Us.</h1>
              <div className={Styles.button}>
                <button className={Styles.createButton}>
                  <p>Create Account</p>
                  <div className={Styles.circle}>
                    <span className={Styles.arrows}><PiArrowRightThin />
                    </span>
                  </div>

                </button>
              </div>

            </div>


          </div>

          <div className={styles.firstcourses}>
            <div className={styles.BusinessAnalysis}>
            <span> <Image
              src="../../images/topleft.svg"
              width={250}
              height={200}
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
              <p>4.5k</p>
            </div>
            <span className={styles.dolar}><BiDollar /><p>50.00</p></span>
          </div>
          <h3>It Statistics Data Science And Business Analysis</h3>

          <div className={styles.lsbckgnd}>
            <div className={styles.lesson}><span><IoIosPaper /></span><p>Lesson 10</p></div>
            <div className={styles.time}><span><FaClock /></span><p>19h 30m</p></div>
            <div className={styles.time}><span><IoPersonSharp /></span><p>Student 20+</p></div>
          </div>
          <div className={styles.naming}>
            <div className={styles.faculty}>
              <span className={styles.fimg}> <Image
                src="../../images/samantha.svg"
                width={50}
                height={50}
                alt="Picture of the faculty"
              /></span>
              <p>Samantha</p>
            </div>
            <button className={Styles.createButton}>
              <p>Enroll<span><PiArrowRightThin /></span></p>


            </button>


          </div>

          </div>
          </div>






        </div>
      </section>
    </>
  )
}

export default joinus
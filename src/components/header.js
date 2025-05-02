import React from 'react'
import Styles from '../styles/header.module.css'
import Image from 'next/image'
import { LuPhoneCall } from "react-icons/lu";
import { SlEnvolopeLetter } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";


const header = () => {
  return (
    <>
      <section className={Styles.blueHeading}>
        <div className={Styles.container}>
          <div className={Styles.items}>
            <div className={Styles.leftList}>
              <div className={Styles.child}>
                <span className={Styles.icon}>
                <LuPhoneCall />
                </span>
                <p>(00) 875 784 5682</p>
              </div>
              <div className={Styles.child}>
                <span className={Styles.icon}>
                <SlEnvolopeLetter />
                </span>
                <p>pacargoinfo@gmail.com</p>

              </div>
              <div className={Styles.child}>
                <span className={Styles.icon}>
                <IoLocationOutline />
                </span>
                <p>238, Arimantab, Moska - USA.</p>
              </div>
            </div>
            <div className={Styles.rightList}>
              <span className={Styles.contactIcon}>
              <FaFacebookF />
              </span>
              <span className={Styles.contactIcon}>
              <FaInstagram />
              </span>
              <span className={Styles.contactIcon}>
              <SlSocialLinkedin />
              </span>
              <span className={Styles.contactIcon}>
              <AiOutlineYoutube />
              </span>
            </div>
          </div>
        </div>
      </section>
      
      <section className={Styles.bannerHead}>
        <div className={Styles.container}>
          <div className={Styles.head}>
          <div className={Styles.mainLogo}>

          {/* ############logo ki############## */}
          
          </div>
          <ul className={Styles.homeList}>
            <li className={Styles.home}> Home</li>
            <li className={Styles.content}> About Us</li>
            <li className={Styles.content}> Courses</li>
            <li className={Styles.content}> Pages</li>
            <li className={Styles.content}> Blog</li>
            <li className={Styles.content}> Contact</li>

          </ul>
          <div className={Styles.button}>

          </div>
          </div>

        </div>

      </section>

    </>

  )
}

export default header

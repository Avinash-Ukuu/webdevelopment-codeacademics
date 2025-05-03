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
import { PiArrowRightThin } from "react-icons/pi";


const header = () => {
  return (
    <>
      <section className={Styles.blueHeading}>
        <div className="container">
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
        <div className="container">
          <div className={Styles.head}>
            <div className={Styles.mainLogo}>
              <Image
                src="/mainLogo.png"
                width={220}
                height={54}
                alt="Picture of the main logo"
              />

            </div>

            <ul className={Styles.homeList}>
              <li className={Styles.home} ><a href="#">Home</a></li>
              <li className={Styles.home} ><a href="#">About Us</a></li>
              <li className={Styles.home} ><a href="#">Courses</a></li>
              <li className={Styles.home} ><a href="#">Pages</a></li>
              <li className={Styles.home} ><a href="#">Blog</a></li>
              <li className={Styles.home} ><a href="#">Contact</a></li>
            </ul>

            <div className={Styles.button}>
              <button className={Styles.createButton}>
                <p>Create Account</p>
                <div className={Styles.circle}>
                  <span className={Styles.arrows}><PiArrowRightThin size={25}/> 
                  </span>
                </div>
              </button>
            </div>
          </div>

        </div>

      </section>

    </>

  )
}

export default header

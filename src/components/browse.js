import React from 'react'
import styles  from  '../styles/browse.module.css'

const browse = () => {
  return (
    <>
  <section>

    <div className='container'>

        <div className={styles.main}>

            <div className={styles.instructor}>OUR INSTRUCTOR</div>
            <div className={styles.heading}><h1>Meet Our Expert <br/>  Instructor</h1></div>
            <div className={styles.paraghraph}>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris..</p>
            </div>

            <div className={styles.commonbutton}>
               <button  className={styles.left}><a>contact us</a></button > 
               <button  className={styles.right}><a>Find courses</a></button >
               <div className={styles.arrows}></div>
               <div className={styles.arrows}></div>
            </div>



        </div>





    </div>





  </section>

    
      



    </>
  )
}

export default browse

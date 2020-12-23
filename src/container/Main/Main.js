import React, {useEffect} from 'react'
import {gsap, Power4} from "gsap";
import style from './Main.module.sass'
import {AnimatePresence, motion} from "framer-motion"
import Aux from "../../hoc/Aux";
import Card from "../../Component/Card/Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGripLinesVertical, faLongArrowAltLeft, faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import MultiCard from "../../Component/MultiCard/MultiCard";
import Team from "../../Component/Team/Team";
import {Link} from "react-router-dom";
import Refer from "../../Component/Refer/Refer";
import {faFacebook, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {connect} from "react-redux";
import ReactPlayer from 'react-player'
import start_vid from '../../assets/video/start.mp4'
import reverse_vid from '../../assets/video/rev.mp4'
/*
* #2c4247 dark blue
* #ff1717 red
* #222d2f dark
* */
const Main = (props) => {

   const resume_link = "https://drive.google.com/file/d/185wJprwXp6LJ42Gim9T5FjZgXmMpEC0W/view"
   const go_left = () => {
      props.upd_cur_loc('left')
      gsap.to('#_main', {
         x: 350,
         delay: 0.28,
         duration: 0.9,
         // ease: Power4.easeOut,
      })
      // gsap.to('#_main div', {
      //    scale: 3,
      //    delay: 1,
      //    duration: 2,
      // })

      // let starttime = 1; // start at 7 seconds
      // let endtime = 4; // stop at 17 seconds
      // const vid = document.querySelector('#_main div video')
      //
      // vid.currentTime = starttime;
      // vid.play();
      // setTimeout(function () {
      //    vid.pause();
      // }, (endtime - starttime) * 1000);

   }

   const go_main = () => {
      props.upd_cur_loc('main')
      gsap.to('#_main', {
         x: 0,
         duration: 2,
         ease: Power4.easeOut,
      })
      // gsap.to('#_main div', {
      //    scale: 1,
      //    delay: 1,
      //    duration: 2,
      // })
   }

   useEffect(() => {
      console.log(props.current_location)
      // const vid = document.querySelector('#_main video')
      // vid.currentTime = 1;
   })

   return (
      <div className={style.general}>
         <div className={style.first}>

            {/*Common*/}
            <div className={style.main} id={'_main'}>
               {props.current_location === 'main' && (
                  <ReactPlayer
                     width="100%"
                     playing={true}
                     muted={true}
                     url={reverse_vid}
                  />
               )}
               {props.current_location === 'left' && (
                  <ReactPlayer
                     width="100%"
                     playing={true}
                     muted={true}
                     url={start_vid}
                  />
               )}
               <AnimatePresence>
                  {props.current_location === 'main' && (
                     <motion.h1
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{scale: 1.3, opacity: 0}}
                        transition={{duration: 0.3}}
                     >
                        Udit Sethi.
                     </motion.h1>
                  )}
               </AnimatePresence>
            </div>

            {/* Main Page*/}
            {props.current_location === 'main' && (
               <motion.span
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 2}}
                  onClick={() => go_left()} className={style.go_left}
               >
                  <FontAwesomeIcon icon={faLongArrowAltLeft}/> &nbsp;&nbsp; About me
               </motion.span>
            )}

            {/* Left Page */}
            {props.current_location === 'left' && (
               <Aux>
                  <motion.div
                     initial={{x: -800}}
                     animate={{x: 0}}
                     transition={{ease: 'easeOut', duration: 1}}
                     className={style.white_card}
                  >
                     <Card/>
                  </motion.div>
                  <motion.span
                     initial={{opacity: 0}}
                     animate={{opacity: 1}}
                     transition={{duration: 2}}
                     onClick={() => go_main()} className={style.go_main}
                  >
                     Main &nbsp;&nbsp; <FontAwesomeIcon icon={faLongArrowAltRight}/>
                  </motion.span>

               </Aux>
            )}
         </div>
         {/* Extra stuff */}
         {props.current_location === 'left' && (
            <Aux>
               <div className={style.second}>
                  <h1>Hello,</h1>
                  <p>My name is Udit Sethi and I am a Business Coach, and Network Marketer based out of Grand Rapids,
                     Michigan. I am currently a student at Kendall College of Art and Design at Ferris State University,
                     majoring in the Collaborative Design program with a minor in Digital Media. I am the core producer
                     and
                     creative director at Mainstay, where we are striving to tell stories through film & design.
                  </p>
                  <a href={resume_link} target={'_blank'} rel='noreferrer'>Download my resume.</a>
               </div>
               <div className={style.third}>
                  <h1>I design <br/><span>solutions.</span></h1>
                  <div className={style.data}>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aperiam at, dicta dolore
                        dolorem dolores ea earum, explicabo facere, impedit ipsa maiores molestiae mollitia numquam
                        perferendis qui repudiandae saepe? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Distinctio nostrum perferendis quidem! Accusamus ad asperiores corporis debitis doloremque ea,
                        earum magnam nulla omnis possimus rerum sit tempore, vel vero vitae.
                     </p>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci assumenda, atque beatae
                        cumque cupiditate dolorum eaque, eius eveni
                        <Refer to={'https://www.google.com/'}>All About My Products</Refer>
                     </p>
                  </div>
               </div>
               <div className={style.fourth}>
                  <h1>I am <br/><span>Digital Entrepreneur.</span></h1>
                  <div className={style.data}>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aperiam at, dicta dolore
                        dolorem dolores ea earum, explicabo facere, impedit ipsa maiores molestiae mollitia numquam
                        perferendis qui repudiandae saepe? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Distinctio nostrum perferendis quidem! Accusamus ad asperiores corporis debitis doloremque ea,
                        earum magnam nulla omnis possimus rerum sit tempore, vel vero vitae
                        <Refer to={'https://www.google.com/'}>My Ideas</Refer>
                     </p>
                  </div>
                  <MultiCard/>
               </div>
               <div className={style.fifth}>
                  <h1>My Business<br/><span>partners.</span></h1>
                  <div className={style.data}>
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aperiam at, dicta dolore
                        dolorem dolores ea earum, explicabo facere, impedit ipsa maiores molestiae mollitia numquam
                        perferendis qui repudiandae saepe? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Distinctio nostrum perferendis quidem! Accusamus ad asperiores corporis debitis doloremque ea,
                        earum magnam nulla omnis possimus rerum sit tempore, vel vero vitae.
                        <Link to={'/team_details'}>Know more about my Team. &nbsp;&nbsp;
                           <FontAwesomeIcon icon={faLongArrowAltRight}/></Link>
                     </p>
                  </div>
                  <Team/>
               </div>
               <div className={style.sixth}>
                  <h1>I would <br/>love to<br/> connect with <br/><span>you.</span></h1>
                  <div className={style.social}>
                     <a href={'https://www.google.com/'} target={'_blank'} rel='noreferrer'><FontAwesomeIcon
                        icon={faFacebook}/></a>
                     <a href={'https://www.google.com/'} target={'_blank'} rel='noreferrer'><FontAwesomeIcon
                        icon={faTwitter}/></a>
                     <a href={'https://www.google.com/'} target={'_blank'} rel='noreferrer'><FontAwesomeIcon
                        icon={faInstagram}/></a>
                     <a href={'https://www.google.com/'} target={'_blank'} rel='noreferrer'><FontAwesomeIcon
                        icon={faLinkedin}/></a>
                  </div>
                  <div className={style.footer}>&copy; Copyright &nbsp;<span> Udit Sethi &nbsp;</span> 2020 -
                     2021,&nbsp;&nbsp;
                     <FontAwesomeIcon icon={faGripLinesVertical}/>&nbsp;&nbsp;
                     <a href="https://www.linkedin.com/in/naklic0der/" target='_blank' rel='noreferrer'>made by Aman
                        Shrivastava</a>
                  </div>
               </div>
            </Aux>
         )}
      </div>
   )
}
// REDUX STUFF

// GET SLICE OF STATE
const mapStateToProps = (state) => {
   return {
      current_location: state.location,
   }
}

// UPDATE SLICE OF STATE
const mapDispatchToProps = (dispatch) => {
   return {
      upd_cur_loc: (loc) => {
         dispatch({type: 'UPDATED_LOCATION', loc: loc})
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

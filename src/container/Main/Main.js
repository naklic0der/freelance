import React, {useEffect} from 'react'
import {gsap, Power4} from "gsap";
import style from './Main.module.sass'
import {AnimatePresence, motion} from "framer-motion"
import Aux from "../../hoc/Aux";
import {connect} from "react-redux";
import Card from "../../Component/Card/Card";
/*
* #2c4247 dark blue
* #ff1717 red
* #222d2f dark
* */
const Main = (props) => {

   const go_left = () => {
      props.upd_cur_loc('left')
      gsap.to('#_main', {
         x: 350,
         delay: 0.28,
         duration: 0.9,
         // ease: Power4.easeOut,
      })
      gsap.to('#_main div', {
         scale: 3,
         delay: 1,
         duration: 2,
      })
   }

   const go_main = () => {
      props.upd_cur_loc('main')
      gsap.to('#_main', {
         x: 0,
         duration: 2,
         ease: Power4.easeOut,
      })
      gsap.to('#_main div', {
         scale: 1,
         delay: 1,
         duration: 2,
      })
   }

   useEffect(() => {
      console.log(props.current_location)
   })

   return (
      <div className={style.general}>
         <div className={style.first}>

            {/*Common*/}
            <div className={style.main} id={'_main'}>
               <div></div>
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
            <AnimatePresence>
               {props.current_location === 'main' && (
                  <motion.button
                     initial={{opacity: 0}}
                     animate={{opacity: 1}}
                     exit={{opacity: 0}}
                     transition={{duration: 2}}
                     onClick={() => go_left()} className={style.go_left}>Left</motion.button>
               )}
            </AnimatePresence>

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
                  <motion.button
                     initial={{opacity: 0}}
                     animate={{opacity: 1}}
                     transition={{duration: 2}}
                     onClick={() => go_main()} className={style.go_main}>Main
                  </motion.button>

               </Aux>
            )}
         </div>
         {/* Extra stuff */}
         {props.current_location === 'left' && (
            <div className={style.second}>
               <p>Hey where is text</p>
            </div>
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

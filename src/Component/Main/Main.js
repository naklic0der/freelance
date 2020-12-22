import React, {useEffect} from 'react'
import {gsap, Power4} from "gsap";
import style from './Main.module.sass'
import Aux from "../../hoc/Aux";
import {AnimatePresence, motion} from "framer-motion"
import {connect} from "react-redux";

const Main = (props) => {

   const go_left = () => {
      props.upd_cur_loc('left')
      gsap.to('#_h1', {
         x: 600,
         duration: 2,
         ease: Power4.easeOut,
      })
   }

   const go_main = () => {
      props.upd_cur_loc('main')
      gsap.to('#_h1', {
         x: 0,
         duration: 2,
         ease: Power4.easeOut,
      })
   }

   useEffect(() => {
      console.log(props.current_location)
   })

   return (
      <div>
         {/*Common*/}
         <h1 className={style.h1} id={'_h1'}>Udit Sethi</h1>

         {/* Main Page*/}
         <AnimatePresence>
            {props.current_location === 'main' && (
               <button
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  onClick={() => go_left()} className={style.go_left}>Left</button>
            )}
         </AnimatePresence>

         {/* Left Page */}
         <AnimatePresence>
            {props.current_location === 'left' && (
               <Aux>
                  <motion.div
                     initial={{x: -300, opacity: 1}}
                     animate={{x: 0}}
                     exit={{x: -500}}
                     className={style.white_card}
                  >
                     This is white card
                  </motion.div>
                  <motion.button
                     initial={{opacity: 0}}
                     animate={{opacity: 1}}
                     exit={{opacity: 0}}
                     onClick={() => go_main()} className={style.go_main}>Main
                  </motion.button>
                  <motion.p
                     initial={{opacity: 0}}
                     animate={{opacity: 1}}
                     exit={{opacity: 0}}
                  >Hey i am on left page
                  </motion.p>
               </Aux>
            )}
         </AnimatePresence>
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

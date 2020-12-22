import React, {useEffect} from 'react'
import {gsap, Power4} from "gsap";
import {connect} from "react-redux";
import style from './Main.module.sass'
import Aux from "../../hoc/Aux";

const Main = (props) => {

   const go_left = () => {
      props.upd_cur_loc('left')
      gsap.to('div h1', {
         x: 250,
         duration: 2,
         ease: Power4.easeOut,
      })
   }

   const go_main = () => {
      props.upd_cur_loc('main')
      gsap.to('div h1', {
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
         <h1 className={style.h1}>Udit Sethi</h1>

         {/* Main Page*/}
         {props.current_location === 'main' && (
            <button onClick={() => go_left()}>Left</button>
         )}

         {/* Left Page */}
         {props.current_location === 'left' && (
            <Aux>
               <button onClick={() => go_main()}>Main</button>
               <p>Hey i am on left page</p>
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

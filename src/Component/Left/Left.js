import React, {useEffect} from 'react'
import {gsap} from 'gsap'
import {Link} from "react-router-dom";

const Left = (props) => {
   useEffect(() => {
      gsap.to('div h1', {x: 250, duration: 1})
   });
   return (
      <div>
         <h1>Udit Sethi Left</h1>
         <Link to={'/'} exact={'true'}>Main</Link>
      </div>
   )
}

export default Left

import React, {useEffect} from 'react'
import {Link} from "react-router-dom";
import {gsap} from "gsap";

const Main = (props) => {
   useEffect(() => {
      gsap.to('div h1', {x: 250, duration: 1})
   });
   return (
      <div>
         <h1>Udit Sethi</h1>
         <Link to={'/left'}>Left</Link>
      </div>
   )
}

export default Main

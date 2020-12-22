import React from 'react'
import style from './Card.module.sass'

const Card = (props) => {

   return (
      <div className={style.card}>
         <div className={style.name}>Udit Sethi</div>
         <div className={style.desc}>
            <span>Network </span><br/>
            <span>Marketing</span><br/>
            <span>and Business</span><br/>
            <span>Coach.</span><br/>
         </div>
         <div className={style.insta}>udit@sethi.company</div>
         <div className={style.twitter}>@udit_sethi</div>
      </div>
   )
}

export default Card

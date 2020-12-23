import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";
import style from './Refer.module.sass'

const Refer = (props) => {

   return (
      <a href={props.to} target={'_blank'} rel='noreferrer' className={style.a}>{props.children}. &nbsp;&nbsp;
         <FontAwesomeIcon icon={faLongArrowAltRight}/></a>
   )
}

export default Refer

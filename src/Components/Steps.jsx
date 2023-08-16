// import React from "react"
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import PropTypes from 'prop-types'
import { FiSend } from 'react-icons/fi'
import './Steps.css'

const Steps = ({ currentStep }) => {

  Steps.propTypes ={
    currentStep: PropTypes.element
  };

  return (
    <div className="steps">
      <div className="step active">
        <AiOutlineUser />
        <p>identificação</p>
      </div>
      <div className={`step ${currentStep >= 1 ? 'active' : ''} `}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? 'active' : ''} `}>
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  )
}

export default Steps

// export default function Steps() {

//   return (
//     <>
//       <h3>
//         Etapas
//       </h3>
//     </>)
// }
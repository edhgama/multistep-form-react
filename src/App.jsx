import { useState } from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import './App.css'

import UserForm from './Components/UserForm'
import ReviewForm from './Components/ReviewForm'
import Thanks from './Components/Thanks'

//hooks

import { useForm } from './Hooks/useForm'

function App() {

  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />]
  const { currentStep, currentComponentForm, changeStep, isLastStep, isFirstStep } = useForm(formComponents)


  return (
    <div className='app'>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com sua compra, utilize o formulário abaixo para avaliar o processo
        </p>
      </div>
      <div className="form-container">
        <p>etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container"> {currentComponentForm} </div>
          <div className="actions">
            {!isFirstStep &&
              (<button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>)}
            {!isLastStep ? (<button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
            </button>) :
              (<button type='submit'>
                <span>Enviar</span>
                <FiSend />
              </button>
              )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App

 

import { useState } from 'react'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'

//comps
import UserForm from './Components/UserForm'
import ReviewForm from './Components/ReviewForm'
import Thanks from './Components/Thanks'
import Steps from './Components/Steps'

//hooks
import { useForm } from './Hooks/useForm'

//css
import './App.css'

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: ""
}

function App() {
  const [data, setData] = useState(formTemplate)

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value }
    });
  };



     
  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data}  />]
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
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container"> {currentComponentForm} </div>
          <div className="actions">
            {!isFirstStep &&
              (<button type='button' onClick={() => changeStep(currentStep - 1)}>

                <span> <GrFormPrevious />Voltar</span>
              </button>)}
            {!isLastStep ? (<button type='submit'>
              <span>Avançar<GrFormNext /></span>

            </button>) :
              (<button type='submit'>
                <span>Enviar<FiSend /></span>

              </button>
              )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App

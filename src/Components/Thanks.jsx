import { 
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsEmojiFrownFill,
  BsEmojiHeartEyesFill
} from 'react-icons/bs'

import "./thanks.css";


export default function Thanks({data}) {

  return (
    <div className="thanks-container">
      <h2>Falta Pouco...</h2>
      <p>A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para a sua próxima compra</p>
      <p>Para concluir a sua avaliação clique no botão Enviar.</p>
      <h3>Aqui está o resumo da sua avaliação</h3>
      <p className="review-data">
        <span>Satisfação com o produto</span>
      </p>
      <p className='review-data'>
        <span>Comentário:</span>
      </p>
    
    </div>
  )
}

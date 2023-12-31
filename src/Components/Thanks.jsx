import {
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsEmojiFrownFill,
  BsEmojiHeartEyesFill
} from 'react-icons/bs'

import "./Thanks.css";

const emojiData = {
  'Insatisfeito': <BsEmojiFrownFill />,
  'Neutro': <BsFillEmojiNeutralFill />,
  'Satisfeito': <BsFillEmojiSmileFill />,
  'Muito Satisfeito': <BsEmojiHeartEyesFill />
}

export default function Thanks({ data }) {

  return (
    <div className="thanks-container">
      <h3>Falta Pouco...</h3>
      <p>A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para a sua próxima compra</p>
      <p>Para concluir a sua avaliação clique no botão Enviar.</p>
      <div className="review-container">
        <h3>Aqui está o resumo da sua avaliação, {data.name}.</h3>
        <p className="review-data">
          <span>Satisfação com o produto:</span> {data.review} {emojiData[data.review]}
        </p>
        <p className='review-data'>
          <span>Comentário:</span> {data.comment}
        </p>
      </div>

    </div>
  )
}

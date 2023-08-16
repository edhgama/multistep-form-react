import { 
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsEmojiFrownFill,
  BsEmojiHeartEyesFill
} from 'react-icons/bs'

import './Reviewform.css'

export default function ReviewForm() {

  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type='radio' value='unsatisfied' name='review' required />
          <BsFillEmojiNeutralFill />
          <p>Instatisfeito</p>
        </label>
        <label className="radio-container">
          <input type='radio' value='neutral' name='review' required />
          <BsEmojiFrownFill />
          <p>Neutro</p>
        </label>
        <label className="radio-container">
          <input type='radio' value='sastified' name='review' required />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type='radio' value='very_satisfied' name='review' required />
          <BsEmojiHeartEyesFill />
          <p>Instatisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor='comment'>Comentário</label>
        <textarea name='comment' id='comment' placeholder='Conte como foi sua experiência com o produto.' required></textarea>
      </div>
    </div>
  )
}

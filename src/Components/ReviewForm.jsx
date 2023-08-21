import {
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsEmojiFrownFill,
  BsEmojiHeartEyesFill
} from 'react-icons/bs'

import './Reviewform.css'

export default function ReviewForm({ data, updateFieldHandler }) {

  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input type='radio' value='Insatisfeito' name='review' required
            checked={data.review === 'Insatisfeito'}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type='radio' value='Neutro' name='review' required
            checked={data.review === 'Neutro'}
            onChange={(e) => updateFieldHandler("review", e.target.value)} />
          <BsFillEmojiNeutralFill />
          <p>Neutro</p>
        </label>
        <label className="radio-container">
          <input type='radio' value='Satisfeito' name='review' required
            checked={data.review === 'Satisfeito'}
            onChange={(e) => updateFieldHandler("review", e.target.value)} />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type='radio' value='Muito Satisfeito' name='review' required
            checked={data.review === 'Muito Satisfeito'}
            onChange={(e) => updateFieldHandler("review", e.target.value)} />
          <BsEmojiHeartEyesFill />
          <p>Muito Satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor='comment'>Comentário</label>
        <textarea name='comment'
          id='comment'
          placeholder='Conte como foi sua experiência com o produto.'
          required
          value={data.comment || ''}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

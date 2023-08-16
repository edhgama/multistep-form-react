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
          <input type='radio' value='unsatisfied' name='review' required
            checked={data.review === 'unsatisfied'}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Instatisfeito</p>
        </label>
        <label className="radio-container">
          <input type='radio' value='neutral' name='review' required
            checked={data.review === 'neutral'}
            onChange={(e) => updateFieldHandler("review", e.target.value)} />
          <BsEmojiFrownFill />
          <p>Neutro</p>
        </label>
        <label className="radio-container">
          <input type='radio' value='sastified' name='review' required
            checked={data.review === 'sastified'}
            onChange={(e) => updateFieldHandler("review", e.target.value)} />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type='radio' value='very_satisfied' name='review' required
            checked={data.review === 'very_satisfied'}
            onChange={(e) => updateFieldHandler("review", e.target.value)} />
          <BsEmojiHeartEyesFill />
          <p>Instatisfeito</p>
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

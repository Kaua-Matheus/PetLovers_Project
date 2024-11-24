import logo from '../assets/Logo_700.png'
import PropTypes from 'prop-types'

export default function Card({image, title, text, text_button}){
  function navigation(){
    
  }

    return (
        <div class="card bg-base-100 image-full w-96 shadow-xl mx-0.5">
          <figure>
            <img
              src={image}
              alt={title} />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{title}</h2>
            <p>{text}</p>
              <div class="card-actions justify-end">
                <button onClick={navigation} class="btn bg-white border-black text-green-800">{text_button}</button>
              </div>
          </div>
      </div>
    )

}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text_button: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: 'Card Title',
  text: 'Texto padrão',
  text_button: 'Clique!',
  image: logo,
}

import './Card.scss';

function Card(props){
  return (
      <div className= "card">
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <h5 className="card__category">{props.category}</h5>
          <h5 className="card__serving">{props.serving}</h5>
        </div>
        <button className="card__btn">"View Recipe"</button>
      </div>
  )
}

export default Card

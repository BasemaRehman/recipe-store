import './Card.scss';

function Card(props){
  return (
    <div>
        <div className="card__body">
          <h2 className="card__title">{props.title}</h2>
          <h5 className="card__category">{props.category}</h5>
          <h5 className="card__serving">{props.serving}</h5>
          </div>
        </div>
  )
}

export default Card


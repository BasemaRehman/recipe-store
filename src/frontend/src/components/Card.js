function Card(props){
  return (
    <div className= "card">
      <div className="card_body">
        <h2 className="card_title">{props.title}</h2>
        <h5 className="card_serving">{props.serving}</h5>
        <h5 className="card_category">{props.category}</h5>
      </div>
      
    </div>
  )
}

export default Card


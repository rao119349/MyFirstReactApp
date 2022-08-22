function Card(props) {
  return (
    <>
      <div className="col-sm-12 col-md-3">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt=""/>
          <div className="card-body">
            <h4 className="card-title text-uppercase">{props.title}</h4>
            <p className="card-text">{props.cardsummary}</p>
            <a href={props.cardlink} className="btn btn-primary">Watch Now</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
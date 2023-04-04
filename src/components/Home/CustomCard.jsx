const CustomCard = (props) => {
    return (
        <div className="col-md-4 mb-4">
      <div className="card">
        {/* <img src={props.imageUrl} alt={props.imageAlt} className="card-img-top" /> */}
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          {/* <a href={props.linkUrl} className="btn btn-primary">{props.linkText}</a> */}
        </div>
      </div>
    </div>
    )
  }

  export default CustomCard;
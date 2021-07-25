import React from 'react'
import '../css/Card.css';

const Card = (project, key) => {
    // const [card, setCard] = useState([]);
    const {description, images ={}, skills, title} = project;
    console.log(images);
    return (
    <React.Fragment>
        <div className="card">
            <div className="card-hero" style={{backgroundImage: `url(${
              images
                ? images.mainImage
                : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
            })`}}>
                 {/* <img
            src={
              images
                ? images.mainImage
                : "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
            }
            alt={title}
          /> */}
                <h1 className="card-title">{title}</h1>
            </div>
            <div className="card-body">
                <div className="card-body-info">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </React.Fragment>
    )
}

export default Card

import { useState } from 'react' 
import { Link } from 'react-router-dom'

import "./Products.css";

export default function ProductCard(props) {

    let [view, setView] = useState(false);

    const simpleStyle = {
        'width': '25vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px'
    }

    const detailStyle = {
        'width': '80vw',
        'height': '20vh',
        'border': '1px solid black',
        'margin': '2px',
        // 'backgroundImage': `url(${})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h2>{props.name}</h2>
                <h3>{props.price}</h3>
                <h3>{props.category}</h3>
                <Link to={`/product/${props.name}`}>
                    <img src={props.image} alt="product" />
                </Link>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2>{props.name}</h2>
                <h3>{props.price}</h3>
                <h3>{props.category}</h3>
                <Link to={`/product/${props.name}`}>
                    <img src={props.image} alt="product" />
                </Link>
            </div>
        )
    }

    return (
        <div>
            {view ? detailView() : simpleView()}
            <button onClick={() => setView(!view)}>View</button>
export default function ProductCard({product}, index) {
    return (
        <div className="productCard">
            <main>
                            <div key={index}>
                                {/* <Link to={`/product/${product.title}`}> */}
                                    <h2>{product.title}</h2>
                                {/* </Link> */}
                                <h3>{product.price}</h3>
                                <h3>{product.category}</h3>
                                {/* <Link to={`/product/${product.title}`}> */}
                                    <img src={product.image} alt="product" />
                                {/* </Link> */}
                                <p>{product.details}</p>
                                <button>{product.checkOutButton}</button>
                                <h3>Reviews</h3>
                                <h4>{product.reviews[0].rating}</h4>
                                <p>{product.reviews[0].comment}</p>
                            </div>
            </main>
        </div>
    );
}

import { useState } from 'react' 
import { Link } from 'react-router-dom'

// import productsSeed from "../../SeedData/Product_Seed";
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
        </div>
    );
}

import{ Link } from "react-router-dom";

export default function Cart(props) {
    return (
        <div className="Cart">
            <Link to="/cart">
                <h1>Cart</h1>
                <p>0 items</p>
            </Link>
        </div>
    );
}
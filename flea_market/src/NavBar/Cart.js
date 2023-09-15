import { Link } from 'react-router-dom';

export default function Cart(props) {
    return (
        <div className="Cart">
            <Link to="/cart">Cart</Link>
            <h1>Cart Coming Soon!</h1>
        </div>
    );
}
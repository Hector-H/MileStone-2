import { Link } from 'react-router-dom';

import SearchBar from "./SearchBar";
import "./NavBar.css";

export default function NavBar(props) {
    return (
        <div className="NavBar">
            <li><Link to="/">FleaMarket</Link></li>
            <SearchBar />
            <li><Link to="/Cart">Cart</Link></li>
            <li><Link to="/ProfilePage">Profile</Link></li>
        </div>
    );
}

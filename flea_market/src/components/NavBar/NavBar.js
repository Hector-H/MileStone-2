import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import ProfilePage from "./ProfilePage";
import Cart from "./Cart";
import "./NavBar.css";

export default function NavBar(props) {
    return (
        <div className="NavBar">
            <Link to="/">
                <h1>Flea Market</h1>
                <p>Buy and sell used goods</p>
            </Link>
            <SearchBar />
            <Cart />
            <ProfilePage />
        </div>
    );
}
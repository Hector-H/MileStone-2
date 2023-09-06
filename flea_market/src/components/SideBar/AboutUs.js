import { Link } from "react-router-dom";

export default function AboutUs (props) {
    return (
        <div className="AboutUs">
            <Link to="/About_Us">
                <h1>About Us</h1>
            </Link>
        </div>
    );
}
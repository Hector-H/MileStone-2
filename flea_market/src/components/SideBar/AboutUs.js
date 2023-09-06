import { Link } from "react-router-dom";

export default function AboutUs (props) {
    return (
        <div className="AboutUs">
            {/* <Link to="/About_Us">
                <h1>About Us</h1>
            </Link> */}
            <h1>About Us</h1>
            <p>Our mission is to provide a platform for people to sell their used items to others who may have a need for them.</p>
            <p>Our goal is to reduce waste by reusing items that are still in good condition.</p>
            
        </div>
    );
}
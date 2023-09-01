import { Link } from "react-router-dom";

export default function Category(props) {
    return (
        <div className="Category">
            <Link to="/Category">
                <h1>Category</h1>
            </Link>
        </div>
    );
}
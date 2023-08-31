import { Link } from 'react-router-dom';

export default function ProfilePage(props) {
    return (
        <div className="ProfilePage">
            <Link to="/profile">
                <h1>Profile Page</h1>
                <p>View your profile</p>
            </Link>
        </div>
    );
}
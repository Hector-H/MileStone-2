import { Link } from 'react-router-dom';

export default function ProfilePage(props) {
    return (
        <div className="ProfilePage">
            <Link to="/Profile_Page">
                <h1>Profile Page</h1>
                <p>View your profile</p>
            </Link>
        </div>
    );
}
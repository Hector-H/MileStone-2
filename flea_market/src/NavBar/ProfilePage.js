export default function ProfilePage(props) {
    return (
        <div className="ProfilePage">
            <h1>Profile Page</h1>
            <p>Username: {props.username}</p>
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Email: {props.email}</p>
            <p>Phone Number: {props.phoneNumber}</p>
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zip Code: {props.zipCode}</p>
        </div>
    );
}
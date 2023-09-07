export default function ProfileCreate() {
    return (
        <div>
            <h2>Create a Profile</h2>
            <form action="/profiles" method="POST">
                <div>
                    <label htmlFor="username">User Name:</label>
                    <input 
                    type="text" 
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter Your First Name"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter Your Last Name"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    />
                </div>
                <div>
                    <label htmlFor="phone_number">Phone Number:</label>
                    <input
                    type="number"
                    name="phone_number"
                    id="phone_number"
                    placeholder="Enter Your Phone Number"
                    />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter Your Address"
                    />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter Your City"
                    />
                </div>
                <div>
                    <label htmlFor="state">State:</label>
                    <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Enter Your State"
                    />
                </div>
                <div>
                    <label htmlFor="zip_code">Zip Code:</label>
                    <input
                    type="number"
                    name="zip_code"
                    id="zip_code"
                    placeholder="Enter Your Zip Code"
                    />
                </div>
                <div>
                    <label htmlFor="website">Website:</label>
                    <input
                    type="text"
                    name="website"
                    id="website"
                    placeholder="Enter Your Website"
                    />
                </div>
                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
    )
}
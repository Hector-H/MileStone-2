// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import supabase from "../../supabaseClient";

// export default function ProfileCreate() {
//     const navigate = useNavigate();
//     const [name, setName] = useState("");
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [address, setAddress] = useState("");
//     const [city, setCity] = useState("");
//     const [state, setState] = useState("")
//     const [zipCode, setZipCode] = useState("");
//     const [website, setWebsite] = useState("");
//     const [formError, setFormError] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!name || !firstName || !lastName) {
//             setFormError("Fill Required Fields");
//             return;
//         }
//         const { data, error } = await supabase
//             .from("profiles")
//             .insert([{ name, firstName, lastName, email, phoneNumber, address, city, state, zipCode, website }])
//             .select();

//         if (error) {
//             console.log(error);
//             setFormError("Fill Required Fields");
//         }
//         if (data) {
//             console.log(data);
//             setFormError(null);
//             navigate("/");
//         }
//     }

//     return (
//         <div>
//             <h2>Create a Profile</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="username">User Name:</label>
//                     <input 
//                     type="text" 
//                     name="name"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Enter Your Name"
//                     required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="firstName">First Name:</label>
//                     <input
//                     type="text"
//                     name="firstName"
//                     id="firstName"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                     placeholder="Enter Your First Name"
//                     required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="lastName">Last Name:</label>
//                     <input
//                     type="text"
//                     name="lastName"
//                     id="lastName"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                     placeholder="Enter Your Last Name"
//                     required
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email:</label>
//                     <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter Your Email"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="phone_number">Phone Number:</label>
//                     <input
//                     type="number"
//                     name="phone_number"
//                     id="phone_number"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     placeholder="Enter Your Phone Number"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="address">Address:</label>
//                     <input
//                     type="text"
//                     name="address"
//                     id="address"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     placeholder="Enter Your Address"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="city">City:</label>
//                     <input
//                     type="text"
//                     name="city"
//                     id="city"
//                     value={city}
//                     onChange={(e) => setCity(e.target.value)}
//                     placeholder="Enter Your City"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="state">State:</label>
//                     <input
//                     type="text"
//                     name="state"
//                     id="state"
//                     value={state}
//                     onChange={(e) => setState(e.target.value)}
//                     placeholder="Enter Your State"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="zip_code">Zip Code:</label>
//                     <input
//                     type="number"
//                     name="zip_code"
//                     id="zip_code"
//                     value={zipCode}
//                     onChange={(e) => setZipCode(e.target.value)}
//                     placeholder="Enter Your Zip Code"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="website">Website:</label>
//                     <input
//                     type="text"
//                     name="website"
//                     id="website"
//                     value={website}
//                     onChange={(e) => setWebsite(e.target.value)}
//                     placeholder="Enter Your Website"
//                     />
//                 </div>
//                 <div>
//                     <button type="submit">Create User Profile</button>
//                 </div>
//                 {formError && <p className='error'>{formError}</p>}
//             </form>
//         </div>
//     )
// }
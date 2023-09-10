// Dependencies
import { Route, Routes, Link } from 'react-router-dom';
import Category from "../SideBar/Category";
import Distance from "../SideBar/Distance";
import AboutUs from "../SideBar/AboutUs";
import ContactUs from "../SideBar/ContactUs";
import HelpPage from "../SideBar/HelpPage";
// import supabase from "../../supabaseClient";
import ProductCreate from '../Product/ProductCreate';
import ProductById from '../Product/ProductById';
import "./SideBar.css";
import ProductEdit from '../Product/ProductEdit';
import ProfileCreate from '../Profile/ProfileCreate';

function SideBar(props) {

    // console.log(supabase)
    return (
        <div className="SideBar">
                <ul>
                    <li><Link to="/Category">Category</Link></li>
                    <li><Link to="/Distance">Distance</Link></li>
                    <li><Link to="/AboutUs">About Us</Link></li>
                    <li><Link to="/ContactUs">Contact Us</Link></li>
                    <li><Link to="/HelpPage">Help Page</Link></li>
                    <li><Link to="/ProductCreate">Create Listing</Link></li>
                    <li><Link to="/ProductByID">Listings</Link></li>
                    <li><Link to="/ProductEdit">Edit Listing</Link></li>
                    <li><Link to="/ProfileCreate">Create Profile</Link></li>
                </ul>
                <Routes>
                    <Route path="/Category" component={Category} />
                    <Route path="/Distance" component={Distance} />
                    <Route path="/AboutUs" component={AboutUs} />
                    <Route path="/ContactUs" component={ContactUs} />
                    <Route path="/HelpPage" component={HelpPage} />
                    <Route path="/ProductCreate" component={ProductCreate} />
                    <Route path="/ProductByID" component={ProductById} />
                    <Route path="/ProductEdit" component={ProductEdit}/>
                    <Route path="/ProfileCreate" component={ProfileCreate}/>
                </Routes>
                
        </div>
    );
}

export default SideBar;
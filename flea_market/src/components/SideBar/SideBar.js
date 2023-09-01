// Dependencies
import Category from "../SideBar/Category";
import Distance from "../SideBar/Distance";
import AboutUs from "../SideBar/AboutUs";
import ContactUs from "../SideBar/ContactUs";
import HelpPage from "../SideBar/HelpPage";

export default function SideBar(props) {
    return (
        <div className="SideBar">
        <Category />
        <Distance />
        <AboutUs />
        <ContactUs />
        <HelpPage />
        </div>
    );
}
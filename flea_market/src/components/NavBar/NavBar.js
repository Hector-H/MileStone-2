//Dependencies
import SearchBar from "./SearchBar";
import ProfilePage from "./ProfilePage";
import Cart from "./Cart";

export default function NavBar() {
    return (
        <div className="NavBar">
        <h1>Nav Bar</h1>
        <SearchBar />
        <Cart />
        <ProfilePage />
        </div>
    );
}
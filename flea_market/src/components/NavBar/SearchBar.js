export default function SearchBar() {
    return (
        <div className="SearchBar">
            <form>
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}
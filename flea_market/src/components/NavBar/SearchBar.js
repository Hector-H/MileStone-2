import { useState } from 'react';

export default function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="SearchBar">
            <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                <input type="text" placeholder="Enter a search term here" onChange={
                    (e) => setSearchTerm(e.target.value)
                } />

                <input type="submit" />
            </form>
        </div>
    );
}
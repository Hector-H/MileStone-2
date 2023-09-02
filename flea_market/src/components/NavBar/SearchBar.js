import { useState } from 'react';

export default function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState('Search for a product')
    const [searchResultsList, setSearchResultsList] = useState([])

    // Search for products
    const searchProducts = (e, searchTerm) => {
        e.preventDefault();
        setSearch(searchTerm);
        console.log(searchTerm);
        console.log(search);
        console.log(products);
        const results = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResultsList(results);
        console.log(searchResultsList);
    }

    return (
        <div className="SearchBar">
            <form onSubmit={(e) => searchProducts(e, searchTerm)}>
                <input
                    type="text"
                    placeholder="Search for a product"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}
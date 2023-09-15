import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import supabase from "../supabaseClient";


export default function SearchResults(props) {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    // Search for products by any word 
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await supabase
                .from("products")
                .select("*")
            setData(data);
        };
        fetchProducts();
    }, [])
        
    const handleSearch = (e, term) => {
        e.preventDefault();
        setSearch(term);
    }

    return (
        <div>
            <form onSubmit={(e) => props.searchProducts(e, search)}>
                <input
                    type="text"
                    placeholder="Search for a product"
                    onChange={(e) => handleSearch(e)}
                />
                <button type="submit">Search</button>
            </form>
            <div>
                {data.map((product) => {
                    if (product.title.toLowerCase().includes(search.toLowerCase())) {
                        return (
                            <div>
                                <Link to={`/products/${product.id}`}>
                                    <h3>{product.title}</h3>
                                </Link>
                                <p>{product.description}</p>
                                <p>{product.price}</p>
                                <p>{product.category}</p>
                            </div>
                        )
                    }
                })}
                
            </div>
        </div>
    )
}
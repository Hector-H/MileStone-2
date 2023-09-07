import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import supabase from "../../supabaseClient";

export default function ProductById({match}) {
    const productId = useParams();

    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase
                .from("products")
                .select()
                .eq("id", productId.id);

            if (error) {
                setProducts(null);
                console.log(error);
            }
            if (data) {
                setProducts(data[0]);
            }
        };
        fetchProducts();
    })

    return (
        <div>
            <h2>Product by Id</h2>
            {products && (
                <div>
                    <h3>{products.title}</h3>
                    <h3>{products.details}</h3>
                    <h3>{products.dateposted}</h3>
                    <h3>${products.price}</h3>
                    <h3>{products.category}</h3>
                    <h3>{products.reviews}</h3>
                    <img src={products.image} alt="product" />
                    <button>{products.checkOutButton}</button>
                </div>
            )}
            <Link to="/">Back to Products</Link>
        </div>
    );
}

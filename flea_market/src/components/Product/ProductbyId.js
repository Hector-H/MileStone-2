import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import supabase from "../../supabaseClient";
import ProductCard from "./ProductCard";

export default function ProductById({ match }) {
    const productId = useParams();
    const handleDelete = async () => {
        const { data, error } = await supabase
            .from('products')
            .delete()
            .eq('id', products.id)
            .select()

        if (error) {
            console.log(error)
        }
        if (data) {
            console.log(data)
                .onDelete(products.id)
        }
    }


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
            if (data && data.length > 0) {
                setProducts(data[0]);

            } else {
                setProducts(null);
            }
        };
        fetchProducts();
    }, [productId])

    if (!products) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Link to={`/products/${products.id}`}>{products.title}</Link>
            <h3>{products.details}</h3>
            <h3>{products.dateposted}</h3>
            <h3>${products.price}</h3>
            <h3>{products.category}</h3>
            <h3>{products.reviews}</h3>
            <img src={products.image} alt="product" />
            <Link to={'/products/edit/' + products.id}>
                <i className="material-icons">edit</i>
            </Link>
            <i className="material-icons" onClick={handleDelete}>delete</i>
        </div>
    )
}

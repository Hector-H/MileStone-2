import { Link } from "react-router-dom";

import productsSeed from "../../SeedData/Product_Seed";
import "./Products.css";

export default function ProductCard() {
    return (
        <div className="productCard">
            <main>
                {
                    productsSeed.map((product, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/product/${product.name}`}>
                                    <h2>{product.name}</h2>
                                </Link>
                                <h3>{product.price}</h3>
                                <h3>{product.category}</h3>
                                <Link to={`/product/${product.name}`}>
                                    <img src={product.image} alt="product" />
                                </Link>
                                <p>{product.details}</p>
                                <button>{product.checkOutButton}</button>
                                <h3>Reviews</h3>
                                <h4>{product.reviews[0].rating}</h4>
                                <p>{product.reviews[0].comment}</p>
                            </div>
                        )
                    })
                }
            </main>
        </div>
    );
}

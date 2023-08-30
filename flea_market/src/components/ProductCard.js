import productsSeed from "../SeedData/Product_Seed";

export default function ProductCard() {
    return (
        <div className="product">
            <main>
                {
                    productsSeed.map((product, index) => {
                        return (
                            <div key={index}>
                                <h2>{product.name}</h2>
                                <h3>{product.price}</h3>
                                <h3>{product.category}</h3>
                                <img src={product.image} alt="product" />
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

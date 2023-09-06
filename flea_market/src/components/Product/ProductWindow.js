//Dependencies
import ProductCard from "./ProductCard";
import "./Products.css";

export default function ProductWindow({ seeds }) {
    // const display = props.map((item,index) => {
    //     return (
    //         <div>
    //         <ProductCard item={item} key={index} />
    //         </div>
    //     )
    // })

    return (
        <div>
            {/* {display} */}
            {seeds.map((seed) => {
                const { id, name, price, image } = seed;
                return (
                    <article key={id}>
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{price}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

{/* <Routes>
    <Route path="/" element={<ProductCard />} />
    <Route path="/" element={<ProductCard />} />
    <Route path="/" element={<ProductCard />} />
    <Route path="/" element={<ProductCard />} />
</Routes> */}
//Dependencies
import ProductCard from "./ProductCard";
import "./Products.css";

export default function ProductWindow(props) {
    const display = props.data.map((item,index) => {
        return (
            <ProductCard item={item} key={index} />
        )
    })
    return (
        <div>
            {display}
        </div>
    )
}

{/* <Routes>
    <Route path="/" element={<ProductCard />} />
    <Route path="/" element={<ProductCard />} />
    <Route path="/" element={<ProductCard />} />
    <Route path="/" element={<ProductCard />} />
</Routes> */}
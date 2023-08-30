//Dependencies
import { Routes, Route } from "react-router-dom";

import ProductCard from "./ProductCard";
import "./Products.css";

export default function ProductWindow() {
    return (
        <div className="ProductWindow">
            <Routes>
                <Route path="/" element={<ProductCard />} />
                <Route path="/" element={<ProductCard />} />
                <Route path="/" element={<ProductCard />} />
                <Route path="/" element={<ProductCard />} />
            </Routes>
        </div>
    );
}
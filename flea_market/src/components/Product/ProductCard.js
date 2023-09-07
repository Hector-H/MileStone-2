// import { useState } from 'react'
import { Link } from 'react-router-dom'
import supabase from "../../supabaseClient"

const ProductCard = ({ product }) => {
    return (
        <div>
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                        <h3>{product.details}</h3>
                        <h3>{product.dateposted}</h3>
                        <h3>${product.price}</h3>
                        <h3>{product.category}</h3>
                        <h3>{product.reviews}</h3>
                        <img src={product.image} alt="product" />
                        <button>{product.checkOutButton}</button>
                        
        </div>
    )
}

export default ProductCard

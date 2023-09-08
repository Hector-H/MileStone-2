// import { useState } from 'react'
import { Link } from 'react-router-dom'
import supabase from "../../supabaseClient"

const ProductCard = ({ product, onDelete }) => {

    const handleDelete = async () => {
        const { data, error } = await supabase
        .from('products')
        .delete()
        .eq('id', product.id)
        .select()

        if(error) { 
            console.log(error)
        }
        if(data) {
            console.log(data)
            onDelete(product.id)
        }
    }

    return (
        <div>
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                        <h3>{product.details}</h3>
                        <h3>{product.dateposted}</h3>
                        <h3>${product.price}</h3>
                        <h3>{product.category}</h3>
                        <h3>{product.reviews}</h3>
                        <img src={product.image} alt="product" />
                        {/* <button> */}
                        <div>
                            <Link to={'/products/edit/' + product.id}>
                                <i className="material-icons">edit</i>
                            </Link>
                            <i className="material-icons" onClick={handleDelete}>delete</i>
                            {/* {product.checkOutButton}</button> */}</div>
                        
        </div>
    )
}

export default ProductCard

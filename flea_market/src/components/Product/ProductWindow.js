//Dependencies
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import supabase from '../../supabaseClient'

import "./Products.css";

export default function ProductWindow({ seeds }) {
    const [fetchError, setFetchError] = useState(null)
    const [products, setProducts] = useState(null)

    // Fetch products from API
    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase
                .from('products')
                .select()

            if (error) {
                setFetchError('could not fetch products')
                setProducts(null)
                console.log(error)
            }
            if (data) {
                setProducts(data)
                setFetchError(null)
            }
        }
        fetchProducts()


    }, [])

    return (
        <div>
            {fetchError && (<p>{fetchError}</p>)}
            {products && (
                <div className='products'>
                    {products.map(product => (
                        <>
                            <Link to={`/products/${product.id}`}>
                                <h2>{product.title}</h2>
                            </Link>
                            <h3>{product.details}</h3>
                            <h3>{product.dateposted}</h3>
                            <h3>${product.price}</h3>
                            <h3>{product.category}</h3>
                            <h3>{product.reviews}</h3>
                            <img src={product.image} alt="product" />
                            <button>{product.checkOutButton}</button>
                        </>
                    ))}
                </div>
            )}
        </div>
    )
}

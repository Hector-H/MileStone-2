//Dependencies
import { useEffect, useState } from 'react'
import supabase from '../../supabaseClient'

import "./Products.css";

export default function ProductWindow({ seeds }) {
    const [fetchError, setFetchError] = useState(null)    
    const [products, setProducts] = useState(null)

    // Fetch products from API
    useEffect(() => {
            const fetchProducts = async () => {
                const {data, error } = await supabase
                .from('products')
                .select()

                    if (error) {
                        setFetchError('could not fetch products')
                        setProducts(null)
                        console.log(error)
                    }
                    if(data) {
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
                        <p> {product.title}</p>
                    ))}
                </div>
            )}
        </div>
    )
}

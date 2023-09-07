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
                        <>
                        <h2>{product.title}</h2>
                        <img src={product.image} alt="product" />
                        
                        <h3>{product.details}</h3>
                        <h3>{product.dateposted}</h3>
                        <h3>${product.price}</h3>
                        <h3>{product.category}</h3>
                        <h3>{product.reviews}</h3>
                        
                        <button>{product.checkOutButton}</button>
                    </>
                    ))}
                </div>
            )}
        </div>
    )
}

{/* <div>
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
</div> */}
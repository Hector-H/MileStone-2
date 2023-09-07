//Dependencies
import { useEffect, useState } from 'react'

import "./Products.css";

export default function ProductWindow({ seeds }) {
    const [products, setProducts] = useState([])

    // Fetch products from API
    useEffect(() => {
        const FleaMarketAPI = () => {
            const fetchData = async () => {
                const res = await fetch('http://localhost:3000/products')
                const json = await res.json()
                setProducts(json)
            }
            fetchData()
        }
        FleaMarketAPI()
    }, [])

    return (
        <div>
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
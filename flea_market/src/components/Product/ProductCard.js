// import { useState } from 'react'
// import { Link } from 'react-router-dom'

// import "./Products.css";

// export default function ProductCard({ product }, index) {
//     return (
//         <div className="productCard">
//             <main>
//                 <div key={index}>
//                     <Link to={`/product/${product.title}`}>
//                         <h2>{product.title}</h2>
//                     </Link>
//                     <h3>{product.price}</h3>
//                     <h3>{product.category}</h3>
//                     <Link to={`/product/${product.title}`}>
//                         <img src={product.image} alt="product" />
//                     </Link>
//                     <Link to={`/product/${product.title}`}>
//                         <h2>{product.title}</h2>
//                     </Link>
//                     <h3>{product.price}</h3>
//                     <h3>{product.category}</h3>
//                     <Link to={`/product/${product.title}`}>
//                         <img src={product.image} alt="product" />
//                     </Link>
//                     <p>{product.details}</p>
//                     <button>{product.checkOutButton}</button>
//                     <h3>Reviews</h3>
//                     <h4>{product.reviews[0].rating}</h4>
//                     <p>{product.reviews[0].comment}</p>
//                 </div>
//             </main>
//         </div>
//     );
// }

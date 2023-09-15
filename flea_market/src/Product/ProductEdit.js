// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import supabase from "../supabaseClient";

// export default function ProductEdit() {
//     const { id } = useParams()
//     const navigate = useNavigate()

//     const [title, setTitle] = useState('')
//     const [details, setDetails] = useState('')
//     const [price, setPrice] = useState('')
//     const [category, setCategory] = useState('')
//     const [image, setImage] = useState('')
//     const [formError, setFormError] = useState(null)

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         if(!title || !details || !image) {
//             setFormError('Fill Required Fields')
//             return 
//         }

//         const { data, error } = await supabase 
//         .from('products')
//         .update({ title, details, price, category, image })
//         .eq('id', id)
//         .select()

//         if(error) {
//             console.log(error)
//             setFormError('Fill Required Fields')
//         }
//         if(data){
//             console.log(data)
//             setFormError(null)
//             navigate('/')
//         }
//     }

//     useEffect(() =>{
//         const fetchProduct = async () => {
//             const {data, error } = await supabase
//             .from('products')
//             .select()
//             .eq('id', id)
//             .single()

//             if(error) {
//                 navigate('/', { replace: true })
//             }
//             if(data) {
//                 setTitle(data.title)
//                 setDetails(data.details)
//                 setPrice(data.price)
//                 setCategory(data.category)
//                 setImage(data.image)
//                 console.log(data)
//             }
//         }
//         fetchProduct()
//     }, [id, navigate])

//     return (
//         <div>
//             <h2>Edit Product { id }</h2>
//             {/* Add a form to edit a product */}
//             <form onSubmit={handleSubmit}>
                
//                     <label htmlFor="title">Title:</label>
//                     <input 
//                     type="text" 
//                     name="title"
//                     id="title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     placeholder="Enter Product Title"
//                     required
//                     />
                
                
//                     <label htmlFor="details">Details:</label>
//                     <textarea
//                     type="text"
//                     name="details"
//                     id="details"
//                     value={details}
//                     onChange={(e) => setDetails(e.target.value)}
//                     placeholder="Enter Product Details"
//                     />
                
                
//                     <label htmlFor="price">Price:</label>
//                     <input
//                     type="number"
//                     name="price"
//                     id="price"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     placeholder="Enter Product Price"
//                     />
                
                
//                     <label htmlFor="category">Category:</label>
//                     <input
//                     type="text"
//                     name="category"
//                     id="category"
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                     placeholder="Enter Product Category"
//                     />
                
                
//                     <label htmlFor="image">Image:</label>
//                     <input
//                     type="text"
//                     name="image"
//                     id="image"
//                     value={image}
//                     pattern="^(https?://)?[^\s/$.?#].[^\s]*.(jpg|jpeg|gif|png|bmp)$"
//                     onChange={(e) => setImage(e.target.value)}
//                     placeholder="Enter Product Image"
//                     required
//                     />
                
//                     <button>Edit Product Listing</button>
            
//                 {formError && <p className='error'>{formError}</p>}
//             </form>
//         </div>
//     );
// }
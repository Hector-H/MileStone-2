import { useState } from 'react';
import supabase from '../../supabaseClient'


export default function ProductCreate() {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!title || !details || !image) {
            setFormError('Fill Required Fields')
            return 
        }
        
        const { data, error} = await supabase
        .from('products')
        .insert([ { title, details, price, category, image}])

        if (error) {
            console.log(error)
            setFormError('Fill Required Fields')
        }
        if (data) {
            console.log(data)
            setFormError(null)
        }
    }

    return (
        <div>
            <h2>List A Product</h2>
            {/* Add a form to create a product */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input 
                    type="text" 
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Product Title"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="details">Details:</label>
                    <textarea
                    type="text"
                    name="details"
                    id="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Enter Product Details"
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                    type="number"
                    name="price"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter Product Price"
                    />
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input
                    type="text"
                    name="category"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Enter Product Category"
                    />
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input
                    type="text"
                    name="image"
                    id="image"
                    value={image}
                    pattern="^(https?://)?[^\s/$.?#].[^\s]*.(jpg|jpeg|gif|png|bmp)$"
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Enter Product Image"
                    required
                    />
                </div>
                <div>
                    <button type="submit">Create Product Listing</button>
                </div>
                {formError && <p className='error'>{formError}</p>}
            </form>
        </div>
    );
}

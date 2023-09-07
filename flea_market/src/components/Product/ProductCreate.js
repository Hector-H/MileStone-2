export default function ProductCreate() {
    return (
        <div>
            <h2>List A Product</h2>
            {/* Add a form to create a product */}
            <form action="/products" method="POST">
                <div>
                    <label htmlFor="title">Title:</label>
                    <input 
                    type="text" 
                    name="title"
                    id="title"
                    placeholder="Enter Product Title"
                    required
                    />
                </div>
                <div>
                    <label htmlFor="details">Details:</label>
                    <input
                    type="text"
                    name="details"
                    id="details"
                    placeholder="Enter Product Details"
                    />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Enter Product Price"
                    />
                </div>
                <div>
                    <label htmlFor="category">Category:</label>
                    <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Enter Product Category"
                    />
                </div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input
                    type="text"
                    name="image"
                    id="image"
                    pattern="^(https?:\/\/)?[^\s/$.?#].[^\s]*\.(jpg|jpeg|gif|png|bmp)$"
                    placeholder="Enter Product Image"
                    required
                    />
                </div>
                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
    );
}

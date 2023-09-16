import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap';

const ProductCard = ({ product }) => {
    return (
        <Card>
            <Link to={`/products/${product.id}`}>{product.title}
            <img src={product.image} alt="product" className='card-img-top'/>
            </Link>
            <Card.Body>
                <Card.Text>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
    }
    export default ProductCard
import { Card, Col, Row, Typography } from 'antd';
import { ProductVariant } from '../../Pages/Categories/Categories.interface';
import './Products.css'
const { Text } = Typography;

const Products = (props: { products: ProductVariant[] }) => {
    const { products } = props;
    return (
        <Row gutter={[16, 16]} className='Row'>
            {products.map(product => (
                <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                    <Card
                        className='Card'
                        title={product.name}
                        cover={
                            <img className='Card-cover' alt={product.name} src={product.image} />
                        }
                    >
                        <Text>{product.description}</Text>
                        <ul>
                            {product.variants.map(variant => (
                                <li key={variant}>{variant}</li>
                            ))}
                        </ul>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default Products;
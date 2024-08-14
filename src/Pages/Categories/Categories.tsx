import { Card, Typography } from 'antd';
import 'antd/dist/reset.css';
import { Category } from '../../Pages/Categories/Categories.interface';
import Products from '../../Components/Products/Products';

const { Title, Text } = Typography;
const ProductsCategory = (props: { category: Category }) => {
    const { category } = props
    return (
        <>
            <div style={{ overflow: 'auto' }}>
                <Card
                    key={category.id}
                    title={<Title level={3}>{category.name}</Title>}
                    cover={<img alt={category.name} src={category.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />}
                    style={{ marginBottom: '20px' }}
                >
                    <Text>{category.description}</Text>
                    <Products products={category.products} />
                </Card>
            </div>
        </>
    )
}

export default ProductsCategory;
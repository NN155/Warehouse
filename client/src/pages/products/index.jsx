import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { ProductService } from '../../services';
import { useParams } from 'react-router-dom';
import { ProductComponents } from '../../components';

const ProductPage = () => {
    const { id } = useParams();
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        ProductService.getByStore(id).then((data) => {
            setProducts(data);
        });
    }, [id]);

    const groupedProducts = products.reduce((acc, product) => {
        acc[product.category] = acc[product.category] || [];
        acc[product.category].push(product);
        return acc;
    }, {});

    const onSave = (product) => {
        ProductService.update(product).then((data) => {
            setProducts((prev) => prev.map((p) => (p._id === data._id ? data : p)));
        });
    };

    const onAddProduct = (newProduct, category) => {
        const productWithCategory = { ...newProduct, category };
        ProductService.create(productWithCategory).then((data) => {
            setProducts((prev) => [...prev, data]);
        });
    };

    return (
        <Box p={8} bg="gray.100">
            <Heading textAlign="center" mb={8}>Inventory for Store</Heading>

            {Object.keys(groupedProducts).map((category) => (
                <ProductComponents.Category
                    key={category}
                    category={category}
                    products={groupedProducts[category]}
                    onSave={onSave}
                    onAddProduct={onAddProduct}
                />
            ))}
        </Box>
    );
};

export { ProductPage };

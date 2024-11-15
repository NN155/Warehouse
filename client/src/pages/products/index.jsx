import React, { useState, useEffect } from 'react';
import { Box, Heading, Button, Input, Select } from '@chakra-ui/react';
import { ProductService } from '../../services';
import { useParams } from 'react-router-dom';
import { ProductComponents } from '../../components';
import { useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import AddCategoryModal from '../../components/product/AddCategoryModal';

const ProductPage = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        ProductService.getByStore(id).then((data) => {
            setProducts(data);
            setFilteredProducts(data);
        });
    }, [id]);

    const groupedProducts = filteredProducts.reduce((acc, product) => {
        acc[product.category] = acc[product.category] || [];
        acc[product.category].push(product);
        return acc;
    }, {});

    const onSave = (product) => {
        ProductService.update(product).then((data) => {
            setProducts((prev) => prev.map((p) => (p._id === data._id ? data : p)));
            filterProducts(searchTerm, selectedCategory);
        });
    };

    const onAdd = (product) => {
        ProductService.create(product).then((data) => {
            setProducts((prev) => [...prev, data]);
            filterProducts(searchTerm, selectedCategory);
        });
    };

    const onDelete = (id) => {
        ProductService.delete(id).then(() => {
            setProducts((prev) => prev.filter((p) => p._id !== id));
            filterProducts(searchTerm, selectedCategory);
        });
    };

    const handleAddNewCategory = () => {
        if (!newCategory.trim()) return;

        const newProduct = {
            name: '',
            manufacturer: '',
            price: 0,
            quantity: 0,
            arrivalDate: new Date(),
            category: newCategory.trim(),
            store: id,
        };

        onAdd(newProduct);
        setNewCategory('');
        onClose();
    };

    const filterProducts = (searchTerm, selectedCategory) => {
        let filtered = products;

        if (searchTerm.trim()) {
            filtered = filtered.filter((product) =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedCategory) {
            filtered = filtered.filter((product) => product.category === selectedCategory);
        }

        setFilteredProducts(filtered);
    };

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        filterProducts(value, selectedCategory);
    };

    const handleCategoryChange = (e) => {
        const value = e.target.value;
        setSelectedCategory(value);
        filterProducts(searchTerm, value);
    };

    return (
        <Box p={8} bg="gray.100" position="relative">
            <Heading textAlign="center" mb={8}>Inventory for Store</Heading>

            <Box mb={4} display="flex" gap={4}>
                <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <Select
                    placeholder="Filter by category"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    {Array.from(new Set(products.map((p) => p.category))).map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </Select>
            </Box>

            {Object.keys(groupedProducts).map((category) => (
                <ProductComponents.Category
                    key={category}
                    category={category}
                    products={groupedProducts[category]}
                    onSave={onSave}
                    onAdd={onAdd}
                    onDelete={onDelete}
                    data={{
                        store: id,
                        arrivalDate: new Date(),
                        price: 0,
                        quantity: 0,
                        name: '',
                        manufacturer: '',
                    }}
                />
            ))}

            <Button
                colorScheme="blue"
                onClick={onOpen}
                position="absolute"
                top="20px"
                right="20px"
                borderRadius="50%"
                width="50px"
                height="50px"
                fontSize="2xl"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <AddIcon boxSize={6} />
            </Button>

            <AddCategoryModal
                isOpen={isOpen}
                onClose={onClose}
                newCategory={newCategory}
                setNewCategory={setNewCategory}
                onAddCategory={handleAddNewCategory}
            />
        </Box>
    );
};

export { ProductPage };

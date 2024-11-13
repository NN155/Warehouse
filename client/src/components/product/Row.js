import React, { useState } from 'react';
import { Tr, Td, Button, Input } from '@chakra-ui/react';

const Row = ({ product, onSave, onAdd }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState({ ...product });

    const handleEditClick = () => setIsEditing(true);

    const handleSaveClick = () => {
        console.log("click")
        setIsEditing(false);
        console.log('editedProduct:', editedProduct);
        if (product._id) {
            onSave(editedProduct);
        } else {
            onAdd(editedProduct);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <Tr>
            <Td>
                {isEditing ? (
                    <Input
                        name="name"
                        value={editedProduct.name}
                        onChange={handleChange}
                        placeholder="Product Name"
                    />
                ) : (
                    product.name || 'New Product'
                )}
            </Td>
            <Td>
                {isEditing ? (
                    <Input
                        name="manufacturer"
                        value={editedProduct.manufacturer}
                        onChange={handleChange}
                        placeholder="Manufacturer"
                    />
                ) : (
                    product.manufacturer || 'N/A'
                )}
            </Td>
            <Td>
                {isEditing ? (
                    <Input
                        name="price"
                        type="number"
                        value={editedProduct.price}
                        onChange={handleChange}
                        placeholder="Price"
                    />
                ) : (
                    product.price ? `$${product.price.toFixed(2)}` : 'N/A'
                )}
            </Td>
            <Td>
                {isEditing ? (
                    <Input
                        name="quantity"
                        type="number"
                        value={editedProduct.quantity}
                        onChange={handleChange}
                        placeholder="Quantity"
                    />
                ) : (
                    product.quantity || '0'
                )}
            </Td>
            <Td>
                {isEditing ? (
                    <Input
                        name="arrivalDate"
                        type="date"
                        value={new Date(editedProduct.arrivalDate)
                            .toISOString()
                            .slice(0, 10)}
                        onChange={handleChange}
                    />
                ) : (
                    product.arrivalDate ? new Date(product.arrivalDate).toLocaleDateString() : 'N/A'
                )}
            </Td>
            <Td>
                {isEditing ? (
                    <Input
                        name="expirationDate"
                        type="date"
                        value={
                            editedProduct.expirationDate
                                ? new Date(editedProduct.expirationDate)
                                      .toISOString()
                                      .slice(0, 10)
                                : ''
                        }
                        onChange={handleChange}
                    />
                ) : (
                    product.expirationDate
                        ? new Date(product.expirationDate).toLocaleDateString()
                        : 'N/A'
                )}
            </Td>
            <Td>
                {isEditing ? (
                    <Button colorScheme="green" onClick={handleSaveClick}>
                        Save
                    </Button>
                ) : (
                    <Button colorScheme="blue" onClick={handleEditClick}>
                        {product._id ? 'Edit' : 'Add'} 
                    </Button>
                )}
            </Td>
        </Tr>
    );
};

export default Row;

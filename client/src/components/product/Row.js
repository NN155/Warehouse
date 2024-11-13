import React, { useState } from 'react';
import { Tr, Td, Button, Input, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { ProductContext } from './Category';
import { HiOutlineX } from 'react-icons/hi'; // Іконка для хрестику
import ConfirmDeleteModal from './ConfirmDeleteModal';

const Row = ({ product }) => {
    const { onSave, onAdd, onDelete } = React.useContext(ProductContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState({ ...product });
    const { isOpen, onOpen, onClose } = useDisclosure(); // Для модального вікна

    const handleEditClick = () => setIsEditing(true);

    const handleSaveClick = () => {
        setIsEditing(false);
        if (editedProduct._id) {
            onSave(editedProduct);
        } else {
            onAdd(editedProduct);
        }
    };

    const handleDeleteClick = () => {
        onOpen(); // Відкриваємо модальне вікно при натисканні на хрестик
    };

    const confirmDelete = () => {
        onDelete(product._id);
        onClose(); // Закриваємо модальне вікно після підтвердження
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const formatDate = (date) => {
        if (date) {
            const parsedDate = new Date(date);
            return isNaN(parsedDate) ? '' : parsedDate.toISOString().slice(0, 10); 
        }
        return '';
    };

    const isNewProduct = !product._id;

    return (
        <Tr>
            <Td>
                <div style={{ color: isNewProduct ? 'gray' : 'black' }}>
                    {isEditing ? (
                        <Input
                            name="name"
                            value={editedProduct.name || ''}
                            onChange={handleChange}
                            placeholder="Product Name"
                        />
                    ) : (
                        product.name || 'New Product'
                    )}
                </div>
            </Td>
            <Td>
                <div style={{ color: isNewProduct ? 'gray' : 'black' }}>
                    {isEditing ? (
                        <Input
                            name="manufacturer"
                            value={editedProduct.manufacturer || ''}
                            onChange={handleChange}
                            placeholder="Manufacturer"
                        />
                    ) : (
                        product.manufacturer || 'N/A'
                    )}
                </div>
            </Td>
            <Td>
                <div style={{ color: isNewProduct ? 'gray' : 'black' }}>
                    {isEditing ? (
                        <Input
                            name="price"
                            type="number"
                            value={editedProduct.price || ''}
                            onChange={handleChange}
                            placeholder="Price"
                        />
                    ) : (
                        product.price ? `$${product.price.toFixed(2)}` : 'N/A'
                    )}
                </div>
            </Td>
            <Td>
                <div style={{ color: isNewProduct ? 'gray' : 'black' }}>
                    {isEditing ? (
                        <Input
                            name="quantity"
                            type="number"
                            value={editedProduct.quantity || ''}
                            onChange={handleChange}
                            placeholder="Quantity"
                        />
                    ) : (
                        product.quantity || '0'
                    )}
                </div>
            </Td>
            <Td>
                <div style={{ color: isNewProduct ? 'gray' : 'black' }}>
                    {isEditing ? (
                        <Input
                            name="arrivalDate"
                            type="date"
                            value={formatDate(editedProduct.arrivalDate)}
                            onChange={handleChange}
                        />
                    ) : (
                        product.arrivalDate ? new Date(product.arrivalDate).toLocaleDateString() : 'N/A'
                    )}
                </div>
            </Td>
            <Td>
                <div style={{ color: isNewProduct ? 'gray' : 'black' }}>
                    {isEditing ? (
                        <Input
                            name="expirationDate"
                            type="date"
                            value={formatDate(editedProduct.expirationDate)}
                            onChange={handleChange}
                        />
                    ) : (
                        product.expirationDate ? new Date(product.expirationDate).toLocaleDateString() : 'N/A'
                    )}
                </div>
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
                {!isNewProduct && (
                    <IconButton
                        colorScheme="red"
                        aria-label="Delete"
                        icon={<HiOutlineX />}
                        onClick={handleDeleteClick}
                        ml={2}
                    />
                )}
            </Td>

            {/* Модальне вікно для підтвердження видалення */}
            <ConfirmDeleteModal
                isOpen={isOpen}
                onClose={onClose}
                onConfirm={confirmDelete}
                message="Are you sure you want to delete this product? This action cannot be undone."
            />
        </Tr>
    );
};

export default Row;

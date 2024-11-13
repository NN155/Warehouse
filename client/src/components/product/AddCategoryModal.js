import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Input } from '@chakra-ui/react';

const AddCategoryModal = ({ isOpen, onClose, newCategory, setNewCategory, onAddCategory }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
                display="flex"
                flexDirection="column"
                justifyContent="center"  
                alignItems="center"      
                top="25%"                 
            >
                <ModalHeader>Add New Category</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Input
                        placeholder="Enter new category name"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" onClick={onAddCategory}>
                        Add Category
                    </Button>
                    <Button onClick={onClose} ml={3}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AddCategoryModal;

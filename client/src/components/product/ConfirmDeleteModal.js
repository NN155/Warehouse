import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
} from '@chakra-ui/react';

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, message }) => (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Confirm Deletion</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {message || 'Are you sure you want to delete this item? This action cannot be undone.'}
            </ModalBody>
            <ModalFooter>
                <Button colorScheme="red" onClick={onConfirm}>
                    Delete
                </Button>
                <Button onClick={onClose} ml={3}>
                    Cancel
                </Button>
            </ModalFooter>
        </ModalContent>
    </Modal>
);

export default ConfirmDeleteModal;

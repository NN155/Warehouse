import React, { useState } from 'react';
import { VStack, Box, Heading, IconButton, Collapse } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import Table from './Table';

const Category = ({ category, products, onSave }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCategory = () => setIsOpen(!isOpen);

    return (
        <VStack align="start" w="full" mb={6}>
            <Box display="flex" alignItems="center" justifyContent="space-between" w="full" p={4} bg="gray.200">
                <Heading size="md">{category}</Heading>
                <Box>
                    <IconButton
                        icon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        onClick={toggleCategory}
                        variant="ghost"
                        aria-label="Toggle category"
                    />
                </Box>
            </Box>

            <Collapse in={isOpen}>
                <Table products={products} onSave={onSave} />
            </Collapse>
        </VStack>
    );
};

export default Category;

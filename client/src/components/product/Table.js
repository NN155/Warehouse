import React from 'react';
import { Table as Tb, Thead, Tbody, Tr, Th, Button } from '@chakra-ui/react';
import Row from './Row';

const Table = ({ products, onSave, onAdd }) => {
    return (
        <div>
            <Tb variant="simple" bg="white">
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Manufacturer</Th>
                        <Th>Price</Th>
                        <Th>Quantity</Th>
                        <Th>Arrival Date</Th>
                        <Th>Expiration Date</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {products.map((product) => (
                        <Row key={product._id} product={product} onSave={onSave} onAdd={onAdd} />
                    ))}
                    <Row product={{}} onSave={onSave} onAdd={onAdd} />
                </Tbody>
            </Tb>
        </div>
    );
};

export default Table;

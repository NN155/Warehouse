// components/StoreCard.js
import React from 'react';
import { Card, CardBody, Text, Stack, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const StoreCard = ({ store }) => {
    return (
        <Card 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden" 
            width="100%"  
            maxW="100%"   
            boxShadow="md"
            display="flex"
            flexDirection="column"  
            height="100%"           
        >
            <CardBody 
                display="flex" 
                flexDirection="column" 
                justifyContent="space-between"  
                flex="1"  
            >
                <Stack spacing={3}>
                    <Text fontWeight="bold" fontSize="lg">
                        Location: {store.city}, {store.street} {store.buildingNumber}
                    </Text>
                    <Text>Country: {store.country}</Text>
                    <Text>Region: {store.region || "N/A"}</Text>
                    <Text>Phone: {store.phoneNumber}</Text>
                    <Text>Email: {store.email}</Text>
                </Stack>
                <Flex justify="center" mt={4}>
                    <Link to={`/stores/${store._id}`}>
                        <Button colorScheme="blue">
                            View Inventory
                        </Button>
                    </Link>
                </Flex>
            </CardBody>
        </Card>
    );
};

export default StoreCard;

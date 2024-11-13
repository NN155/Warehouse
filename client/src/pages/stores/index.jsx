import React from 'react';
import { Box, Grid, Heading } from '@chakra-ui/react';
import {StoreCard} from '../../components';
import {StoreService} from '../../services';

const StorePage = () => {
    const [stores, setStores] = React.useState([]);

    React.useEffect(() => {
        StoreService.getAllStores().then((data) => {
            setStores(data);
        });
    }, []);

    return (
        <Box p={8} bg="gray.100">
            <Heading textAlign="center" mb={8}>
                Available Stores
            </Heading>
            <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
                {stores.map((store) => (
                    <StoreCard key={store._id} store={store} />
                ))}
            </Grid>
        </Box>
    );
};

export { StorePage };
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Header } from "../../components";

const RootLayout = () => {
    return (
        <Flex minHeight="100vh" direction="column">
            <Box as="header" bg="gray.800" color="white" p={4}>
                <Header />
            </Box>
            <Box flex="1" p={4}>
                <Outlet />
            </Box>
            <Box as="footer" bg="gray.800" color="white" p={4}>
                {/* Add your footer content here */}
            </Box>
        </Flex>
    );
};

export default RootLayout;
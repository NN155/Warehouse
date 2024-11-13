import React from 'react';
import { Box, Flex, Heading, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const navLinkStyles = {
        px: 4,
        py: 2,
        borderRadius: "md",
        textDecoration: "none",
        _hover: { color: "gray.400" },
        _activeLink: { color: "gray.400", fontWeight: "bold", textDecoration: "underline" },
      };

    return (
        <Box py={4}>
            <Flex justifyContent="center">
                <Heading as="h1" size="lg">
                    <Flex gap="4">
                        <Link as={ NavLink } to="/" sx={navLinkStyles}>Stores</Link>
                    </Flex>
                </Heading>
            </Flex>
        </Box>

    );
};

export default Header;
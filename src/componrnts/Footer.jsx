import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  const textColor = useColorModeValue('blue.600', 'blue.300'); // Set text color based on color mode

  return (
    <Box as="footer" py="4" bg="gray.100">
      
      <Box mt="2" textAlign="center" color={textColor}>
        © 2024 Your Todo List App. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;

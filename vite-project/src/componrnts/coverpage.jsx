import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';

const CoverPage = () => {
  return (
    
    <Box
      backgroundSize="cover"
      backgroundPosition="center"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
    >
      <h1>Welcome to Your Todo List</h1>
      <Box mt={4}>
        <Link to="/login">
          <Button colorScheme="teal" mr={4}>
            Log In
          </Button>
        </Link>
        <Link to="/signup">
          <Button colorScheme="teal">Sign Up</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default CoverPage;

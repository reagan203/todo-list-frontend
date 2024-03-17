import React from 'react';
import { Flex, Spacer, Button, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="1rem"
      boxShadow="md"
      bg={colorMode === 'dark' ? 'gray.800' : 'white'}
      color={colorMode === 'dark' ? 'white' : 'gray.800'}
    >
      <span>Todo List</span>
      <Spacer />
      <Button onClick={toggleColorMode} size="sm" leftIcon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}>
        {colorMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </Flex>
  );
};

export default Header;

"use client"
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

const Wrapper = ({children}) => {
  return (
    <>
     <ChakraProvider>{children}</ChakraProvider>
    </>
  );
};

export default Wrapper;
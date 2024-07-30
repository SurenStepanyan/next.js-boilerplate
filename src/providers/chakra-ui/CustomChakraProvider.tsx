'use client';

import { ChakraProvider } from '@chakra-ui/react';

function CustomChakraProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

export default CustomChakraProvider;

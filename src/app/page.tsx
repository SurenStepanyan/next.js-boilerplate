import { Box, Heading } from '@chakra-ui/react';

function DefaultPage() {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Heading as="h1">Default Page</Heading>
    </Box>
  );
}

export default DefaultPage;

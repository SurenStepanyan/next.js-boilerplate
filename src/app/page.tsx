import { LIST_DATA, TextConstants } from '@/constants/text-constants';
import { Box, Heading, List, ListIcon, ListItem } from '@chakra-ui/react';

const { HEADING_TEXT, SUB_HEADING_TEXT } = TextConstants;

function DefaultPage() {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading as="h1">{HEADING_TEXT}</Heading>
      <Heading mt="4" fontSize="24px">
        {SUB_HEADING_TEXT}
      </Heading>
      <List mt="4" spacing="3">
        {LIST_DATA.map((list) => (
          <ListItem
            key={list.id}
            display="flex"
            alignItems="center"
            fontWeight="500"
          >
            <ListIcon></ListIcon>
            {list.label} -
            <Box as="span" fontWeight="300" fontSize="14px">
              {list.additional_text}
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default DefaultPage;

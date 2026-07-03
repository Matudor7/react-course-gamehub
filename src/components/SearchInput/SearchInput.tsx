import { Box, Input, InputGroup } from "@chakra-ui/react";
import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchInput() {
  return (
    <Box boxSize="100%">
      <InputGroup startElement={<FaMagnifyingGlass />}>
        <Input
          placeholder="Search Games"
          variant="subtle"
          borderRadius={20}
          borderColor="card_border"
        ></Input>
      </InputGroup>
    </Box>
  );
}
export default SearchInput;

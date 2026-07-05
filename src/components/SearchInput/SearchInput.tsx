import { Box, Input, InputGroup, Link } from "@chakra-ui/react";
import { useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlineClear } from "react-icons/md";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <Box boxSize="100%">
        <InputGroup
          startElement={<FaMagnifyingGlass />}
          endElement={
            ref.current && (
              <Link
                color="text"
                onClick={() => {
                  if (ref.current && ref.current.value !== "") {
                    ref.current.value = "";
                    onSearch(ref.current.value);
                  }
                }}
              >
                {<MdOutlineClear />}
              </Link>
            )
          }
        >
          <Input
            bg="card_border"
            ref={ref}
            placeholder="Search Games"
            variant="subtle"
            borderRadius={20}
          ></Input>
        </InputGroup>
      </Box>
    </form>
  );
}
export default SearchInput;

import NavBar from "./components/NavBar";
import "./App.css";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import { useColorMode } from "./components/ui/color-mode";

function App() {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav" "nav" "aside" "main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar onDarkmodeClick={toggleColorMode}></NavBar>
        </GridItem>
        <Stack hideBelow="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Stack>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

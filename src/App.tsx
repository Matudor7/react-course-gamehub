import NavBar from "./components/NavBar";
import "./App.css";
import { Grid, GridItem, Stack } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav" "nav" "aside" "main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Stack hideBelow="lg">
          <GridItem area="aside">Aside</GridItem>
        </Stack>
        <GridItem area="main">Main</GridItem>
      </Grid>
    </>
  );
}

export default App;

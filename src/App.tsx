import NavBar from "./components/NavBar";
import "./App.css";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid/";

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
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

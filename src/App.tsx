import NavBar from "./components/NavBar";
import "./App.css";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid/";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `
          "nav" 
          "main"
          `,
          lg: `
          "nav nav" 
          "aside main"
          `,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <GridItem area="aside" hideBelow="lg">
          <GenreList />
        </GridItem>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;

import { Provider } from "./components/ui/provider";
import NavBar from "./components/NavBar";
import "./App.css";
import { Grid, GridItem, Stack } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Provider>
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
            <GridItem area="aside" bg="gold">
              Aside
            </GridItem>
          </Stack>
          <GridItem area="main" bg="dodgerblue">
            Main
          </GridItem>
        </Grid>
      </Provider>
    </>
  );
}

export default App;

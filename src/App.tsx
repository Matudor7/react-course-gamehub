import { Provider } from "./components/ui/provider";
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
          <GridItem area="nav" bg="coral">
            Nav
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

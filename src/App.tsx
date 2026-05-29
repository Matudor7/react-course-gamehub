import { Provider } from "./components/ui/provider";
import { Button, ButtonGroup } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <Provider>
        <h1>Hello World</h1>
        <Button colorPalette="teal">Click me!</Button>
      </Provider>
    </>
  );
}

export default App;

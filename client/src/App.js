// components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Box } from "@mui/system";

import DataProvider from "./context/DataProvider";

function App() {
  return (
    <DataProvider>
      <Header />
      <Box style={{ marginTop: "56px" }}>
        <Home />
      </Box>
    </DataProvider>
  );
}

export default App;

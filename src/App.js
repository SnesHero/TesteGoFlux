import { ThemeProvider, createTheme } from "@material-ui/core";
import "./App.css";
import { Dashboard } from "./Dashboard";
import LoginMock from "./LoginMock";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <div className="App-header">
          <LoginMock />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;

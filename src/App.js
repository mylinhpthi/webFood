import "./App.css";
import  useAxios, { configure } from "axios-hooks";
import LRU from "lru-cache";
import Axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Test from "./components/Test";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Header from "./components/Header/Header"
import MainLayOut from "./components/body/MainLayOut";
// const axios = Axios.create({
//   baseURL: "http://localhost:8000/",
// });

// const cache = new LRU({ max: 10 });

// configure({ axios, cache });
const theme = createTheme({
  palette: {
    primary: {
      light: "#60ad5e",
      main: "#2e7d32",
      dark: "#005005",
    },
    secondary: {
      light: "#ffbcaf",
      main: "#ff8a80",
      dark: "#c85a54",
    },
  },
});
function App() {
  // const [{ data}] = useAxios("LinkCollection/5");
  // const [user, setUser] = useState({});
  // useEffect(() => {
  //   if (data) {
  //     setUser(data);
  //   }
  // }, [data]);
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/">
            <MainLayOut />
          </Route>
          
        </Switch>
      </div>
    </Router>
    </ThemeProvider>
  );
}
export default App;

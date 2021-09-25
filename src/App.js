import "./App.css";
import  useAxios, { configure } from "axios-hooks";
import LRU from "lru-cache";
import Axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect, useState } from "react";
import FormSignIn from "./components/Form/FormSignIn";
import FormSignUp from "./components/Form/FormSignUp";
import Header from "./components/Header/Header";

// const axios = Axios.create({
//   baseURL: "http://localhost:8000/",
// });

// const cache = new LRU({ max: 10 });

// configure({ axios, cache });

function App() {
  // const [{ data}] = useAxios("LinkCollection/5");
  // const [user, setUser] = useState({});
  // useEffect(() => {
  //   if (data) {
  //     setUser(data);
  //   }
  // }, [data]);
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/signIn">
            <FormSignIn />
          </Route>
          <Route path="/signUp">
            <FormSignUp />
          </Route>
          <Route path="/">
            <FormSignIn />
          </Route>
          
        </Switch>
      </div>
    </Router>

  );
}
export default App;

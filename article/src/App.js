import "./App.css";
import Home from "./page/Home";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import SinglePage from "./page/SinglePage";
import Header from "./layout/header";
import Footer from "./layout/footer";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Redirect from="/home" to="/" exact />

        <Route exact path="/" component={Home} exact />
        <Route path="/singlepage" component={SinglePage} />
        
      </Switch>
      <Footer />
    </>
  );
}

export default App;

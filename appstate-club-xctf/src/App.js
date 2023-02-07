//Tools
import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Join from "./pages/Join";
import Schedule from "./pages/Schedule";
import Records from "./pages/Records";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <Fragment>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/Join">
                    <Join />
                </Route>
                <Route path="/Schedule">
                    <Schedule />
                </Route>
                <Route path="/Records">
                    <Records />
                </Route>
                <Route path="/Contact">
                    <Contact />
                </Route>
                </Switch>
            <Footer />
        </Fragment>
    );
}

export default App;
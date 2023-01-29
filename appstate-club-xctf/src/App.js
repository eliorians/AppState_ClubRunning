import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Schedule from "./pages/Schedule";
import Records from "./pages/Records";
import Contact from "./pages/Contact";

function App() {
    return (
        <Layout>
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
        </Layout>
    );
}

export default App;
//Tools
import { Switch, Route } from "react-router-dom";
//Layouts
import HomeLayout from "./components/HomeLayout";
import JoinLayout from "./components/JoinLayout";
import ScheduleLayout from "./components/ScheduleLayout";
import RecordsLayout from "./components/RecordsLayout";
import ContactLayout from "./components/ContactLayout";
//Pages
import Home from "./pages/Home";
import Join from "./pages/Join";
import Schedule from "./pages/Schedule";
import Records from "./pages/Records";
import Contact from "./pages/Contact";

function App() {
    return (
            <Switch>
                <Route path="/" exact>
                    <HomeLayout>
                        <Home />
                    </HomeLayout>
                </Route>
                <Route path="/Join">
                    <JoinLayout>
                        <Join />
                    </JoinLayout>
                </Route>
                <Route path="/Schedule">
                    <ScheduleLayout>
                        <Schedule />
                    </ScheduleLayout>
                </Route>
                <Route path="/Records">
                    <RecordsLayout>
                        <Records />
                    </RecordsLayout>
                </Route>
                <Route path="/Contact">
                    <ContactLayout>
                        <Contact />
                    </ContactLayout>
                </Route>
            </Switch>
    );
}

export default App;
import React from "react";
import {BrowserRouter,Routes as Switch,Route} from 'react-router-dom'
import App from "./App";
import About from "./components/About";
import Filter from "./components/Filter";
const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact element={<App />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/filter" exact element={<Filter />} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;
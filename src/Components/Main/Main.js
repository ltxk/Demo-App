import react, { Fragment } from "react";
import MainNav from "./MainNav";
import './Main.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Discovery from "./Discovery";

const Main = () => {
    return (
        <Fragment>
            <div className="Main">

                <MainNav />
            </div>

        </Fragment>


    )
}

export default Main
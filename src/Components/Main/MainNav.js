import react, { Fragment } from "react";
import { nativeTouchData } from "react-dom/cjs/react-dom-test-utils.production.min";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Outlet,
    Link
} from "react-router-dom";
import Discovery from "./Discovery";
import { StickyNav } from 'react-js-stickynav'


const MainNav = () => {
    return (
        <Fragment>
            
            <nav className="MainNav">
            <StickyNav length='50' position="unfixed">
                <input id='SearchBar' type='search' placeholder="Search" />
                <ul>
                    <li className="navLink"><Link to="/store/discovery">Discovery</Link></li>
                    <li className="navLink"><Link to="/store/browse">Browse</Link></li>
                    <li className="navLink"><Link to="/store/new">New</Link></li>

                </ul>
                </StickyNav>
            </nav>
            <Outlet/>
        </Fragment>
    )
}

export default MainNav
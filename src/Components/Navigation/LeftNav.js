

import {
    BrowserRouter as Router,

    Link,

} from "react-router-dom";
const LeftNav = () => {
    return (
        <nav>
        <ul className='leftNav'>
            <li>
                <Link to="/store"><div id="eglogo"/></Link>
            </li>
            <li className="hoverBottomGlow">
                <Link to="/store">STORE</Link>
            </li>
            <li className="hoverBottomGlow">
                <Link to="/faq">FAQ</Link>
            </li>
            <li className="hoverBottomGlow">
                <Link to="/help">HELP</Link>
            </li>

        </ul>
        
        </nav>


    )
}

export default LeftNav
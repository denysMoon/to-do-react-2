import { Link, Router } from "react-router-dom";

const NavBar = () =>{
    return(
        <div className="nav-bar">
            {/* <Router> */}
                <Link to="/posts" activeClassName="active-link">Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/github">GitHub</Link>
            {/* </Router> */}
        </div>
    )
}

export default NavBar
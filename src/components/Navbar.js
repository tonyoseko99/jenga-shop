import React from "react";

function Navbar({setToken}){
    const logoutHandler = () => {
        setToken("");
        localStorage.clear();
    }
    return(
        <nav className="navbar">
            <h1>Jenga Shop</h1>
            <button onClick={() => logoutHandler()}>Logout</button>
        </nav>
    )

}
export default Navbar;
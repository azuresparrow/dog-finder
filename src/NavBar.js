import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";


const NavBar = ({dogs}) => {
return (
    <nav>
        <NavLink exact to="/dogs">Home</NavLink>
        {dogs.map(dog => (
            <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
                {dog.name}
            </NavLink>
        ))}
    </nav>
)
 };

 export default NavBar;
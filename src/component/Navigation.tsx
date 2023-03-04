import {Link, NavLink} from "react-router-dom";
import "./Navigation.css";
import React from "react";


export default function Navigation(){

    return(
        <nav className={"nav"}>
            <ul>
                <li>
                    <NavLink to={"/"}>Homepage</NavLink>
                </li>
                <li>
                    <NavLink to={"/characters"}>Characters</NavLink>
                </li>
            </ul>
        </nav>
    )
}
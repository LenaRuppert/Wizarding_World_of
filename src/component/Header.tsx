import React from "react";
import {Link} from "react-router-dom";

import "./Header.css"
export default function Header(){

    return (
        <header className={"header"}>
            <h1>The Wizarding World of Dinah Ruppert</h1>
        <button className={"button-header"}><Link className={"link"} to={"/"}>Home</Link></button>
        <button className={"button-header"}><Link className={"link"} to={"/characters"}>Characters</Link></button>
        </header>
    )
}
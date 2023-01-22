import React from "react";
import ReactDOM from "react-dom/client"


export default function Header() {
    return (
        <header className="header">
            <img src="/src/assets/globeLogo.png" alt="globe logo" className="headerImage"/>
            <h1 className="headerTitle">My Travel Journal</h1>
        </header>
    )
}
import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
} from "react-router-dom";

let myStyle = {
    "font-family": "cursive",
    "letter-spacing": "3px"
}
export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
            <Link className="navbar-brand text-center" to="/">{props.title}</Link>
        </nav>
    )
}

Header.defaultProps = {
    title: "Your Title goes here!",
    searchBar: true
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
}
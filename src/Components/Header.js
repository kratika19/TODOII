import React from 'react'
import PropTypes from 'prop-types'
import {
    Link
} from "react-router-dom";

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
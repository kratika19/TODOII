import React from 'react'

export default function Footer() {
    let footerStyle = {
        position: "relative",
        top: "20vh",
        width: "100%"
    }

    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; todoii.netlify.app
            </p>
        </footer>
    )
}

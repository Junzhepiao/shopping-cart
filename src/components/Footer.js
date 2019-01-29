import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">{this.props.copy}</a>
            </nav>
        )
    }

}
export default Footer;
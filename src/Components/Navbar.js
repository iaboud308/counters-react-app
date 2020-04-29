import React, { Component } from 'react';


class Navbar extends Component {

    render () {

        return (
            <header className = 'bg-dark text-white p-3 font-weight-bold'> Total: {this.props.total} </header>
        )
    }
}

export default Navbar;
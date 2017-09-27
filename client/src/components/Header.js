import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                Header
                <Link to='/'>Homepage</Link>
                <Link to='/tools'>Dashboard</Link>
                <Link to='/tools/new'>Form</Link>
                <a href='/auth/google'>Login with Google</a>
            </div>
        )
    }
}
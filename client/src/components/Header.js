import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href='/'>Gobannus</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <IndexLinkContainer to='/tools' activeHref="active">
                                <NavItem >
                                    Dashboard
                                </NavItem>
                            </IndexLinkContainer>
                            <LinkContainer to='/tools/new' activeHref="active">
                                <NavItem >
                                    Form
                                </NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav pullRight>
                            <NavItem  href='/'>Login with Google</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

//<a href='/auth/google'>Login with Google</a>
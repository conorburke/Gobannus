import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
    renderContent() {
        switch(this.props.auth){
            case null:
                return;
            case false: 
                return(
                    <li role="presentation"><a href='/auth/google'>Login</a></li>
                );
            default:
                return (
                    <li role="presentation"><a href='/api/logout'>Logout</a></li>
                );
            
        }
    }


    render() {
        console.log(this.props);
        return (
            <div>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>Gobannus</Link>
                            {/* <a href='/'>Gobannus</a> */}
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <IndexLinkContainer to='/tools#'>
                                <NavItem >
                                    Dashboard
                                </NavItem>
                            </IndexLinkContainer>
                            <LinkContainer to='/tools/new'>
                                <NavItem >
                                    Form
                                </NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav pullRight>
                            {this.renderContent()}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);

//<a href='/auth/google'>Login with Google</a>
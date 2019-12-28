import React from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import profilePic from '../assets/profile-pic.jpg';

class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const textStyle = {
            color: '#0F4C81'
        };

        return (
            <Navbar style={{backgroundColor: 'transparent'}} dark expand="md">
                <Container>
                    <NavbarBrand href="/">
                        <img src={profilePic} className="profile-pic" alt="Luke Zhang"/>
                        <span style={textStyle}>Luke Zhang</span>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink style={textStyle} href="/profile/">Profile</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default TopBar;
import React, { useState, useEffect, Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { logout } from '../actions/auth'

import Cranes from './cranes/Cranes';

const Main = (props) => {
    const [toggle, setToggle] = useState(false)
    const { isAuthenticated, user } = props.auth;

    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    const onCl = () => {
        setToggle(toggle => !toggle)
    }

    useEffect(() => {
        console.log(props.auth)
    }, [])


    return (
        // <div className={toggle ? "body-pd" : null}>
        //     <header className={toggle ? "header body-pd" : "header"} id="header">
        //         <div className={toggle ? "header_toggle bx-x" : "header_toggle"} onClick={onCl}>
        //             <i className={toggle ? "fas fa-times" : "fas fa-bars"} id="header-toggle"></i>
        //         </div>
        //     </header>
        //     <div className={toggle ? "l-navbar show" : "l-navbar"} id="nav-bar">
        //         <nav className="nav">
        //             <div>
        //                 <p href="#" className="nav_logo"> <i className="fas fa-compass"></i> <span className="nav_logo-name">Меню</span> </p>
        //                 <div className="nav_list" >
        //                     <NavLink to="/cranes" className="nav_link" activeClassName="nav_link active"> <i className="fas fa-columns"></i> <span className="nav_name">Краны</span> </NavLink>
        //                     <NavLink to="/add-crane" className="nav_link" activeClassName="nav_link active"> <i className="fas fa-edit"></i> <span className="nav_name">Добавить кран</span> </NavLink>
        //                     <NavLink to="/modal" className="nav_link" activeClassName="nav_link active"> <i className="fas fa-add"></i> <span className="nav_name">Добавить срок освидетельствования</span> </NavLink>
        //                     <a href="#" className="nav_link"> <i className="fas fa-user"></i> <span className="nav_name">Пользователи</span> </a>
        //                 </div>
        //             </div>
        //             <div>
        // {
        //     isAuthenticated &&
        //     <a onClick={props.logout} className="nav_link">
        //         <i className="fas fa-sign-out-alt"></i>
        //         <span className="nav_name">
        //             Выйти
        //         </span>
        //     </a>
        // }
        //             </div>
        //         </nav>
        //     </div>
        //     {/* <div className="height-100 bg-light main-component">
        //         {props.children == undefined || props.children == null ? <Cranes /> : props.children}
        //     </div> */}
        // </div>

        <div className="cranes">
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">Crane IS</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/#/cranes/">Краны</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#/add-crane">Добавить краны</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#/modal">Modal</NavLink>
                        </NavItem>
                    </Nav>
                    {
                        isAuthenticated &&
                        <a onClick={props.logout} className="nav_link">
                            <i className="fas fa-sign-out-alt"></i>
                            <span className="nav_name">
                                Выйти
                                </span>
                        </a>
                    }
                </Collapse>
            </Navbar>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Main);

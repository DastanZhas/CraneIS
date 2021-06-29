import React, { useState, useEffect, Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { logout } from '../actions/auth'

import Cranes from './cranes/Cranes';

const Main = (props) => {
    const [toggle, setToggle] = useState(false)
    const { isAuthenticated, user } = props.auth;

    const onCl = () => {
        setToggle(toggle => !toggle)
    }

    useEffect(() => {
        console.log(props.auth)
    }, [])


    return (
        <div className={toggle ? "body-pd" : null}>
            <header className={toggle ? "header body-pd" : "header"} id="header">
                <div className={toggle ? "header_toggle bx-x" : "header_toggle"} onClick={onCl}> 
                    <i className={toggle ?  "fas fa-times" :"fas fa-bars"} id="header-toggle"></i> 
                </div>
            </header>
            <div className={toggle ? "l-navbar show" : "l-navbar"} id="nav-bar">
                <nav className="nav">
                    <div> 
                        <p href="#" className="nav_logo"> <i className="fas fa-compass"></i> <span className="nav_logo-name">Меню</span> </p>
                        <div className="nav_list" > 
                            <NavLink to="/cranes" className="nav_link" activeClassName="nav_link active"> <i className="fas fa-columns"></i> <span className="nav_name">Краны</span> </NavLink> 
                            <NavLink to="/add-crane" className="nav_link" activeClassName="nav_link active"> <i className="fas fa-edit"></i> <span className="nav_name">Добавить кран</span> </NavLink> 
                            <a href="#" className="nav_link"> <i className="fas fa-user"></i> <span className="nav_name">Пользователи</span> </a> 
                        </div>
                    </div> 
                    <div>   
                        {
                            isAuthenticated &&
                            <a onClick={props.logout} className="nav_link"> 
                                <i className="fas fa-sign-out-alt"></i> 
                                <span className="nav_name">
                                    Выйти
                                </span>
                            </a>
                        }
                    </div>
                </nav>
            </div>
            {/* <div className="height-100 bg-light main-component">
                {props.children == undefined || props.children == null ? <Cranes /> : props.children}
            </div> */}
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Main);

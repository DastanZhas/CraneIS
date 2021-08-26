import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Cranes from '../cranes/Cranes';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth'; 

export class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        if(this.props.isAuthenticated) {
            return <Redirect to="/cranes"/>
        }
        const {username, password} = this.state;
        return (
            <div className="form-signin">
                <form onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Вход в Приложение</h1>

                    <div className="form-floating">
                        <input type="text" onChange={this.onChange} className="form-control input-control" id="floatingInput" name="username" value={username} placeholder="username" />
                        <label htmlFor="floatingInput">Имя пользователя</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" onChange={this.onChange} value={password} className="form-control pwd-control" name="password" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Пароль</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary login-btn" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted"> &copy;2021 - made by Dastan and Yeldar </p>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

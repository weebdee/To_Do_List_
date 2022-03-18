import React from 'react';
import './login.css';

import TodoApi from '../../services/todo-api';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
    }

    todoApi = new TodoApi()

    onSubmit = (e) => {
        e.preventDefault()
        this.todoApi.login(
            this.state.username,
            this.state.password,
        )

    }

    render() {
        return(
            <div className="block_login">
                <form className="form_login"
                onSubmit={this.onSubmit}>
                    <div>
                        <label>Username</label>
                        <input
                            className="input_login"
                            value={this.state.username}
                            onChange={e => this.setState({username: e.target.value})}
                            type='text'
                        />
                    </div>

                    <div>
                        <label>Password</label>
                        <input
                            className="input_login"
                            value={this.state.password}
                            onChange={e => this.setState({password: e.target.value})}
                            type='password'
                        />
                    </div>

                    <button 
                        type='submit'
                        className="btn_login"
                    >Submit</button>
                </form>
            </div>
        )
    }
}
export default Login
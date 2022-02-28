import React from 'react';

import './todo-add.css';

class TodoAdd extends React.Component {
    state = {
        label: ''
    }
    onAdd = (event) => {
        event.preventDefault()
        this.props.onToDoAdd(this.state.label)
        this.state.label = '';
    }

    render() {
        return (
            <form className="form_todo-add" onSubmit={this.onAdd}>
                <input 
                className="input_todo-add"
                type='text' 
                value={this.state.label} 
                onChange={(e) => this.setState({label: e.target.value})}/>
                <input 
                className="submit_todo-add"
                value="Add"
                type='submit' />
            </form>
        )
    }
}

export default TodoAdd
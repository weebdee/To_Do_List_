import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import TodoAdd from '../todo-add';
import './app.css';


class App extends React.Component {
  state = {
    todos: [
      { id: 1, label: 'Drink coffee', important: false, done: false },
      { id: 2, label: 'Drink tea', important: false, done: false },
      { id: 3, label: 'Drink vodka', important: false, done: false },
    ],
    status: 'all',
    search: '',
  }

  onToDoAdd = (label) => {
    this.setState((oldState) => {
      const id = oldState.todos.map(todo => todo.id)
      const max = Math.max.apply(null, id)
      const newTodo = {
        id: max + 1,
        label: label,
        important: false,
        done: false
      }
      return {todos: [...oldState.todos, newTodo]}
    })
  }

  onSearchFilterChange = searchString => this.setState({search: searchString})
  

  onSearchFilter = (todos, search) => {
    return todos.filter(todo => todo.label.toLowerCase().includes(search.toLowerCase()))
  }

  onStatusFilterChange = status => this.setState({status: status})

  onStatusFilter = (todos, status) => {
    if ( status === 'active') {
      return todos.filter(todo => !todo.done)
    } else if (status === 'done') {
      return todos.filter(todo => todo.done)
    } else {
      return todos
    }
  }
  onDone = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex(todo => todo.id === id)

      const prev = oldState.todos.slice(0, idx)
      const oldTodo = oldState.todos[idx]
      const newTodo = {...oldTodo, done: !oldTodo.done}
      const next = oldState.todos.slice(idx + 1)

      const newTodos = [...prev, newTodo, ...next]

      return {
        todos: newTodos
      }
    })
  }

  onDelete = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex(todo => todo.id === id)

      const prev = oldState.todos.slice(0, idx)
      const next = oldState.todos.slice(idx + 1)

      const newTodos = [...prev, ...next]

      return {
        todos: newTodos
      }
    })
  }

  onImportant = (id) => {
    this.setState((oldState) => {
      const idx = oldState.todos.findIndex(todo => todo.id === id)

      const prev = oldState.todos.slice(0, idx)
      const oldTodo = oldState.todos[idx]
      const newTodo = {...oldTodo, important: !oldTodo.important}
      const next = oldState.todos.slice(idx + 1)

      const newTodos = [...prev, newTodo, ...next]

      return {
        todos: newTodos
      }
    })
  }
  

  render() { 
    const filteredByStatus = this.onStatusFilter(this.state.todos, this.state.status);
    const filteredBySearch = this.onSearchFilter(filteredByStatus, this.state.search);
    const all = this.onStatusFilter(this.state.todos, 'all')
    const done = all.filter(todo => todo.done === true).length
    const toDo = all.length - done
  
    return (
      <div className="todo-app">
        <AppHeader toDo={toDo} done={done} />

        <div className="top-panel d-flex">
          <SearchPanel onSearchFilterChange ={this.onSearchFilterChange} />
          <ItemStatusFilter onStatusFilterChange={this.onStatusFilterChange}/>
        </div>

        <TodoList onDone={this.onDone} onDelete={this.onDelete} onImportant={this.onImportant} todos={filteredBySearch} />
        <TodoAdd onToDoAdd={this.onToDoAdd}/>
      </div>
    );
  }
};

export default App;

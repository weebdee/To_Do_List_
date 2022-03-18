import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import TodoAdd from '../todo-add';
import Login from '../login';
import TodoApi from '../../services/todo-api';

import './app.css';


class App extends React.Component {
  state = {
    todos: [],
    status: 'all',
    search: '',
  }

  todoApi = new TodoApi()

  onSearchFilterChange = searchString => this.setState({search: searchString})
  
  onSearchFilter = (todos, search) => {
    return  todos.filter(todo => todo.label.toLowerCase().includes(search.toLowerCase()))
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

  onLoadTodos = () => {
    this.todoApi.getTodos().then(todos => {
      this.setState({
        todos: todos
      })
    })
  }

  onDelete = (id) => {
    this.todoApi.deleteTodo(id).then(data => {
      this.onLoadTodos()
    })
   
  }

  onToDoAdd = (label) => {
    this.todoApi.createTodo(label).then(data => {
      this.onLoadTodos()
    })
  }

  onImportant = (id) => {
    const idx = this.state.todos.findIndex(todo => todo.id === id)
    const old = this.state.todos[idx]

    const newTodo = {
      label: old.label,
      important: !old.important,
      done: old.done,
    }

    this.todoApi.updateTodo(old.id, newTodo).then(data => {
      this.onLoadTodos()
    })
  }

  onDone = (id) => {
    const idx = this.state.todos.findIndex(todo => todo.id === id)
    const old = this.state.todos[idx]
      
    const newTodo = {
      label: old.label,
      important: old.important,
      done: !old.done,
    }

    this.todoApi.updateTodo(old.id, newTodo).then(data => {
      this.onLoadTodos()
    })
  }

  componentDidMount = () => {
    if (localStorage.getItem('credentials')) {
      this.onLoadTodos()
    }
  }
  

  render() { 
    const credentials = localStorage.getItem('credentials')

    if (credentials) {
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
      )
    } else {
      return <Login />
    } 

  }
};

export default App;

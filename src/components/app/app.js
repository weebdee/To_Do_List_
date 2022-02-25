import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css';


class App extends React.Component {
  state = {
    todos: [
      { id: 1, label: 'Drink Coffee', important: false, done: false },
      { id: 2, label: 'Drink tea', important: false, done: false },
      { id: 3, label: 'Drink vodka', important: false, done: false },
    ]
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
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />

        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList onDelete={this.onDelete} onImportant={this.onImportant} todos={this.state.todos} />

      </div>
    );
  }
};

export default App;

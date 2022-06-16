import React from 'react'
import {
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo
} from '../actions/todos'
import { connect } from 'react-redux'

// Components
import List from './List'

class Todos extends React.Component {
  addItem = (e) => {
    e.preventDefault();
    this.props.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ""))
    );
  };

  removeItem = (todo) => {
    this.props.dispatch(handleDeleteTodo(todo));
  };

  toggleItem = (id) => {
    this.props.dispatch(handleToggleTodo(id));
  };

  render() {
    return (
      <div>
        <h1>Todos List</h1>

        <input
          type="text"
          placeholder="Add Todo"
          ref={(input) => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          toggle={this.toggleItem}
          remove={this.removeItem}
          items={this.props.todos}
        />
      </div>
    );
  }
}

export default connect((state) => ({
  todos: state.todos,
}))(Todos);

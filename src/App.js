import React, { Component } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from 'uuid';

class App extends Component {
  
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Meeting with client',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Read a book',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with family',
        completed: false
      }
    ]
  };

  handleToggleCheck = (id) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    });
    this.setState({ todos: todos });
  }

  handleDeleteTodo = (id) => {
    const todos = [...this.state.todos.filter(todo => todo.id !== id)];
    this.setState({ todos: todos });
  }

  handleAddTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    const todos = [...this.state.todos, newTodo];
    this.setState({ todos: todos });
  }

  renderTodoList = (todos) => {
    return this.state.todos.length > 0 ?
      <TodoList
        todos={todos}
        onToggleCheck={this.handleToggleCheck}
        onDeleteTodo={this.handleDeleteTodo}
      />
      : 'Add something you want to do';
  }
  
  render() { 
    const { todos } = this.state;
    return (
      <Container className="py-5">
        <Row>
          <Col xs={12} xl={6} className="ml-auto mr-auto">
            <h3 className="text-center">Simple Todo App</h3>
            <TodoForm onAddTodo={this.handleAddTodo} />
            {this.renderTodoList(todos)}
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default App;
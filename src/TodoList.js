import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup } from 'react-bootstrap';

import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const { todos, onToggleCheck, onDeleteTodo } = this.props;
    return (
      <Card>
        <ListGroup variant="flush">
        { todos.map((todo) => {
          return (
            <ListGroup.Item key={todo.id}>
              <TodoItem
                todo={todo}
                onToggleCheck={onToggleCheck}
                onDeleteTodo={onDeleteTodo}
              />
            </ListGroup.Item>
          )
        }) }
        </ListGroup>
      </Card>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onToggleCheck: PropTypes.func,
  onDeleteTodo: PropTypes.func
};

export default TodoList;
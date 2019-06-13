import React from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup } from 'react-bootstrap';

import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { todos, onToggleCheck, onDeleteTodo } = props;
  return (
    <Card>
      <ListGroup variant="flush">
      { todos.map(todo => {
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

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onToggleCheck: PropTypes.func,
  onDeleteTodo: PropTypes.func
};

export default TodoList;
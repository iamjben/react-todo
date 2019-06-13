import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

class TodoItem extends Component {

  titleStyle = () => {
    return {
      fontSize: '1rem',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { todo, onToggleCheck, onDeleteTodo } = this.props;
    
    const buttonStyle = {
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      marginTop: 'auto',
      marginBottom: 'auto',
      width: '3rem',
      borderRadius: '0',
      fontSize: '1.5rem',
      fontWeight: 'bold'
    };

    return (
      <React.Fragment>
        <Form.Check style={{position: 'relative'}}>
          <Form.Check.Input
            type="checkbox"
            onChange={onToggleCheck.bind(this, todo.id)}
          />
          <Form.Check.Label style={this.titleStyle()}>{todo.title}</Form.Check.Label>
        </Form.Check>
        <Button
          variant="danger"
          size="sm"
          style={buttonStyle}
          onClick={onDeleteTodo.bind(this, todo.id)}
        >
          X
        </Button>
      </React.Fragment>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  onToggleCheck: PropTypes.func,
  onDeleteTodo: PropTypes.func
};
 
export default TodoItem;
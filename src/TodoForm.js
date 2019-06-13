import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import { Form, Button } from 'react-bootstrap';

class TodoForm extends Component {
  state = {
    title: ''
  }

  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddTodo(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    const { title } = this.state;

    return (
      <Form onSubmit={this.onSubmit} className="mb-3">
        <Form.Control
          type="text"
          name="title"
          value={title}
          size="lg"
          onChange={this.onChange}
        />
        <Form.Group className="text-center mt-3">
          <Button
            variant="primary"
            type="submit"
          >
            Add Todo
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

TodoForm.propTypes = {
  onAddTodo: PropTypes.func
};
 
export default Radium(TodoForm);
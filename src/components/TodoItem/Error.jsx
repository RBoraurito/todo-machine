import React from 'react';

const TodoError = ({ error }) => (
  <p className="todo__message">{ error }</p>
)

export { TodoError };
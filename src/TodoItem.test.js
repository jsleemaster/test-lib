import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from "./TodoItem"

describe("<TodoItem/>", () => {
  const sampleTodo = {
    id: 1,
    text: 'TDD 배우기',
    done: false
  };

  const setup = (props = {}) => {
    const initialProps = { todo: sampleTodo };
    const utils = render(<TodoItem {...initialProps} {...props} />);
    const { getByText } = utils;
    const todo = props.todo || initialProps.todo;
    const span = getByText(todo.text);
    const button = getByText('삭제');
    return {
      ...utils,
      span,
      button
    };
  };

  it('has span and button', () => {
    const { span, button } = setup();
    expect(span).toBeTruthy();
    expect(button).toBeTruthy();
  });


  it('done이 true면 line이 그어지도록', () => {
    const { span } = setup({ todo: { ...sampleTodo, done: true } });
    expect(span).toHaveStyle('text-decoration: line-through;');
  });
  it('done이 false면 그어진 라인이 사라지도록', () => {
    const { span } = setup({ todo: { ...sampleTodo, done: false } });
    expect(span).not.toHaveStyle('text-decoration: line-through;');
  });

  it('calls onToggle', () => {
    const onToggle = jest.fn();
    const { span } = setup({ onToggle });
    fireEvent.click(span);
    expect(onToggle).toHaveBeenCalledWith(sampleTodo.id);
  });

  it('calls onRemove', () => {
    const onRemove = jest.fn();
    const { button } = setup({ onRemove });
    fireEvent.click(button);
    expect(onRemove).toHaveBeenCalledWith(sampleTodo.id);
  });
})
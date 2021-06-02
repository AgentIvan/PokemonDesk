/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Hello from './index';

describe('Heading', () => {
  let container: HTMLDivElement | null = null;
  beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // подчищаем после завершения
    if (container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('renders with or without a name', () => {
    act(() => {
      render(<Hello />, container);
    });
    expect(container?.textContent).toBe('Hey, stranger');
    // console.log("####: container", container);
    act(() => {
      render(<Hello name="Jenny" />, container);
    });
    expect(container?.textContent).toBe('Hello, Jenny!');

    act(() => {
      render(<Hello name="Margaret" />, container);
    });
    expect(container?.textContent).toBe('Hello, Margaret!');
  });
});

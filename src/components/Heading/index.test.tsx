/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Heading from './index';

describe('Heading', () => {
  let container: HTMLDivElement | null = null;
  beforeEach(() => {
    // подготавливаем DOM-элемент, куда будем рендерить
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // подчищаем после завершения
    container && unmountComponentAtNode(container);
    container?.remove();
    container = null;
  });

  it('renders', () => {
    act(() => {
      render(<Heading />, container);
    });
    expect(container?.innerHTML).toBeDefined();
  });

  it('renders with children content: "Title"', () => {
    act(() => {
      render(<Heading>Title</Heading>, container);
    });
    expect(container?.textContent).toBe('Title');
  });

  it('renders with props level="h3"', () => {
    act(() => {
      render(<Heading level="h3">Title</Heading>, container);
    });
    expect(container?.querySelector('h3')).not.toBeNull();
  });
});

/* global describe, expect, test */
import React from 'react';
import { render } from 'react-testing-library';

import ThumbImg from '..';

describe('Component - <ThumbImg />', () => {
  const expectedValues = {
    alt: 'Preview thumbnail image (scaled down dimensions)',
    src: 'test.png',
  };

  test('should render a component', () => {
    const { container } = render(<ThumbImg />);
    const received = container.querySelector('img').className;
    const expected = expect.stringContaining('ThumbImg__Img');
    expect(received).toEqual(expected);
  });


  test('should match src attribute value', () => {
    const { container } = render(<ThumbImg src={expectedValues.src} />);
    const received = container.querySelector('img').src;
    const expected = expect.stringContaining(expectedValues.src);
    expect(received).toEqual(expected);
  });

  test('should have an alt attribute value', () => {
    const { container } = render(<ThumbImg />);
    const received = container.querySelector('img').alt;
    const expected = expectedValues.alt;
    expect(received).toEqual(expected);
  });

  test('should not adopt a srcset attribute', () => {
    const { container } = render(<ThumbImg srcset="test-HD.png 2x" />);
    const received = container.querySelector('img').srcset;
    const expected = 'null';
    expect(received).toEqual(expected);
  });
});

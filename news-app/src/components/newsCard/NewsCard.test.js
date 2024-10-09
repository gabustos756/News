import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsCard from './NewsCard';
import { act } from 'react';

const mockArticle = {
  title: 'Test Title',
  description: 'Test Description',
  url: 'https://example.com',
  publishedAt: '2024-10-09T00:00:00Z',
  urlToImage: 'https://example.com/image.jpg',
};

test('renders NewsCard with title and description', () => {
  act(() => {
    render(<NewsCard article={mockArticle} />);
  });
  
  const titleElement = screen.getByText(/Test Title/i);
  const descriptionElement = screen.getByText(/Test Description/i);
  
  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
});

test('renders link to article', () => {
  act(() => {
    render(<NewsCard article={mockArticle} />);
  });
  
  const linkElement = screen.getByRole('link', { name: /Read more/i });
  expect(linkElement).toHaveAttribute('href', mockArticle.url);
});
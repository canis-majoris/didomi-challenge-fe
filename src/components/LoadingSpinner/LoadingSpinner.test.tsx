import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders default label', () => {
    render(<LoadingSpinner />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
  it('renders custom label', () => {
    render(<LoadingSpinner label="Fetching" />);
    expect(screen.getByText(/fetching/i)).toBeInTheDocument();
  });
});

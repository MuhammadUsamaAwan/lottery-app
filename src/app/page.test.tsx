// @vitest-environment jsdom

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import HomePage from './page';

describe('homepage', () => {
  it('renders the "HomePage" text', () => {
    render(<HomePage />);

    expect(screen.getByText('HomePage')).toBeInTheDocument();
  });
});

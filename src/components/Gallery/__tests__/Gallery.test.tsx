import { render, screen, fireEvent } from '@testing-library/react';
import Gallery from '../index';
import { Company } from '@/types/company';
import { describe, it, expect, beforeEach, vi } from "vitest";

describe('Gallery', () => {
  const companies: Company[] = Array.from({ length: 6 }).map((_, i) => ({
    id: String(i + 1),
    title: `Company ${i + 1}`,
    thumbnail: `company-${i + 1}.jpg`,
    image: '',
    cost: 1000,
    description: '',
  }));

  const mockOnClick = vi.fn();

  beforeEach(() => {
    process.env.NEXT_PUBLIC_API_IMAGES = 'http://localhost';
    mockOnClick.mockClear();
  });

  it('Should render a maximum of 4 companies at a time', () => {
    render(<Gallery companies={companies} onClick={mockOnClick} />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(4);
  });

  it('Should fire onClick with the correct id when clicking on the image', () => {
    render(<Gallery companies={companies} onClick={mockOnClick} />);
    const imageLink = screen.getByRole('link');
    fireEvent.click(imageLink);
    expect(mockOnClick).toHaveBeenCalledWith('1');
  });

  it('Should disable the "Previous" button at the beginning', () => {
    render(<Gallery companies={companies} onClick={mockOnClick} />);
    const prevButton = screen.getAllByRole('button')[0];
    expect(prevButton).toBeDisabled();
  });

  it('Should disable the "Next" button at the end of the list', () => {
    render(<Gallery companies={companies} onClick={mockOnClick} />);
    fireEvent.click(screen.getAllByRole('button')[1]);
    const nextButton = screen.getAllByRole('button')[1];
    expect(nextButton).toBeDisabled();
  });
});

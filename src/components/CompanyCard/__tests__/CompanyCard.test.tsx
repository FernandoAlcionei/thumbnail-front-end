import { render, screen } from '@testing-library/react';
import CompanyCard from '../index';
import { Company } from '@/types/company';
import { describe, it, expect, beforeEach } from "vitest";

describe('CompanyCard', () => {
  const company: Company = {
    title: "Swaniawski - Tromp",
    cost: 200,
    id: "2db8bf39-b972-40b0-8feb-7f433cc27942",
    description: "holistic",
    thumbnail: "7152-m.jpg",
    image: "7152-b.jpg"
  };

  beforeEach(() => {
    process.env.NEXT_PUBLIC_API_IMAGES = 'http://localhost';
  });

  it('Should render company component correctly', () => {
    render(<CompanyCard company={company} />);

    expect(screen.getByText('Swaniawski - Tromp')).toBeInTheDocument();
    expect(screen.getByText('$200')).toBeInTheDocument();
    expect(screen.getByText('holistic')).toBeInTheDocument();
  });
});

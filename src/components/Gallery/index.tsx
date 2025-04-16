import { Company } from "@/types/company";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import Button from "../Button";
import classNames from "classnames";
import Image from "next/image";

interface Props {
  companies: Company[];
  onClick: (id: string) => void;
  selectedItem?: string;
}

const Gallery = ({ companies, onClick, selectedItem }: Props) => {
  const visibleItems = 4;
  const [startIndex, setStartIndex] = useState(0);

  const onNextClick = () => {
    const nextIndex = startIndex + visibleItems;
    if (nextIndex < companies.length) {
      setStartIndex(nextIndex);
    }
  };

  const onPrevClick = () => {
    const prevIndex = startIndex - visibleItems;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };

  const filteredCompanies = companies.slice(startIndex, startIndex + visibleItems);

  return (
    <div className="flex items-center justify-center gap-4 w-full">
      <Button onClick={onPrevClick} disabled={startIndex === 0}>
        <ChevronLeft className="w-8 h-8 text-gray-100" />
      </Button>

      <div className="flex items-center justify-center gap-1 w-full">
        {filteredCompanies.map((company) => (
          <a
            key={company.id}
            href="javascript:void(0)"
            onClick={() => onClick(company.id)}
            className={classNames('hover:opacity-90 hover:cursor-pointer rounded-lg border-2 border-transparent hover:border-blue-300 overflow-hidden', {
              '!border-blue-400': selectedItem == company.id
            })}
          >
            <Image
              width={100}
              height={100}
              style={{ objectFit: 'cover' }}
              src={process.env.NEXT_PUBLIC_API_IMAGES + '/companies/' + company.thumbnail}
              alt={company.title}
              className="w-full sm:h-24"
            />
          </a>
        ))}
      </div>

      <Button
        onClick={onNextClick}
        disabled={startIndex + visibleItems >= companies.length}
      >
        <ChevronRight className="w-8 h-8 text-gray-100" />
      </Button>
    </div>
  );
};

export default Gallery;

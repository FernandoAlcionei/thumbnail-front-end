import { Company } from "@/types/company";
import Image from "next/image";
import React from "react";

interface Props {
  company: Company;
}

const CompanyCard = ({ company }: Props) => (
  <div className="relative w-full overflow-hidden">
    <Image
      width={500}
      height={500}
      key={company.id}
      src={process.env.NEXT_PUBLIC_API_IMAGES + '/companies-large/' + company.image}
      alt={company.title}
      style={{ objectFit: 'cover' }}
      className="bg-black w-full h-[350px] sm:h-[500px]"
    />

    <div className="absolute bottom-0 right-0 left-0 bg-[#000000d9] p-2.5">
      <h1 className="text-lg text-blue-200">
        {company.title}
      </h1>

      <h6 className="text-sm text-white">
        ${company.cost}
      </h6>

      <h6 className="text-xs text-white">
        {company.description}
      </h6>
    </div>
  </div>
);

export default CompanyCard;

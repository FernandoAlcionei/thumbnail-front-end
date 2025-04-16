'use client';
import Gallery from "@/components/Gallery";
import CompanyCard from "@/components/CompanyCard";
import { useCompany } from "@/hooks/company";
import { Company } from "@/types/company";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: companies } = useCompany();
  const [company, setCompany] = useState<Company | null>(null);

  const onClickGallery = (id: string) => {
    setCompany(companies?.find((item) => item.id === id) || null);
  }

  useEffect(() => {
    if (companies) {
      setCompany(companies[0])
    }
  }, [companies])

  return (
    <div className="mx-auto p-5 flex flex-col items-center gap-5 max-w-xl">
      { company && <CompanyCard company={company} /> }

      {companies && (
        <Gallery
          selectedItem={company?.id}
          companies={companies}
          onClick={onClickGallery}
        />
      )}
    </div>
  );
}

import { apiClient } from '@/api/client';
import { Company } from '@/types/company';
import { useQuery } from '@tanstack/react-query';

export const useCompany = () => (
  useQuery({
    queryKey: ['companies'],
    queryFn: async () => {
      const response = await apiClient.get('/api/companies');
      return response.data as Company[];
    },
  })
);
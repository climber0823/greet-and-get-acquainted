
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { Business } from '@/types/business';

export const useBusinesses = (categoryId?: string, searchQuery?: string) => {
  return useQuery({
    queryKey: ['businesses', categoryId, searchQuery],
    queryFn: async () => {
      let query = supabase.from('businesses').select('*');

      if (categoryId) {
        query = query.eq('category_id', categoryId);
      }

      if (searchQuery) {
        query = query.ilike('name', `%${searchQuery}%`);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      return data as Business[];
    },
  });
};

import { CoffeeService } from "@/services/CoffeeService";
import { useQuery } from "react-query";
import { QueryKey } from "./QueryKeys";

export const useQueryCoffees = () => {
  return useQuery(QueryKey.GetCoffees, CoffeeService.getCoffees, {
    staleTime: 1000 * 60 * 60 * 1, // 1 hour
    keepPreviousData: true,
    retry: 0,
    refetchOnWindowFocus: false,
  });
};

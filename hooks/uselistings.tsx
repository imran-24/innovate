// import { getListings } from "@/app/actions/get-listings"
// import { useMemo } from "react";

import { useListingStore } from "./use-listing-store";

// export async function useListings() {
//     const data =await useMemo(async () => {
//         try {
//             return await getListings();
//         } catch (error) {
//             console.error("Error fetching listings:", error);
//             return null;
//         }
//     }, []);

export const useByValue = (value: string | undefined) => {
  const { data } = useListingStore();
  if (!value) return;

  return data?.find(
    (item: any) =>
      value === item.airport_name ||
      value === item.city_name ||
      value === item.country_name
  );
};

//   return {
//     getByValue,
//   };
// }

import { create } from "zustand";

type ListingStore = {
    data: any;
    onSet: (value: any) => void;
};

export const useListingStore = create<ListingStore>((set) => ({
  data: [],
  onSet: (data: any) => set({ data: data }),
}));
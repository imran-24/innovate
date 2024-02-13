import BookingCard from "@/components/booking/booking-card";
import { getListings } from "./actions/get-listings";


export default async function Home() {
  // const lists = await getListings();
  const lists:any = [];
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-full  lg:max-w-6xl px-6 lg:px-10   w-full">
        <BookingCard  listings={lists}/>
      </div>
    </div>
  );
}

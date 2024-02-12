import BookingCard from "@/components/booking/booking-card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-full  lg:max-w-6xl px-6 lg:px-10   w-full">
        <BookingCard />
      </div>
    </div>
  );
}

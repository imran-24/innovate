"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import BookingForm from "./booking-form";
import BookingCardHeader from "./Booking-card-header";
import { useEffect, useState } from "react";
import BookingCardFooter from "./Booking-card-footer";
import { useListingStore } from "@/hooks/use-listing-store";

export enum STEPS {
  ONE = 1,
  TWO = 2,
  THREE = 3,
}

interface BookingCardProps {
  listings: any;
}

const BookingCard = ({ listings }: BookingCardProps) => {
  const [step, setStep] = useState(STEPS.ONE);
  const { data, onSet } = useListingStore();

  useEffect(() => {
    if (!listings) return;
    onSet(listings);
  }, [onSet]);

  const changeStep = (value: number) => setStep(value);

  //   console.log(data.length)
  return (
    <Card className="w-full">
      <CardHeader>
        <BookingCardHeader step={step} onClick={(value) => changeStep(value)} />
      </CardHeader>
      <CardContent>
        <BookingForm value={step} />
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row  md:justify-between items-start md:items-center  space-x-2 space-y-2 sm:space-y-0">
        <BookingCardFooter />
      </CardFooter>
    </Card>
  );
};

export default BookingCard;

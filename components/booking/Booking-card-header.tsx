'use client'

import { Button } from "../ui/button";
import { STEPS } from "./booking-card";

interface BookingCardHeaderProps{
    step: number,
    onClick: (value: number) => void;
}

const BookingCardHeader = ({step, onClick}: BookingCardHeaderProps) => {
  return (
    <div className="flex items-center space-x-2">
        <Button
        onClick={()=> onClick(STEPS.ONE)}
        type="button"
        variant={STEPS.ONE === step ? 'active' : 'secondary'}>
            One-way
        </Button>
        <Button 
        onClick={()=> onClick(STEPS.TWO)}
        type="button"
        variant={STEPS.TWO === step ? 'active' : 'secondary'}>
            Round-trip
        </Button>
        <Button 
        onClick={()=> onClick(STEPS.THREE)}
        type="button"
        variant={STEPS.THREE === step ? 'active' : 'secondary'}>
            Multi-trip
        </Button>
    </div>
  )
}

export default BookingCardHeader
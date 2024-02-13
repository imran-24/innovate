'use client'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { ScrollArea } from "./ui/scroll-area"
import CalenderDetailsContent from "./input-details-content";
import { Input } from "./ui/input";
import { useByValue } from "@/hooks/uselistings";
import { useListingStore } from "@/hooks/use-listing-store";
import Calendar from "./Calendar";
import { Button } from "./ui/button";

interface CalenderDetailsProps{
    children: React.ReactNode,
    align: "start" | "center" | "end" | undefined,
    value?: string,
    label: string,
    onChange?: (value: string) => void; 
    isMobile?: boolean 
}

const popularCities = [
    "Dhaka",
    "Chittagong",
    "Sylhet",
    "Cox's Bazar",
    "Rajshahi",
    "Jessore",
    "Barisal",
    "Saidpur",
    "Pabna"]

const CalenderDetails = ({children, align, label, value, isMobile}: CalenderDetailsProps) => {
  // const {getByValue} = await useListings();
  // const {data} = useListingStore();

  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-full">
            {/* {children} */}
            {children}
        </div>
      </PopoverTrigger>
      <PopoverContent 
      align={align}
      sticky="always"
    //   translate="yes"
      sideOffset={-136}
      alignOffset={!isMobile ? -25 : 0}
      className="w-full lg:w-auto p-0 py-6">
        <div className="grid w-full space-y-4">
            <div className="flex items-center justify-between px-3">
              <div className="w-full">
                <Button className="w-fit col-" variant="ghost" size="sm">Clear</Button>
              </div>
              <div className="w-full">
                {children}
              </div>
            </div>
            <Calendar />
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default CalenderDetails
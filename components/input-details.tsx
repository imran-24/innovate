'use client'

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

import { ChevronDown } from "lucide-react"

interface InputDetailsProps{
    children: React.ReactNode,
    align: "start" | "center" | "end" | undefined
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

const InputDetails = ({children, align}: InputDetailsProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="w-full">
            {children}
        </div>
      </PopoverTrigger>
      <PopoverContent 
      align={align}
      sticky="always"
    //   translate="yes"
      sideOffset={-74}
      alignOffset={-25}
      className="w-[580px] p-0 py-6">
        <div className="grid w-full space-y-4">
            <div className="w-full overflow-hidden group px-6 relative ">
                {children}
                {/* <div className={cn("h-8 w-8 peer-focus:border-green-500 z-10 bg-white peer-hover:border-neutral-400  absolute top-2",
                align === "start" && "right-6 border-r",
                align === "end" && "-left-6 border-l",
                )}/> */}
            </div>
            <div>
                <h2 className="px-6 font-semibold pb-2">Nearby</h2>
                <div className=" py-3 px-6  hover:bg-green-200/50 hover:text-green-500 transition duration-300 cursor-pointer">
                    <p className="">Dhaka Airport, Bangladesh</p>
                </div>
            </div>
            <div>
                <h2 className="px-6 font-semibold pb-2">Popular cities</h2>
                <div className="grid grid-cols-3 px-6 gap-x-6 space-y-1">
                    {
                        popularCities.map(city => (
                            <div className="w-fit py-1 px-2 rounded-md cursor-pointer transition  hover:bg-green-200/50 hover:text-green-500" key={city}>
                                <p > {city} </p>
                            </div>
                        ))
                    }
                </div>
            </div>  
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default InputDetails
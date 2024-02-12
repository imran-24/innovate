'use client'

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import CheckItem from "./check-item"
import { ChevronDown } from "lucide-react"
import { Separator } from "../ui/separator"

const paymentMethod = [
    {
        label: "MasterCard Credit",
        id: "MC1"
    },
    {
        label: "Visa Card",
        id: "VC"
    },
    {
        label: "BRAC Bank",
        id: "BB"
    },
    {
        label: "American Express",
        id: "AE"
    },
    {
        label: "Bank Transfer",
        id: "BT"
    },
    {
        label: "Dines Club",
        id: "DC"
    },
    {
        label: "MasterCard Debit",
        id: "MD"
    },
    {
        label: "Pay Pal",
        id: "PP"
    },
    {
        label: "CashPayment",
        id: "CP"
    },
    {
        label: "Western Union",
        id: "WU"
    },
    {
        label: "Bitcoin",
        id: "B"
    },
    {
        label: "Apple Pay",
        id: "AP"
    },
]

export function Payment() {
    const [paymentType, setPaymentType] = useState([
    {
        label: "MasterCard Credit",
        value: false,
        id: "MC1"
    },
    {
        label: "Visa Card",
        value: false,
        id: "VC"
    },
    {
        label: "BRAC Bank",
        value: false,
        id: "BB"
    },
    {
        label: "American Express",
        value: false,
        id: "AE"
    },
    {
        label: "Bank Transfer",
        value: false,
        id: "BT"
    },
    {
        label: "Dines Club",
        value: false,
        id: "DC"
    },
    {
        label: "MasterCard Debit",
        value: false,
        id: "MD"
    },
    {
        label: "Pay Pal",
        value: false,
        id: "PP"
    },
    {
        label: "CashPayment",
        value: false,
        id: "CP"
    },
    {
        label: "Western Union",
        value: false,
        id: "WU"
    },
    {
        label: "Bitcoin",
        value: false,
        id: "B"
    },
    {
        label: "Apple Pay",
        value: false,
        id: "AP"
    },
])
    const onChange = (item: {label: string, value: boolean, id: string}) => {
        setPaymentType(prev => (
            prev.map(p => {
                if (p.id === item.id) {
                    return {
                        ...p,
                        value: !p.value
                    };
                }
                return p;
            })
        ));
    }

    const countPaymentMethod = paymentType.filter( item => item.value )
    

    return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
            type='button'
            variant={'outline'}
            className='rounded-md  hover:bg-transparent font-normal'>
              <span>{countPaymentMethod.length} Payment Type</span> <ChevronDown className='h-4 w-4 ml-2 text-muted-foreground' />
            </Button>      
        </PopoverTrigger>
      <PopoverContent 
      align="end"
      sticky="always"
      translate="yes"
      sideOffset={-40}
      className="w-[380px]">
        <div className="grid space-y-6">
            <div className="space-y-2">
                <p className="text-[10px] font-light text-muted-foreground">
                    By Selecting One Or More (Max 10) Payment Types, Prices On Wego Will Include Applicable Minimum Payment Fee. Please Note That Not All Providers Support All Payment Types.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
                {
                    paymentType.map(item => (
                        <CheckItem 
                        checked={item.value}
                        onChange={() => onChange(item)}
                        label={item.label} 
                        key={item.id} />
                    ))
                }
            </div>
            <div className="space-y-2">
                <p className="text-[10px] font-light text-muted-foreground">
                Tips: To Find Popular Payment Types, You Can Change Your {"Country"} Setting (Located On Top-Right Menu).            
                </p>
            </div>
            <Separator />
        </div>
        <div className="flex justify-end">
            <Button 
            variant={'link'}
            className="text-green-500 hover:bg-transparent hover:text-green-500">
                Apply
            </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

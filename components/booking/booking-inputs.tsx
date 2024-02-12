'use client'

import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ArrowLeftRight } from 'lucide-react'
import InputDetails from '../input-details'

// interface BookingInputsProps{
//     from: string;
//     to?: string;
//     depart?: string;
//     back?: string;
//     onChangeFrom: (value: string)=> void;
//     onChangeTo?: (value: string)=> void;
//     onChangeDepart?: (value: string)=> void;
//     onChangeReturn?: (value: string)=> void;
// }

const BookingInputs = (
//     {
//     depart,
//     from,
//     back,
//     to,
//     onChangeDepart,
//     onChangeFrom,
//     onChangeReturn,
//     onChangeTo,
    
// }: BookingInputsProps
) => {

    return (
    <div className="grid w-full items-center gap-4">
        <div className="relative  w-full flex items-center justify-center gap-x-2">
            <InputDetails
            align='start'>
                <Input 
                label="From" 
                />
            </InputDetails>
            <Button 
                type="button"
                size={'icon'}
                variant={'ghost'}
                className="z-50 bg-white h-fit w-fit hover:bg-transparent  absolute shrink-0">
                <ArrowLeftRight className="text-neutral-400 h-5 w-5" />
            </Button>
            <InputDetails
            align='end'>
                <Input  
                label="To" 
                />
            </InputDetails>
        </div>     
    </div>
  )
}

export default BookingInputs
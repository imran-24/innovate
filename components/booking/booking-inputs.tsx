'use client'

import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ArrowLeftRight } from 'lucide-react'
import InputDetails from '../input-details'
import { useMediaQuery } from 'usehooks-ts'
import CalenderDetails from '../calender-details'

interface BookingInputsProps{
    data:{
        from: string;
        to: string;
        depart: string;
        return: string;
    },
    type: number,
    onValueChange: (type: 'from' | 'to' | 'depart' | 'return' , value: string) => void;

}

const BookingInputs = (
    {data, onValueChange, type}: BookingInputsProps
) => {
    const isMobile = useMediaQuery("(max-width: 768px)")

    return (
    <div className="grid w-full items-center gap-4">
        <div className="relative  w-full md:flex-row flex-col  flex items-center justify-center gap-y-2  gap-x-2">
            <div className='relative w-full flex-[.7]  flex items-center justify-center  gap-x-2'>
                <InputDetails
                isMobile
                label="From"
                align='start'
                value={data?.from}
                onChange={(value) => onValueChange('from', value)}
                >
                    <Input 
                    label="From" 
                    curve
                    value={data?.from}
                    // onChange={(e) => onValueChange('from', e.target.value)}
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
                label='To'
                isMobile
                align='end'
                value={data?.to}
                onChange={(value) => onValueChange('to', value)}>
                    <Input  
                    label="To" 
                    curve
                    value={data?.to}
                    // onChange={(e) => onValueChange('to', e.target.value)}
                    />
                </InputDetails>
            </div>
            <div className='w-full flex-[.4] flex items-center gap-2'>
                <CalenderDetails 
                align={type === 2 ? 'start' : 'end'}
                label='Depart'
                isMobile
                value={data.depart}>
                    <Input  
                    label="Depart" 
                    value={data?.to}
                    />
                </CalenderDetails>
                {type === 2 &&
                <CalenderDetails 
                align='end'
                label='returnreturn'
                isMobile
                value={data.depart}>
                    <Input  
                    label="Return" 
                    value={data?.to}
                    />
                </CalenderDetails>}
            </div>
        </div>     
    </div>
  )
}

export default BookingInputs
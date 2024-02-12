'use client'
import React, { useState } from 'react'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Button } from '../ui/button';
import { ChevronDown, Minus, Plus } from 'lucide-react';
import { useMediaQuery } from 'usehooks-ts';

  
const Passenger = () => {
  
  const [adult, setAdult] = useState<number>(1);
  const [child, setChild] = useState<number>(0)
  const [infant, setInfant] = useState<number>(0)


  const addAdult = ()=> setAdult(prev => prev + 1);
  const minusAdult = ()=> setAdult(prev => prev - 1);

  const addChild = ()=> setChild(prev => prev + 1);
  const minusChild = ()=> setChild(prev => prev - 1);

  const addInfant = ()=> setInfant(prev => prev + 1);
  const minusInfant = ()=> setInfant(prev => prev - 1);
  const isMobile = useMediaQuery("(max-width: 768px)")

  let align: "center" | "start" | "end" | undefined = isMobile ? "start" : "end";
  let totalPassengers = adult + child + infant;

  return (
    <Popover>
        <PopoverTrigger 
        asChild>
            <Button
            type='button'
            variant={'outline'}
            className='rounded-md  hover:bg-transparent font-normal'>
                {totalPassengers} Adult <ChevronDown className='h-4 w-4 ml-2 text-muted-foreground' />
            </Button>
        </PopoverTrigger>
        <PopoverContent 
        className='w-60'
        align={align}
        sticky="always"
        translate="yes"
        sideOffset={-40}
        >
            <div className='flex flex-col space-y-2'>
                <div className='flex items-center justify-between'>
                    <p className='text-sm'>Adults
                        <span className='block text-[10px] text-muted-foreground'> {`>`}12 Years</span>
                    </p>
                    <div className='flex items-center space-x-2'>
                        <Button
                        disabled={adult === 1}
                        onClick={minusAdult}
                        className='p-1 rounded-md  w-fit h-fit'
                        size={'icon'} variant={adult > 1 ? 'green':'secondary'} >
                            <Minus size={16} />
                        </Button>
                        <p className='w-4 text-center'>{adult}</p>
                        <Button
                        onClick={addAdult}
                        className='p-1 rounded-md  w-fit h-fit'
                        size={'icon'} variant={'green'} >
                            <Plus size={16} />
                        </Button>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-sm'>Children
                        <span className='block text-[10px] text-muted-foreground'>2{`-`}12 Years</span>
                    </p>
                    <div className='flex items-center space-x-2'>
                        <Button
                        disabled={child === 0}
                        onClick={minusChild}
                        className='p-1 rounded-md  w-fit h-fit'
                        size={'icon'} variant={child > 0 ? 'green':'secondary'} >
                            <Minus size={16} />
                        </Button>
                        <p className='w-4 text-center'>{child}</p>
                        <Button
                        onClick={addChild}
                        className='p-1 rounded-md  w-fit h-fit'
                        size={'icon'} variant={'green'} >
                            <Plus size={16} />
                        </Button>
                    </div>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-sm'>Infants
                        <span className='block text-[10px] text-muted-foreground'> {`<`}2 Years</span>
                    </p>
                    <div className='flex items-center space-x-2'>
                        <Button
                        disabled={infant === 0}
                        onClick={minusInfant}
                        className='p-1 rounded-md  w-fit h-fit'
                        size={'icon'} variant={infant > 0 ? 'green':'secondary'} >
                            <Minus size={16} />
                        </Button>
                        <p className='w-4 text-center'>{infant}</p>
                        <Button
                        onClick={addInfant}
                        className='p-1 rounded-md  w-fit h-fit'
                        size={'icon'} variant={'green'} >
                            <Plus size={16} />
                        </Button>
                    </div>
                </div>
            </div>
        </PopoverContent>
    </Popover>
  )
}

export default Passenger
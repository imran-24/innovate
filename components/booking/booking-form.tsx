'use client'

import React, { useEffect, useState } from 'react';
import BookingInputs from './booking-inputs';
import { Button } from '../ui/button';
import { PlusCircle, X } from 'lucide-react';

function BookingForm({value}: {value: number}) {
  console.log(value)
  const [inputs, setInputs] = useState(Array.from({ length: value }, () => '')); 

  useEffect(() => {
    if(value === 3) setInputs(Array.from({ length: value }, () => ''));
    else setInputs([''])
  }, [value]);

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleInputChange = (index: any, value: any) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(inputs); 
  };

  const handleRemoveInput = (index: number) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div className='flex flex-col  space-y-2'>
            {value === 3 &&
            <div className='ml-auto'>
                <Button 
                type='button'
                size={'sm'}
                onClick={handleAddInput}
                className='text-green-500 hover:text-green-500 hover:bg-green-200/50'
                variant={'outline'}>
                    <PlusCircle size={16} className='mr-2' />
                    Add Flight
                </Button>
            </div>}
            {inputs.map((input, index) => (
                <div key={index} className='flex items-center space-x-3'>
                    <BookingInputs/>
                    {inputs.length > 2 &&
                    <Button
                    type='button'
                    variant={'destructive'}
                    className='w-fit h-fit p-1'
                    onClick={() => handleRemoveInput(index)}
                    size={'icon'}>
                        <X size={16} /> 
                    </Button>}
                </div>
            ))}
        </div>
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
}

export default BookingForm;

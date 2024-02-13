'use client'

import React, { useEffect, useState } from 'react';
import BookingInputs from './booking-inputs';
import { Button } from '../ui/button';
import { PlusCircle, X } from 'lucide-react';



function BookingForm({value}: {value: number}) {

  const [inputs, setInputs] = useState(Array.from({ length: value }, 
    () =>  ({
              from: '',
              to: '',
              depart: '',
              return: '',
            }) )); 

  useEffect(() => {
    if (value === 3) {
        setInputs(prevInputs => [
            ...prevInputs,
            ...Array.from({ length: value - prevInputs.length }, () => ({
                from: '',
                to: '',
                depart: '',
                return: '',
            }))
        ]);
    } else {
        const filteredInputs = inputs.filter(input => input.from || input.to || input.depart);

        if (filteredInputs.length > 0) {
            setInputs([filteredInputs[0]]);
        } else {
            setInputs([{ from: '', to: '', depart: '', return: '' }]);
        }
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [value]);


  const handleAddInput = () => {
    setInputs([...inputs, 
      {
        from: '',
        to: '',
        depart: '',
        return: '',
      }]);
  };

  const handleInputChange = (index: any,type: 'from' | 'to' | 'depart' | 'return' , value: any) => {
    const newInputs = [...inputs];
    newInputs[index][type] = value;
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
                    <BookingInputs
                    type={value}
                    onValueChange={(type, value)=> handleInputChange(index, type, value)}
                    data={input}/>
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

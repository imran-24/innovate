'use client'

import WindowedSelect, { components, createFilter } from 'react-windowed-select';
import React from "react";
import { useListingStore } from '@/hooks/use-listing-store';

// export type ListingType = {
//   code: string,
//   airport_name: string,
//   city_name: string,
//   city_code: string,
//   country_name: string,
//   search_contents:'string'}


// interface InputDetailsContentProps{
//   value?: any,
//   onChange?: (value: any) => void;
// }

const customFilter = createFilter({ ignoreAccents: false });
const customComponents = {
  ClearIndicator: (props: any) => <components.ClearIndicator {...props}>clear</components.ClearIndicator>
};

const InputDetailsContent = () => {

  const {data} = useListingStore()
  return (
    <div>
        <WindowedSelect
            windowThreshold={200}
            placeholder='From'
            isClearable
            options={data}
            components={customComponents}
            filterOption={customFilter}
            // value={value}
            // onChange={(value)=> onChange(value as CountrySelectValue)}
            formatOptionLabel={(option: any)=>(
                <div className='flex flex-row items-center gap-3 truncate'>
                    <div className='flex-1'>{option.airport_name}</div>
                    <div className='text-sm '>
                        {option.city_name}
                        <span className='text-neutral-500 ml-1'>
                            {option.country_name}
                        </span>
                    </div>
                </div>
            )}
            classNames={{
                control: () => 'p-2 border-2',
                input: () => 'text-base font-semibold',
                option: ()=> 'text-lg'
            }}
            theme={(theme)=> ({
                ...theme,
                borderRadius: 6,
                colors:{
                    ...theme.colors,
                    primary: 'rgb(34 197 94)',
                    primary25: 'rgb(187 247 208)'
                }
            })}
        />
    </div>
  )
}

export default InputDetailsContent
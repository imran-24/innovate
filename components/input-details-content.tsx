'use client'

import Select from 'react-select'


const InputDetailsContent = ({data}: any) => {

  return (
    <div>
        <Select
            placeholder='Anywhere'
            isClearable
            options={data}
            // value={value}
            // onChange={(value)=> onChange(value as CountrySelectValue)}
            formatOptionLabel={(option: any)=>(
                <div className='flex flex-row items-center gap-3'>
                    <div>{option.airport_name}</div>
                    <div className='text-sm'>
                        {option.city_name}
                        <span className='text-neutral-500 ml-1'>
                            {option.country_name}
                        </span>
                    </div>
                </div>
            )}
            classNames={{
                control: () => 'p-2 border-2',
                input: () => 'text-lg',
                option: ()=> 'text-lg'
            }}
            theme={(theme)=> ({
                ...theme,
                borderRadius: 6,
                colors:{
                    ...theme.colors,
                    primary: 'black',
                    primary25: '#ffe4e6'
                }
            })}
        />
    </div>
  )
}

export default InputDetailsContent
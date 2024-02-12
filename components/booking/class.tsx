import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const seatType = [
    {  
    label:'Economy',
    value: "economy"
    }, 
    {
    label:'Premium Economy',
    value: 'premium_conomy'
    }, 
    {
    label:'Business Class',
    value: 'business_class'
    }, 
    {
    label:'First Class',
    value: 'first_class'
    }
]
const Class = () => {

    return (
        <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue  placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent 
        align="end"
        sticky="always"
        translate="yes"
        sideOffset={-45}>
          <SelectGroup>
            {/* <SelectLabel>Fruits</SelectLabel> */}
            
            {seatType.map(item => (
                <SelectItem key={item.value}  value={item.value}>
                    {item.label}
                </SelectItem>
                ))
            }
            
          </SelectGroup>
        </SelectContent>
      </Select>
  
  )
}

export default Class
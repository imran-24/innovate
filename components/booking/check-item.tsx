'use client'
import { Checkbox } from '../ui/checkbox'

interface CheckItemProps{
    label?: string,
    onChange: ()=> void,
    checked: boolean
}

const CheckItem = ({label, checked, onChange}: CheckItemProps) => {
  return (
    <div className="items-top flex space-x-2">
        <Checkbox 
        checked={checked}
        onCheckedChange={onChange}/>
        <div className="grid gap-1.5 leading-none">
            <label
            htmlFor="terms1"
            className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
            {label}
            </label>
        </div>
    </div>
  )
}

export default CheckItem
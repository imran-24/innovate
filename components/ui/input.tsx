import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string,
    
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    return (
      <div className="relative w-full overflow-hidden">
         <input
         placeholder=" "
          type={type}
          className={cn(
           `flex
            h-12
            px-[20px] 
            peer
            group
            w-full   
            rounded-md   
            border-[1.5px] 
            outline-none  
            focus-visible:border-green-500  
            hover:border-neutral-400  
            bg-background 
            transition
            text-sm  
            disabled:cursor-not-allowed 
            disabled:opacity-50`,
            className
          )}
          ref={ref}
          {...props}
        /> 
       
        {
        label && 
          <label 
          className="absolute 
          left-[20px] 
          top-1
          text-neutral-500 
          text-xs
          transition-all
          peer-placeholder-shown:text-sm 
          peer-placeholder-shown:text-neutral-500 
          peer-placeholder-shown:top-3.5 
          peer-focus:top-1
          peer-focus:text-gray-600 
          peer-focus:text-xs">
          {label}
          </label>}
        <div className={cn("h-8 w-8 peer-focus:hidden z-10 bg-white peer-hover:border-neutral-400  rounded-full border  absolute top-2",
          label === "From" && "-right-4",
          label === "To" && "-left-4",
          )}/>
        </div>
    )
  }
)
Input.displayName = "Input"

export { Input }

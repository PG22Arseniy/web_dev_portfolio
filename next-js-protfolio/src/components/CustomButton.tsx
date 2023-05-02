import { DetailedHTMLProps, ButtonHTMLAttributes, forwardRef } from "react" 
import React from "react"
// passing a type of <Button>
const CustomButton = forwardRef<HTMLButtonElement,
DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, 
HTMLButtonElement>>(
    ({className, children,  ...rest }, ref) => {

    return(
        <button
            className={`customButton ${className}`}
            {...rest} 
            ref = {ref} 
        >
            {children} 
        </button> 
    )
})

export default CustomButton 
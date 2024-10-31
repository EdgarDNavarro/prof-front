import { ButtonHTMLAttributes, ReactNode } from "react";
import { ColorsUI } from "./types";
import { LinkProps } from "react-router-dom";

type ButtonProps = {
    children: ReactNode
    color?: ColorsUI
    variant?: 'text' | 'tonal' | 'outlined' | 'contained'
    Component?: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>
    to?: string
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, color, variant, className, Component, to, ...props} : ButtonProps) => {
    const buttonClass = () => {
        if(variant === 'contained') {
            if(color === 'primary') {
                return "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-100 text-white"
            } else if(color === 'success') {
                return "bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 disabled:bg-lime-100 text-white"
            } else if(color === 'secondary') {
                return "border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-950 border"
            }  else if(color === 'error') {
                return "bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 disabled:bg-rose-100 text-white"
            } else if(color === 'warning') {
                return "bg-amber-600 hover:bg-amber-700 focus:ring-amber-500 disabled:bg-amber-100 text-white"
            }
        } else if(variant === 'text') {
            if(color === 'primary') {
                return "hover:bg-blue-100 focus:ring-blue-500 disabled:text-blue-300 text-blue-600"
            } else if(color === 'success') {
                return "hover:bg-lime-100 focus:ring-lime-500 disabled:text-lime-300 text-lime-600"
            } else if(color === 'secondary') {
                return "hover:bg-gray-100 focus:ring-gray-500 disabled:text-gray-300 text-gray-600"
            }  else if(color === 'error') {
                return "hover:bg-rose-100 focus:ring-rose-500 disabled:text-rose-300 text-rose-600"
            } else if(color === 'warning') {
                return "hover:bg-amber-100 focus:ring-amber-500 disabled:text-amber-300 text-amber-600"
            }
        } else if(variant === 'tonal') {
            if(color === 'primary') {
                return "bg-blue-100 hover:bg-blue-200 focus:ring-blue-500 disabled:text-blue-300 text-blue-600"
            } else if(color === 'success') {
                return "bg-lime-100 hover:bg-lime-200 focus:ring-lime-500 disabled:text-lime-300 text-lime-600"
            } else if(color === 'secondary') {
                return "bg-gray-100 hover:bg-gray-200 focus:ring-gray-500 disabled:text-gray-300 text-gray-600"
            }  else if(color === 'error') {
                return "bg-rose-100 hover:bg-rose-200 focus:ring-rose-500 disabled:text-rose-300 text-rose-600"
            } else if(color === 'warning') {
                return "bg-amber-100 hover:bg-amber-200 focus:ring-amber-500 disabled:text-amber-300 text-amber-600"
            }
        }
    }
    if(Component && to) return (
        <Component 
            className={`${buttonClass()} rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
            to={to}
        >
            {children}
        </Component>
    )
    return (
        <button 
            className={`${buttonClass()} rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
 
export default Button;
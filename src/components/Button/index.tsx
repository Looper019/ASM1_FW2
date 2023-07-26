import React from 'react'

type ButtonProps = {
    children?: React.ReactNode,
    type?: "primary"
    primary?: boolean
    onClick?: () => void
}

const Button = ({ children, type, primary, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className={`p-2 border border-gray-400-rouded 
        ${type == "primary" && "bg-blue-500 text-white"}
        
        `}>
            {children}
        </button>
    )
}

export default Button
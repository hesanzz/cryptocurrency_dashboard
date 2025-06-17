
import React from "react";

// Input component for user input fields
// It accepts all standard input attributes and applies custom styles
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

// Input component definition
// It uses TypeScript to define the props and applies custom styles
const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
    return (
        <input
            className={`bg-transparent focus:outline-none w-full text-white rounded ${className}`}
            {...props}
        />
    );
};

export default Input;

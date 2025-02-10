import React from "react";

type InputProps = {
    placeholder: string;
}

export const Input: React.FC<InputProps> = ({placeholder}) => {
    return <input type="text" placeholder={placeholder} />
}
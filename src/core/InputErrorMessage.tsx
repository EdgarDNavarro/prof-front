import React from "react";

interface InputErrorMessageProps {
    message?: string;
}

const InputErrorMessage: React.FC<InputErrorMessageProps> = ({ message }) => {
    if (!message) return null; // Si no hay mensaje, no mostrar nada

    return <p className="mt-1 text-sm text-red-600">{message}</p>;
};

export default InputErrorMessage;

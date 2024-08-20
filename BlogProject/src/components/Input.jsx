import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const inputId = useId();

  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-2 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        ref={ref}
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
});

export default Input;

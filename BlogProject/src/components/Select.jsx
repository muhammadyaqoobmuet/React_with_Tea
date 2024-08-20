import React from 'react';

function Select({ options, label, ...props }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      <select {...props} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;

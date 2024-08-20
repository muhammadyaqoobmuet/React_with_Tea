import React from 'react';

function Input({
  label,
  isReq,
  setUser,
  user = {},
  ...props
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className='w-full mb-4'>
      <label className='block text-gray-700 text-sm font-semibold mb-1 dark:text-white'>
        {label || 'Fill the field'}
        {isReq && <span className='text-red-500'>*</span>}
      </label>
      <input
        name={label.toLowerCase()}  // Use label or another unique name
        onChange={handleChange}
        value={user[label.toLowerCase()] || ''}  // Controlled input
        className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
        {...props}
      />
    </div>
  );
}

export default Input;

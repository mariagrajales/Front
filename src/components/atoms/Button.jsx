import React from 'react';

const Button = ({ onClick, children, className }) => (
  <button
    onClick={onClick}
    className={`bg-teal-500 text-black p-2 rounded ${className}`}
  >
    {children}
  </button>
);

export default Button;

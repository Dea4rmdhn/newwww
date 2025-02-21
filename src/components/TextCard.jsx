import React from 'react';

export const TextCard = ({ title, description }) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden shadow-lg bg-white rounded-lg p-6">
      <h2 className="mb-4 text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-700 whitespace-pre-line">{description}</p>
    </div>
  );
};

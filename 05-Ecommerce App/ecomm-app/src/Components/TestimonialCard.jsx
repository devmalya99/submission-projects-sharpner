// TestimonialCard.jsx
import React from 'react';

const TestimonialCard = (props) => {
  const { name, profession, testimony, image } = props;

  return (
    <div className="rounded-md shadow-md p-6 bg-white">
      <img className="rounded-full w-16 h-16 mb-4" src={image} alt={name} />
      <h3 className="text-xl mb-2">{name}</h3>
      <p className="text-sm text-gray-500 mb-4">{profession}</p>
      <p className="text-base italic">" {testimony} "</p>
    </div>
  );
};

export default TestimonialCard;
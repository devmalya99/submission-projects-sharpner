import React from 'react';

const FeaturedCategoryCard = ({ id, name, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a href={`/category/${id}`} role="button">View Category</a>
        </button>
      </div>
    </div>
  )
};
export default FeaturedCategoryCard;
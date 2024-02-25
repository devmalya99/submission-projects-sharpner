


import  { useState } from 'react';

const Carousel = ({ products, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = () => {
    const index = activeIndex >= products.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(index);
  };
  
  const prevSlide = () => {
    const index = activeIndex <= 0 ? products.length - 1 : activeIndex - 1;
    setActiveIndex(index);
  };
  
  return (
    <section aria-label={title}>
    <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400" onClick={prevSlide} aria-label="Previous slide">
      Prev
    </button>

    <div>
      {products.map((product, index) => (
        <div key={product.id} hidden={index !== activeIndex} className="rounded overflow-hidden shadow-lg p-4">
          <img src={product.image} alt={product.name} className="w-full"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.name}</div>
            <p className="text-gray-700 text-base">{product.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">${product.price}</span>
          </div>
        </div>
      ))}
    </div>

    <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-400" onClick={nextSlide} aria-label="Next slide">
      Next
    </button>

    <div className="mt-4">
      {products.map((product, index) => (
        <button key={product.id} aria-current={index === activeIndex} onClick={() => setActiveIndex(index)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {index + 1}
        </button>
      ))}
    </div>
  </section>
  );
};
export default Carousel;
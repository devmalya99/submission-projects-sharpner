import React from 'react';
import Footer from './Footer';
import Carousel from './Carousel.jsx';
import FeaturedCategoryCard from './FeaturedCategoryCard.jsx';
import TestimonialCard from './TestimonialCard';

import { lazy, Suspense } from 'react';
const HomeProducts = lazy(() => import('./HomeProducts'));

// import EventCard from './EventCard';
// import PromotionCard from './PromotionCard';

const Home = () => {
  // Dummy product data
  const products = [
    { id: 1, name: 'Product 1', description: 'This is product description', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww', price: 100 },
    { id: 2, name: 'Product 2', description: 'This is product description', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: 200 },
    { id: 3, name: 'Product 3', description: 'This is product description', 
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D', 
    price: 300 },
    { id: 4, name: 'Product 4', description: 'This is product description', 
    image: 'https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzaWduZXIlMjBwb3RzfGVufDB8fDB8fHww', 
    price: 400 },
    { id: 5, name: 'Product 5', description: 'This is product description', 
    image: 'https://images.unsplash.com/photo-1593526411462-6fbbec21d9a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RhdGlvbmFyeXxlbnwwfHwwfHx8MA%3D%3D', 
    price: 500 },
  ];
  
  const featuredCategories = [
    { id: 1, name: 'Category 1', 
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Category 2', 
    image: 'https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzaWduZXIlMjBwb3RzfGVufDB8fDB8fHww' },
    { id: 3, name: 'Category 3', 
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 4, name: 'Category 4', 
    image: 'https://images.unsplash.com/photo-1593526411462-6fbbec21d9a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RhdGlvbmFyeXxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 5, name: 'Category 5', 
    image: 'https://images.unsplash.com/photo-1532285023254-17336184c0e5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxxb2w1a1BwdGkyb3x8ZW58MHx8fHx8' },
  ];
  
  const testimonials = [
    { id: 1, name: 'John Doe', profession: 'Developer', testimony: 'This is awesome!', image: 'image-url' },
    { id: 2, name: 'Jane Doe', profession: 'Designer', testimony: 'Great experience!', image: 'image-url' },
    { id: 3, name: 'Bob Smith', profession: 'Manager', testimony: 'Saved time and effort', image: 'image-url' },
    { id: 4, name: 'Alice Johnson', profession: 'Graphic artist', testimony: 'Impressive range!', image: 'image-url' },
    { id: 5, name: 'Charlie Brown', profession: 'Freelancer', testimony: 'Good quality service', image: 'image-url' },
  ];
  

return (
  <>
  <div className="min-h-screen bg-gray-100 text-gray-800 py-12 px-4">
    <div className="container mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      
      <Carousel products={products} title="Featured Products" />

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 p-8 bg-indigo-100 rounded-lg">
        {featuredCategories.map((category) => (
          <FeaturedCategoryCard key={category.id} {...category} className="bg-white rounded p-5 shadow"/>
        ))}
      </section>

      <section className="mt-8 p-8 bg-purple-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">New Products</h2>
        <Carousel products={products.slice(0, 3)} title="New Arrivals" className="shadow"/>
      </section>

      <React.Suspense fallback={<div>Loading...</div>}>
         <section>
        <HomeProducts />
      </section>
      </React.Suspense>

     

       <section className="mt-8 p-8 bg-green-100 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <div className="grid grid-cols-2 gap-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} className="bg-white rounded p-5 shadow"/>
          ))}
        </div>
      </section> 



    </div>
    <Footer className="bg-blue-300 mt-8 rounded-t-lg"/>
  </div>
  </>
)}


    
     
export default Home;

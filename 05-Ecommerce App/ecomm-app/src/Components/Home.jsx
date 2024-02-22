import React from 'react'
import Footer from './Footer';
const Home = () => {
    const events = [
        { date: '2023-05-25', city: 'Los Angeles', id: 1 },
        { date: '2023-07-01', city: 'New York', id: 2 },
        { date: '2023-09-10', city: 'Chicago', id: 3 }
      ];
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    <h1 className="text-4xl font-bold text-white pt-10">We are Back !!</h1>
    <div className="my-8">
    <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/z7rvnjVgbzc?si=6czhkJ93_HWatiwj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
    </iframe>
    </div>
    <h2 className="text-2xl font-semibold text-white">Upcoming Events:</h2>
    {events.map((event) => (
        <div key={event.id} className="text-lg text-white px-4 py-2 my-2 bg-blue-400 rounded-md">
            <span>Date: {event.date} </span>
            <span>City: {event.city} </span>
            <button className="ml-4 px-2 py-1 text-sm text-white bg-green-500 rounded-md">
                Book Ticket
            </button>
        </div>
    ))}
    <Footer />
</div>
  )
}

export default Home
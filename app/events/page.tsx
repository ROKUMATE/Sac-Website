import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

const events = [
  {
    id: 1,
    title: "Annual Cultural Fest",
    date: "2025-03-15",
    time: "10:00 AM - 10:00 PM",
    venue: "Main Auditorium",
    description: "The biggest cultural extravaganza of the year featuring performances, competitions, and celebrity appearances.",
    image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg",
    registrationLink: "#",
    status: "upcoming"
  },
  {
    id: 2,
    title: "Technical Symposium",
    date: "2025-02-20",
    time: "9:00 AM - 6:00 PM",
    venue: "Technical Block",
    description: "A platform for students to showcase their technical skills through various competitions and workshops.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg",
    registrationLink: "#",
    status: "ongoing"
  },
  // Add more events as needed
];

export default function EventsPage() {
  const sortedEvents = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-[#0B2F5C] mb-8 text-center">Upcoming Events</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedEvents.map((event) => (
          <div 
            key={event.id}
            className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${
              event.status === 'ongoing' ? 'border-2 border-green-500' : ''
            }`}
          >
            <div className="relative h-48">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
              {event.status === 'ongoing' && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  Ongoing
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0B2F5C] mb-4">{event.title}</h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.venue}</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{event.description}</p>
              
              <a
                href={event.registrationLink}
                className="inline-block bg-[#0B2F5C] text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors"
              >
                Register Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const slides = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Student Activity Council',
    subtitle: 'Empowering Student Leadership at ABV-IIITM Gwalior',
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Cultural Excellence',
    subtitle: 'Fostering Creativity and Cultural Growth',
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Technical Innovation',
    subtitle: 'Building Skills for Future Leaders',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] sm:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center p-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl">{slide.subtitle}</p>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-white" : "bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
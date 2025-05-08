import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2F5C] mb-4">About Student Activity Council</h2>
          <div className="w-24 h-1 bg-[#0B2F5C] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Student Activity Council"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#0B2F5C]">Our Vision</h3>
            <p className="text-gray-700">
              The Student Activity Council (SAC) of ABV-IIITM Gwalior serves as the primary representative body for all students. Our vision is to foster a vibrant campus culture where students can develop their leadership abilities, creative talents, and technical expertise through various extracurricular activities.
            </p>
            
            <h3 className="text-2xl font-bold text-[#0B2F5C] pt-4">Our Mission</h3>
            <p className="text-gray-700">
              SAC aims to enrich the campus community by organizing diverse events that promote academic excellence, cultural harmony, technical innovation, and personal development. We strive to create an inclusive environment where every student can explore their interests and reach their full potential.
            </p>
            
            <h3 className="text-2xl font-bold text-[#0B2F5C] pt-4">Our Role</h3>
            <ul className="space-y-2 text-gray-700 list-inside">
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#0B2F5C] mr-2 mt-1 flex-shrink-0" />
                <span>Representing student interests and concerns to the institute administration</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#0B2F5C] mr-2 mt-1 flex-shrink-0" />
                <span>Organizing cultural, technical, sports, and welfare events throughout the academic year</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#0B2F5C] mr-2 mt-1 flex-shrink-0" />
                <span>Coordinating between various student clubs and promoting their activities</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#0B2F5C] mr-2 mt-1 flex-shrink-0" />
                <span>Creating opportunities for leadership development and team building</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-5 w-5 text-[#0B2F5C] mr-2 mt-1 flex-shrink-0" />
                <span>Fostering a sense of community and belonging among all students</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
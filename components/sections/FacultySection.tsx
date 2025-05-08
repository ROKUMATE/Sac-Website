import React from 'react';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { facultyCoordinators } from '@/lib/teamData';

const FacultySection = () => {
  return (
    <section id="faculty" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2F5C] mb-4">Faculty Coordinators</h2>
          <div className="w-24 h-1 bg-[#0B2F5C] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Meet our faculty coordinators who provide guidance and support to the Student Activity Council.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyCoordinators.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-64">
                <Image 
                  src={faculty.photo} 
                  alt={faculty.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-[#0B2F5C]">{faculty.name}</h3>
                <p className="text-gray-800 font-medium">{faculty.position}</p>
                <p className="text-gray-600 text-sm mb-4">{faculty.department}</p>
                
                <a 
                  href={`mailto:${faculty.name.toLowerCase().replace(' ', '.')}@iiitm.ac.in`}
                  className="inline-flex items-center text-[#0B2F5C] hover:text-blue-700 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-1" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { overallMembers, committeeMembers } from '@/lib/teamData';
import { cn } from '@/lib/utils';

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("overall");
  
  // Group committee members by committee
  const culturalMembers = committeeMembers.filter(member => member.committee === 'Cultural');
  const technicalMembers = committeeMembers.filter(member => member.committee === 'Technical');
  const welfareMembers = committeeMembers.filter(member => member.committee === 'Welfare');
  const sportsMembers = committeeMembers.filter(member => member.committee === 'Sports');

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2F5C] mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-[#0B2F5C] mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Meet the dedicated members of the Student Activity Council who work tirelessly to enhance your campus experience.
          </p>
        </div>
        
        <Tabs defaultValue="overall" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 bg-gray-100">
              <TabsTrigger value="overall" className={cn(
                "data-[state=active]:bg-[#0B2F5C] data-[state=active]:text-white",
                activeTab === "overall" ? "bg-[#0B2F5C] text-white" : ""
              )}>
                Overall
              </TabsTrigger>
              <TabsTrigger value="cultural" className={cn(
                "data-[state=active]:bg-[#0B2F5C] data-[state=active]:text-white",
                activeTab === "cultural" ? "bg-[#0B2F5C] text-white" : ""
              )}>
                Cultural
              </TabsTrigger>
              <TabsTrigger value="technical" className={cn(
                "data-[state=active]:bg-[#0B2F5C] data-[state=active]:text-white",
                activeTab === "technical" ? "bg-[#0B2F5C] text-white" : ""
              )}>
                Technical
              </TabsTrigger>
              <TabsTrigger value="welfare" className={cn(
                "data-[state=active]:bg-[#0B2F5C] data-[state=active]:text-white",
                activeTab === "welfare" ? "bg-[#0B2F5C] text-white" : ""
              )}>
                Welfare
              </TabsTrigger>
              <TabsTrigger value="sports" className={cn(
                "data-[state=active]:bg-[#0B2F5C] data-[state=active]:text-white",
                activeTab === "sports" ? "bg-[#0B2F5C] text-white" : ""
              )}>
                Sports
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="overall">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {overallMembers.map((member) => (
                <div 
                  key={member.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image 
                      src={member.photo} 
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0B2F5C]">{member.name}</h3>
                    <p className="text-gray-800 font-medium">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.batch}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="cultural">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {culturalMembers.map((member) => (
                <div 
                  key={member.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image 
                      src={member.photo} 
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0B2F5C]">{member.name}</h3>
                    <p className="text-gray-800 font-medium">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.batch}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="technical">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalMembers.map((member) => (
                <div 
                  key={member.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image 
                      src={member.photo} 
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0B2F5C]">{member.name}</h3>
                    <p className="text-gray-800 font-medium">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.batch}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="welfare">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {welfareMembers.map((member) => (
                <div 
                  key={member.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image 
                      src={member.photo} 
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0B2F5C]">{member.name}</h3>
                    <p className="text-gray-800 font-medium">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.batch}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="sports">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sportsMembers.map((member) => (
                <div 
                  key={member.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-64">
                    <Image 
                      src={member.photo} 
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#0B2F5C]">{member.name}</h3>
                    <p className="text-gray-800 font-medium">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.batch}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TeamSection;
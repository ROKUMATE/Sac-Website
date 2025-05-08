"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample event data
const eventsData = [
    {
        id: 1,
        title: "Annual Cultural Fest",
        date: "2025-03-15",
        time: "10:00 AM - 10:00 PM",
        location: "Main Auditorium",
        description:
            "The biggest cultural extravaganza of the year featuring performances, competitions, and celebrity appearances.",
        image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        registrationLink: "#",
    },
    {
        id: 2,
        title: "Technical Symposium",
        date: "2025-04-10",
        time: "9:00 AM - 6:00 PM",
        location: "Technical Block",
        description:
            "A platform for students to showcase their technical skills through various competitions and workshops.",
        image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        registrationLink: "#",
    },
    {
        id: 3,
        title: "Sports Tournament",
        date: "2025-02-20",
        time: "8:00 AM - 7:00 PM",
        location: "Sports Complex",
        description:
            "Inter-batch competitions in cricket, football, basketball, and athletics.",
        image: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        registrationLink: "#",
    },
    {
        id: 4,
        title: "Leadership Workshop",
        date: "2025-01-25",
        time: "2:00 PM - 5:00 PM",
        location: "Seminar Hall",
        description:
            "A workshop on leadership skills conducted by industry experts and alumni.",
        image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        registrationLink: "#",
    },
    {
        id: 5,
        title: "Freshers' Welcome",
        date: "2025-09-05",
        time: "6:00 PM - 10:00 PM",
        location: "Main Auditorium",
        description:
            "A welcoming event for the new batch of students with cultural performances and interactive sessions.",
        image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        registrationLink: "#",
    },
];

// Sort events by date (newest first)
const sortedEvents = [...eventsData].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
);

const EventsSection = () => {
    const [view, setView] = useState<"list" | "calendar">("list");

    return (
        <section id="events" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0B2F5C] mb-4">
                        Upcoming Events
                    </h2>
                    <div className="w-24 h-1 bg-[#0B2F5C] mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Stay updated with all the upcoming events organized by
                        the Student Activity Council.
                    </p>
                </div>

                <div className="flex justify-center mb-8">
                    <div className="inline-flex border border-gray-300 rounded-md overflow-hidden">
                        <button
                            onClick={() => setView("list")}
                            className={cn(
                                "py-2 px-4 text-sm font-medium transition-colors",
                                view === "list"
                                    ? "bg-[#0B2F5C] text-white"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                            )}>
                            List View
                        </button>
                        <button
                            onClick={() => setView("calendar")}
                            className={cn(
                                "py-2 px-4 text-sm font-medium transition-colors",
                                view === "calendar"
                                    ? "bg-[#0B2F5C] text-white"
                                    : "bg-white text-gray-700 hover:bg-gray-100"
                            )}>
                            Calendar View
                        </button>
                    </div>
                </div>

                {view === "list" ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sortedEvents.map((event) => (
                            <div
                                key={event.id}
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="relative h-48">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0B2F5C] mb-2">
                                        {event.title}
                                    </h3>

                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center text-gray-600">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            <span>
                                                {new Date(
                                                    event.date
                                                ).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </span>
                                        </div>

                                        <div className="flex items-center text-gray-600">
                                            <Clock className="h-4 w-4 mr-2" />
                                            <span>{event.time}</span>
                                        </div>

                                        <div className="flex items-center text-gray-600">
                                            <MapPin className="h-4 w-4 mr-2" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {event.description}
                                    </p>

                                    <a
                                        href={event.registrationLink}
                                        className="inline-flex items-center text-white bg-[#0B2F5C] hover:bg-blue-800 rounded px-4 py-2 text-sm font-medium transition-colors">
                                        Register Now
                                        <ExternalLink className="h-4 w-4 ml-1" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="grid grid-cols-7 gap-2 mb-4 font-medium text-center">
                            <div>Sun</div>
                            <div>Mon</div>
                            <div>Tue</div>
                            <div>Wed</div>
                            <div>Thu</div>
                            <div>Fri</div>
                            <div>Sat</div>
                        </div>

                        <div className="grid grid-cols-7 gap-2 auto-rows-fr">
                            {Array.from({ length: 35 }, (_, i) => {
                                const day = i + 1;
                                const eventsOnDay = eventsData.filter(
                                    (event) => {
                                        const eventDate = new Date(event.date);
                                        return eventDate.getDate() === day;
                                    }
                                );

                                return (
                                    <div
                                        key={i}
                                        className={cn(
                                            "border rounded-md p-1 h-24 overflow-y-auto",
                                            eventsOnDay.length > 0
                                                ? "bg-blue-50"
                                                : ""
                                        )}>
                                        <div className="text-right text-sm mb-1">
                                            {day}
                                        </div>
                                        {eventsOnDay.map((event) => (
                                            <div
                                                key={event.id}
                                                className="text-xs p-1 mb-1 bg-[#0B2F5C] text-white rounded truncate cursor-pointer"
                                                title={event.title}>
                                                {event.title}
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default EventsSection;

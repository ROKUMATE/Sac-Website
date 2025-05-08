"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Play, Pause } from "lucide-react";

// Demo videos/screenshots
const demoContent = [
    {
        id: 1,
        title: "Navigating the Website",
        description:
            "Learn how to navigate through different sections of the Student Activity Council website.",
        thumbnail:
            "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        videoUrl: "https://example.com/demo1.mp4",
    },
    {
        id: 2,
        title: "Exploring Team Profiles",
        description:
            "Discover how to view team members across different academic years and committees.",
        thumbnail:
            "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        videoUrl: "https://example.com/demo2.mp4",
    },
    {
        id: 3,
        title: "Finding Upcoming Events",
        description:
            "Learn how to find and register for upcoming events organized by the Student Activity Council.",
        thumbnail:
            "https://images.pexels.com/photos/7647913/pexels-photo-7647913.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        videoUrl: "https://example.com/demo3.mp4",
    },
    {
        id: 4,
        title: "Contacting the Council",
        description:
            "See how to reach out to the Student Activity Council for queries and feedback.",
        thumbnail:
            "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        videoUrl: "https://example.com/demo4.mp4",
    },
    {
        id: 5,
        title: "Browsing the Gallery",
        description:
            "Explore the photo gallery of past events organized by the Student Activity Council.",
        thumbnail:
            "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        videoUrl: "https://example.com/demo5.mp4",
    },
];

// Feature walkthrough steps
const featureWalkthrough = [
    {
        id: 1,
        title: "Home Page",
        description:
            "The home page provides an overview of the Student Activity Council with sections for about, events, team, faculty, and contact information.",
        screenshot:
            "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 2,
        title: "Team Pages",
        description:
            "Browse through team members from different academic years (2023-24, 2024-25) and various committees including Cultural, Technical, Welfare, and Sports.",
        screenshot:
            "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 3,
        title: "Events Section",
        description:
            "Stay updated with upcoming events, view event details, and register for participation. Switch between list and calendar views for better visualization.",
        screenshot:
            "https://images.pexels.com/photos/7412089/pexels-photo-7412089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 4,
        title: "Gallery",
        description:
            "Explore photos from past events categorized by event type. Click on images to view them in full-screen mode.",
        screenshot:
            "https://images.pexels.com/photos/1092426/pexels-photo-1092426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
        id: 5,
        title: "Contact Page",
        description:
            "Reach out to the Student Activity Council through the contact form. Find contact details including email, phone, and location.",
        screenshot:
            "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
];

const DemoPage = () => {
    const [activeVideo, setActiveVideo] = useState<number | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeStep, setActiveStep] = useState(1);

    const handleVideoClick = (id: number) => {
        setActiveVideo(id);
        setIsPlaying(true);
    };

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0B2F5C] mb-4">
                        Website Demo
                    </h1>
                    <div className="w-24 h-1 bg-[#0B2F5C] mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Learn how to navigate and use the Student Activity
                        Council website with our helpful guides and demos.
                    </p>
                </div>

                {/* Video Tutorials */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0B2F5C] mb-6">
                        Video Tutorials
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {demoContent.map((demo) => (
                            <div
                                key={demo.id}
                                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div
                                    className="relative h-48 cursor-pointer"
                                    onClick={() => handleVideoClick(demo.id)}>
                                    <Image
                                        src={demo.thumbnail}
                                        alt={demo.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                            <Play className="h-6 w-6 text-[#0B2F5C] ml-1" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[#0B2F5C] mb-2">
                                        {demo.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {demo.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Video Modal */}
                    {activeVideo && (
                        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                            <button
                                onClick={() => setActiveVideo(null)}
                                className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors">
                                <span className="sr-only">Close</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>

                            <div className="relative w-full max-w-4xl aspect-video bg-black">
                                {/* This would be an actual video element in a real implementation */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Image
                                        src={
                                            demoContent.find(
                                                (d) => d.id === activeVideo
                                            )?.thumbnail || ""
                                        }
                                        alt="Video"
                                        fill
                                        className="object-cover opacity-50"
                                    />
                                    <div className="text-white text-center z-10">
                                        <p className="text-xl font-bold mb-4">
                                            {
                                                demoContent.find(
                                                    (d) => d.id === activeVideo
                                                )?.title
                                            }
                                        </p>
                                        <button
                                            onClick={togglePlayPause}
                                            className="bg-white/20 hover:bg-white/30 transition-colors p-4 rounded-full">
                                            {isPlaying ? (
                                                <Pause className="h-8 w-8" />
                                            ) : (
                                                <Play className="h-8 w-8 ml-1" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Feature Walkthrough */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0B2F5C] mb-6">
                        Feature Walkthrough
                    </h2>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            {/* Steps Navigation */}
                            <div className="bg-gray-50 p-6">
                                <div className="space-y-4">
                                    {featureWalkthrough.map((step) => (
                                        <button
                                            key={step.id}
                                            onClick={() =>
                                                setActiveStep(step.id)
                                            }
                                            className={`w-full text-left p-4 rounded-lg transition-colors ${
                                                activeStep === step.id
                                                    ? "bg-[#0B2F5C] text-white"
                                                    : "bg-white text-gray-700 hover:bg-gray-100"
                                            }`}>
                                            <div className="flex items-center">
                                                <div
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                                                        activeStep === step.id
                                                            ? "bg-white text-[#0B2F5C]"
                                                            : "bg-gray-100 text-gray-700"
                                                    }`}>
                                                    {step.id}
                                                </div>
                                                <span className="font-medium">
                                                    {step.title}
                                                </span>
                                                {activeStep === step.id && (
                                                    <ChevronRight className="ml-auto h-5 w-5" />
                                                )}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Step Content */}
                            <div className="lg:col-span-2 p-6">
                                {featureWalkthrough.map((step) => (
                                    <div
                                        key={step.id}
                                        className={`${
                                            activeStep === step.id
                                                ? "block"
                                                : "hidden"
                                        }`}>
                                        <h3 className="text-2xl font-bold text-[#0B2F5C] mb-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6">
                                            {step.description}
                                        </p>

                                        <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                                            <Image
                                                src={step.screenshot}
                                                alt={step.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div className="mt-6 flex justify-between">
                                            <button
                                                onClick={() =>
                                                    setActiveStep((prev) =>
                                                        Math.max(prev - 1, 1)
                                                    )
                                                }
                                                disabled={activeStep === 1}
                                                className="px-4 py-2 text-[#0B2F5C] disabled:text-gray-400 font-medium">
                                                Previous
                                            </button>

                                            <button
                                                onClick={() =>
                                                    setActiveStep((prev) =>
                                                        Math.min(
                                                            prev + 1,
                                                            featureWalkthrough.length
                                                        )
                                                    )
                                                }
                                                disabled={
                                                    activeStep ===
                                                    featureWalkthrough.length
                                                }
                                                className="px-4 py-2 bg-[#0B2F5C] text-white rounded-md disabled:bg-gray-300">
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-bold text-[#0B2F5C] mb-4">
                        Ready to Explore?
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Now that you're familiar with the Student Activity
                        Council website, start exploring to find events, meet
                        the team, and more!
                    </p>
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 bg-[#0B2F5C] text-white rounded-md hover:bg-blue-800 transition-colors">
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DemoPage;

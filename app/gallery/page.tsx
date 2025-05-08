"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

// Sample gallery data
const galleryImages = [
    {
        id: 1,
        src: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Cultural Festival Performance",
        category: "Cultural",
        title: "Annual Cultural Fest 2024",
    },
    {
        id: 2,
        src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Freshers Welcome Event",
        category: "Cultural",
        title: "Freshers' Welcome 2024",
    },
    {
        id: 3,
        src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Dance Performance",
        category: "Cultural",
        title: "Dance Competition",
    },
    {
        id: 4,
        src: "https://images.pexels.com/photos/2608516/pexels-photo-2608516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Musical Night",
        category: "Cultural",
        title: "Musical Night 2024",
    },
    {
        id: 5,
        src: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Tech Symposium",
        category: "Technical",
        title: "Technical Symposium 2024",
    },
    {
        id: 6,
        src: "https://images.pexels.com/photos/5199133/pexels-photo-5199133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Robotics Workshop",
        category: "Technical",
        title: "Robotics Workshop",
    },
    {
        id: 7,
        src: "https://images.pexels.com/photos/8847401/pexels-photo-8847401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Coding Competition",
        category: "Technical",
        title: "Coding Competition",
    },
    {
        id: 8,
        src: "https://images.pexels.com/photos/5198239/pexels-photo-5198239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Hackathon",
        category: "Technical",
        title: "Annual Hackathon",
    },
    {
        id: 9,
        src: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Sports Tournament",
        category: "Sports",
        title: "Inter-Batch Sports Tournament",
    },
    {
        id: 10,
        src: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Football Match",
        category: "Sports",
        title: "Football Tournament",
    },
    {
        id: 11,
        src: "https://images.pexels.com/photos/4587955/pexels-photo-4587955.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Cricket Match",
        category: "Sports",
        title: "Cricket Tournament",
    },
    {
        id: 12,
        src: "https://images.pexels.com/photos/8828348/pexels-photo-8828348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Basketball Match",
        category: "Sports",
        title: "Basketball Tournament",
    },
    {
        id: 13,
        src: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Leadership Workshop",
        category: "Welfare",
        title: "Leadership Workshop",
    },
    {
        id: 14,
        src: "https://images.pexels.com/photos/6457517/pexels-photo-6457517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Community Service",
        category: "Welfare",
        title: "Community Service Activity",
    },
    {
        id: 15,
        src: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Health Camp",
        category: "Welfare",
        title: "Health Awareness Camp",
    },
];

const GalleryPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const categories = ["All", "Cultural", "Technical", "Sports", "Welfare"];

    const filteredImages =
        selectedCategory === "All" || selectedCategory === null
            ? galleryImages
            : galleryImages.filter((img) => img.category === selectedCategory);

    const handleImageClick = (id: number) => {
        setSelectedImage(id);
        // Prevent scrolling when the modal is open
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedImage(null);
        // Restore scrolling
        document.body.style.overflow = "auto";
    };

    return (
        <div className="min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0B2F5C] mb-4">
                        Gallery
                    </h1>
                    <div className="w-24 h-1 bg-[#0B2F5C] mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Relive the moments from our various events and
                        activities through these captured memories.
                    </p>
                </div>

                <div className="flex justify-center mb-8">
                    <div className="inline-flex flex-wrap justify-center gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() =>
                                    setSelectedCategory(
                                        category === "All" ? null : category
                                    )
                                }
                                className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                                    (category === "All" &&
                                        selectedCategory === null) ||
                                    category === selectedCategory
                                        ? "bg-[#0B2F5C] text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}>
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredImages.map((image) => (
                        <div
                            key={image.id}
                            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            onClick={() => handleImageClick(image.id)}>
                            <div className="aspect-w-16 aspect-h-9 relative">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                    <h3 className="text-white font-bold">
                                        {image.title}
                                    </h3>
                                    <p className="text-white/80 text-sm">
                                        {image.category}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal */}
                {selectedImage !== null && (
                    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
                            <X className="h-8 w-8" />
                        </button>

                        <div className="relative max-w-6xl max-h-[90vh] w-full">
                            <div className="relative h-full">
                                {selectedImage && (
                                    <>
                                        <Image
                                            src={
                                                galleryImages.find(
                                                    (img) =>
                                                        img.id === selectedImage
                                                )?.src || ""
                                            }
                                            alt={
                                                galleryImages.find(
                                                    (img) =>
                                                        img.id === selectedImage
                                                )?.alt || ""
                                            }
                                            fill
                                            className="object-contain"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                                            <h3 className="text-white font-bold text-xl">
                                                {
                                                    galleryImages.find(
                                                        (img) =>
                                                            img.id ===
                                                            selectedImage
                                                    )?.title
                                                }
                                            </h3>
                                            <p className="text-white/80">
                                                {
                                                    galleryImages.find(
                                                        (img) =>
                                                            img.id ===
                                                            selectedImage
                                                    )?.category
                                                }
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GalleryPage;

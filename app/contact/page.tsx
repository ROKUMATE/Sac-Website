"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState<
        "idle" | "submitting" | "success" | "error"
    >("idle");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");

        // Simulate form submission
        setTimeout(() => {
            setFormStatus("success");
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

            // Reset status after 3 seconds
            setTimeout(() => {
                setFormStatus("idle");
            }, 3000);
        }, 1500);
    };

    return (
        <div className="min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0B2F5C] mb-4">
                        Contact Us
                    </h1>
                    <div className="w-24 h-1 bg-[#0B2F5C] mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Have questions or feedback? Reach out to the Student
                        Activity Council. We'd love to hear from you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                            <Mail className="h-8 w-8 text-[#0B2F5C]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0B2F5C] mb-2">
                            Email
                        </h3>
                        <p className="text-gray-600 mb-4">
                            For general inquiries and information
                        </p>
                        <a
                            href="mailto:sac@iiitm.ac.in"
                            className="text-[#0B2F5C] hover:underline">
                            sac@iiitm.ac.in
                        </a>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                            <Phone className="h-8 w-8 text-[#0B2F5C]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0B2F5C] mb-2">
                            Phone
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Reach out during office hours (9 AM - 5 PM)
                        </p>
                        <a
                            href="tel:+917412345678"
                            className="text-[#0B2F5C] hover:underline">
                            +91 741 234 5678
                        </a>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                            <MapPin className="h-8 w-8 text-[#0B2F5C]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0B2F5C] mb-2">
                            Location
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Student Activity Center
                        </p>
                        <p className="text-[#0B2F5C]">
                            IIIT Campus, Morena Link Road, Gwalior, MP - 474015
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#0B2F5C] mb-6">
                        Send Us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B2F5C] focus:border-transparent"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B2F5C] focus:border-transparent"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-gray-700 mb-1">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B2F5C] focus:border-transparent"
                                placeholder="Enter the subject"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B2F5C] focus:border-transparent"
                                placeholder="Enter your message"></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={formStatus === "submitting"}
                            className="inline-flex items-center bg-[#0B2F5C] text-white py-2 px-6 rounded-md hover:bg-blue-800 transition-colors disabled:opacity-70">
                            {formStatus === "submitting" ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24">
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="h-4 w-4 mr-2" /> Send
                                    Message
                                </>
                            )}
                        </button>

                        {formStatus === "success" && (
                            <div className="mt-4 p-3 bg-green-50 text-green-800 rounded-md">
                                Thank you! Your message has been sent
                                successfully.
                            </div>
                        )}

                        {formStatus === "error" && (
                            <div className="mt-4 p-3 bg-red-50 text-red-800 rounded-md">
                                Oops! Something went wrong. Please try again
                                later.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

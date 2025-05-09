"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
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
                            href="mailto:adsa@iiitm.ac.in"
                            className="text-[#0B2F5C] hover:underline">
                            - Dr. Vinal Patel (Associate Dean Student Activities
                            2024-25) - adsa@iiitm.ac.in
                        </a>
                        <a
                            href="mailto:sac@iiitm.ac.in"
                            className="text-[#0B2F5C] hover:underline">
                            - Samyak Choudhary (Student President 2024-25) -
                            img_2023044@iiitm.ac.in
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
                            +91-751-2449818
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
            </div>
        </div>
    );
};

export default ContactPage;

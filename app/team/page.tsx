import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TeamPage = () => {
    return (
        <div className="min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0B2F5C] mb-4">
                        Our Team
                    </h1>
                    <div className="w-24 h-1 bg-[#0B2F5C] mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        The Student Activity Council team comprises dedicated
                        students who work tirelessly to enhance the campus
                        experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Link href="/team/2024" className="group">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center h-full flex flex-col justify-between">
                            <h2 className="text-2xl font-bold text-[#0B2F5C] mb-4">
                                Team 2024-25
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Meet our current team of dedicated council
                                members leading various committees and
                                activities for the academic year 2024-25.
                            </p>
                            <div className="flex justify-center items-center text-[#0B2F5C] group-hover:text-blue-700 transition-colors">
                                <span className="font-medium">View Team</span>
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>

                    <Link href="/team/2023" className="group">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 p-8 text-center h-full flex flex-col justify-between">
                            <h2 className="text-2xl font-bold text-[#0B2F5C] mb-4">
                                Team 2023-24
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Explore our previous council members who
                                contributed to making the academic year 2023-24
                                a memorable one.
                            </p>
                            <div className="flex justify-center items-center text-[#0B2F5C] group-hover:text-blue-700 transition-colors">
                                <span className="font-medium">View Team</span>
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;

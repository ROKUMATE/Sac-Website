"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { facultyCoordinators } from "@/lib/facultyData2023";
import { cn } from "@/lib/utils";

const FacultyPage2023 = () => {
    const [activeTab, setActiveTab] = useState("overall");

    const overallMembers = facultyCoordinators.filter(
        (member) => member.committee === "Overall"
    );
    // Group committee members by committee
    const culturalMembers = facultyCoordinators.filter(
        (member) => member.committee === "Cultural"
    );
    const technicalMembers = facultyCoordinators.filter(
        (member) => member.committee === "Technical"
    );
    const welfareMembers = facultyCoordinators.filter(
        (member) => member.committee === "Welfare"
    );
    const sportsMembers = facultyCoordinators.filter(
        (member) => member.committee === "Sports"
    );

    return (
        <div className="min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-8">
                    <Link
                        href="/faculty"
                        className="inline-flex items-center text-[#0B2F5C] hover:text-blue-700 transition-colors">
                        <ChevronLeft className="h-5 w-5 mr-1" />
                        <span className="font-medium">Back to Faculty</span>
                    </Link>
                </div>

                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0B2F5C] mb-4">
                        Faculty Coordinators 2023-24
                    </h1>
                    <div className="w-24 h-1 bg-[#0B2F5C] mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Meet the faculty coordinators who provide guidance and
                        support to the Student Activity Council for the current
                        academic year 2023-24.
                    </p>
                </div>

                <Tabs
                    defaultValue="overall"
                    className="w-full"
                    onValueChange={setActiveTab}>
                    <div className="flex justify-center mb-8">
                        <TabsList className="grid grid-cols-2 md:grid-cols-5 bg-gray-100">
                            <TabsTrigger
                                value="overall"
                                className={cn(
                                    "data-[state=active]:bg-[#0B2F5C] ml-2 data-[state=active]:text-white",
                                    activeTab === "overall"
                                        ? "bg-[#0B2F5C] text-white"
                                        : ""
                                )}>
                                Overall
                            </TabsTrigger>
                            <TabsTrigger
                                value="cultural"
                                className={cn(
                                    "data-[state=active]:bg-[#0B2F5C] ml-2 data-[state=active]:text-white",
                                    activeTab === "cultural"
                                        ? "bg-[#0B2F5C] text-white"
                                        : ""
                                )}>
                                Cultural
                            </TabsTrigger>
                            <TabsTrigger
                                value="technical"
                                className={cn(
                                    "data-[state=active]:bg-[#0B2F5C] ml-2 data-[state=active]:text-white",
                                    activeTab === "technical"
                                        ? "bg-[#0B2F5C] text-white"
                                        : ""
                                )}>
                                Technical
                            </TabsTrigger>
                            <TabsTrigger
                                value="welfare"
                                className={cn(
                                    "data-[state=active]:bg-[#0B2F5C] ml-2 data-[state=active]:text-white",
                                    activeTab === "welfare"
                                        ? "bg-[#0B2F5C] text-white"
                                        : ""
                                )}>
                                Welfare
                            </TabsTrigger>
                            <TabsTrigger
                                value="sports"
                                className={cn(
                                    "data-[state=active]:bg-[#0B2F5C] ml-2 data-[state=active]:text-white",
                                    activeTab === "sports"
                                        ? "bg-[#0B2F5C] text-white"
                                        : ""
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
                                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="relative h-64">
                                        <Image
                                            src={member.photo}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-[#0B2F5C]">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-800 font-medium">
                                            {member.position}
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            <span className="text-gray-700 font-medium">
                                                Department:
                                            </span>{" "}
                                            {member.department}
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            <span className="text-gray-700 font-medium">
                                                Email:
                                            </span>{" "}
                                            {member.email}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="cultural">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {culturalMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="relative h-64">
                                        <Image
                                            src={member.photo}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-[#0B2F5C]">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-800 font-medium">
                                            {member.position}
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            <span className="text-gray-700 font-medium">
                                                Department:
                                            </span>{" "}
                                            {member.department}
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            <span className="text-gray-700 font-medium">
                                                Email:
                                            </span>{" "}
                                            {member.email}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="technical">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {technicalMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="relative h-64">
                                        <Image
                                            src={member.photo}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-[#0B2F5C]">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-800 font-medium">
                                            {member.position}
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            <span className="text-gray-700 font-medium">
                                                Department:
                                            </span>{" "}
                                            {member.department}
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            <span className="text-gray-700 font-medium">
                                                Email:
                                            </span>{" "}
                                            {member.email}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="welfare">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {welfareMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="relative h-64">
                                        <Image
                                            src={member.photo}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-[#0B2F5C]">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-800 font-medium">
                                            {member.position}
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            <span className="text-gray-700 font-medium">
                                                Department:
                                            </span>{" "}
                                            {member.department}
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            <span className="text-gray-700 font-medium">
                                                Email:
                                            </span>{" "}
                                            {member.email}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="sports">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {sportsMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <div className="relative h-64">
                                        <Image
                                            src={member.photo}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-[#0B2F5C]">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-800 font-medium">
                                            {member.position}
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            <span className="text-gray-700 font-medium">
                                                Department:
                                            </span>{" "}
                                            {member.department}
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            <span className="text-gray-700 font-medium">
                                                Email:
                                            </span>{" "}
                                            {member.email}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default FacultyPage2023;

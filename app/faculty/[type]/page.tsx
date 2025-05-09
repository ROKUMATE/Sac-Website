import React from "react";
import Image from "next/image";
import { Mail, Phone, Building, Calendar, Globe } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface FacultyCoordinator {
    id: number;
    name: string;
    photo: string;
    department: string;
    designation: string;
    email: string;
    phone: string;
    role: string;
    description: string;
    tenure: {
        start: string;
        end: string;
    };
}

const facultyCoordinators: Record<string, FacultyCoordinator[]> = {
    current: [
        {
            id: 1,
            name: "Dr. Rajiv Mishra",
            photo: "https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg",
            department: "Computer Science and Engineering",
            designation: "Professor",
            email: "rajiv.mishra@iiitm.ac.in",
            phone: "+91 98765 43210",
            role: "Chief Faculty Coordinator",
            description:
                "Dr. Mishra has been instrumental in establishing various technical clubs and fostering innovation among students.",
            tenure: { start: "2023", end: "Present" },
        },
        // Add more current coordinators
    ],
    past: [
        // Add past coordinators
    ],
};

// Tell Next.js which /faculty/[type] pages to export
export async function generateStaticParams() {
    return [{ type: "current" }, { type: "past" }];
}

export default function FacultyPage({ params }: { params: { type: string } }) {
    const coordinatorType = params.type;
    const years = ["2023", "2022", "2021", "2020"];

    return (
        <div className="py-16 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-[#0B2F5C] mb-4 md:mb-0">
                    {coordinatorType === "current"
                        ? "Current Faculty Coordinators"
                        : "Past Faculty Coordinators"}
                </h1>
                {coordinatorType === "past" && (
                    <Select
                        defaultValue="2023"
                        onValueChange={(y) =>
                            (window.location.href = `/faculty/past?year=${y}`)
                        }>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                            {years.map((year) => (
                                <SelectItem key={year} value={year}>
                                    {year}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facultyCoordinators[coordinatorType]?.map((coordinator) => (
                    <div
                        key={coordinator.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="relative h-64">
                            <Image
                                src={coordinator.photo}
                                alt={coordinator.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-[#0B2F5C] mb-1">
                                {coordinator.name}
                            </h3>
                            <p className="text-lg text-gray-700 mb-2">
                                {coordinator.role}
                            </p>
                            <div className="space-y-2 mt-4">
                                <div className="flex items-center text-gray-600">
                                    <Building className="h-4 w-4 mr-2" />
                                    <span>{coordinator.department}</span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    <span>
                                        {coordinator.tenure.start} -{" "}
                                        {coordinator.tenure.end}
                                    </span>
                                </div>
                                <a
                                    href={`mailto:${coordinator.email}`}
                                    className="flex items-center text-gray-600 hover:text-[#0B2F5C]">
                                    <Mail className="h-4 w-4 mr-2" />
                                    {coordinator.email}
                                </a>
                                <a
                                    href={`tel:${coordinator.phone}`}
                                    className="flex items-center text-gray-600 hover:text-[#0B2F5C]">
                                    <Phone className="h-4 w-4 mr-2" />
                                    {coordinator.phone}
                                </a>
                            </div>
                            <p className="mt-4 text-gray-600">
                                {coordinator.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

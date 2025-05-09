import React from "react";
import Image from "next/image";
import { Mail, Phone, Globe } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface TeamMember {
    id: number;
    name: string;
    position: string;
    photo: string;
    email: string;
    phone: string;
    batch: string;
    linkedin?: string;
}

const teamMembers: Record<string, TeamMember[]> = {
    "2023": [
        {
            id: 1,
            name: "Rahul Sharma",
            position: "President",
            photo: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
            email: "rahul.sharma@iiitm.ac.in",
            phone: "+91 98765 43210",
            batch: "2022IMT025",
            linkedin: "https://linkedin.com/in/rahulsharma",
        },
        // ... other 2023 members
    ],
    "2022": [],
    "2021": [],
    "2020": [],
};

const positions = [
    "President",
    "Vice President",
    "Secretary",
    "Joint Secretary",
    "Treasurer",
    "Technical Head",
    "Cultural Head",
    "Sports Head",
];

// 🚀 Next.js will statically generate each /team/[year] at build time
export async function generateStaticParams() {
    return Object.keys(teamMembers).map((year) => ({ year }));
}

export default function TeamPage({ params }: { params: { year: string } }) {
    const years = ["2023", "2022", "2021", "2020"];
    const currentYear = params.year;

    const groupedMembers = positions.reduce((acc, position) => {
        const members =
            teamMembers[currentYear]?.filter((m) => m.position === position) ||
            [];
        if (members.length) acc[position] = members;
        return acc;
    }, {} as Record<string, TeamMember[]>);

    return (
        <div className="py-16 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-[#0B2F5C] mb-4 md:mb-0">
                    SAC Team {currentYear}-{parseInt(currentYear) + 1}
                </h1>
                <Select
                    defaultValue={currentYear}
                    onValueChange={(y) =>
                        (window.location.href = `/team/${y}`)
                    }>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                        {years.map((year) => (
                            <SelectItem key={year} value={year}>
                                {year}-{parseInt(year) + 1} Team
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {Object.entries(groupedMembers).map(([position, members]) => (
                <section key={position} className="mb-12">
                    <h2 className="text-2xl font-bold text-[#0B2F5C] mb-6">
                        {position}s
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {members.map((member) => (
                            <div
                                key={member.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden">
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
                                    <p className="text-gray-600 mb-2">
                                        {member.batch}
                                    </p>
                                    <div className="space-y-2 mt-4">
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="flex items-center text-gray-600 hover:text-[#0B2F5C]">
                                            <Mail className="h-4 w-4 mr-2" />
                                            {member.email}
                                        </a>
                                        <a
                                            href={`tel:${member.phone}`}
                                            className="flex items-center text-gray-600 hover:text-[#0B2F5C]">
                                            <Phone className="h-4 w-4 mr-2" />
                                            {member.phone}
                                        </a>
                                        {member.linkedin && (
                                            <a
                                                href={member.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-gray-600 hover:text-[#0B2F5C]">
                                                <Globe className="h-4 w-4 mr-2" />
                                                LinkedIn Profile
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    );
}

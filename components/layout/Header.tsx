"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import "@/assets/header /CollegeLogoLeft.png";
import "@/assets/header /CollegeLogoRight.png";
import { usePathname } from "next/navigation";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Close mobile menu when path changes
        setMobileMenuOpen(false);
    }, [pathname]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleDropdown = (dropdown: string) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const isActive = (path: string) => {
        return pathname === path || pathname.startsWith(`${path}/`);
    };

    return (
        <header className="w-full relative z-50 shadow-sm">
            {/* Logo and title section */}
            <div className="bg-white py-4 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                    {/* Left logo */}
                    <div className="flex items-center">
                        <Image
                            src="/assets/header/CollegeLogoLeft.png"
                            alt="ABV-IIITM Logo"
                            width={220}
                            height={80}
                            className="h-auto"
                        />
                    </div>

                    {/* Center SAC text */}
                    <div className="text-center transform transition-all duration-300 hover:scale-105">
                        <h1 className="text-2xl md:text-3xl font-bold text-[#0B2F5C] tracking-wide">
                            Student Activity Council
                        </h1>
                        <p className="text-lg text-[#0B2F5C] font-semibold">
                            SAC
                        </p>
                        <p className="text-md text-[#0B2F5C]">
                            छात्र गतिविधि परिषद
                        </p>
                    </div>

                    {/* Right logo */}
                    <div className="flex items-center">
                        <Image
                            src="/assets/header/CollegeLogoRight.png"
                            alt="ABV-IIITM Logo Hindi"
                            width={220}
                            height={80}
                            className="h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <nav
                className={cn(
                    "bg-gradient-to-r from-[#0B2F5C] to-[#124080] text-white transition-all duration-300 ease-in-out",
                    isScrolled ? "sticky top-0 shadow-md" : ""
                )}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="hidden md:flex space-x-1">
                            <Link
                                href="/"
                                className={cn(
                                    "py-4 px-3 transition-colors flex items-center font-medium",
                                    isActive("/")
                                        ? "bg-blue-800 text-white"
                                        : "hover:bg-blue-700/70"
                                )}>
                                Home
                            </Link>
                            <Link
                                href="/events"
                                className={cn(
                                    "py-4 px-3 transition-colors flex items-center font-medium",
                                    isActive("/events")
                                        ? "bg-blue-800 text-white"
                                        : "hover:bg-blue-700/70"
                                )}>
                                Events
                            </Link>

                            {/* Our Team Dropdown */}
                            <div className="relative group">
                                <button
                                    className={cn(
                                        "py-4 px-3 transition-colors flex items-center font-medium",
                                        isActive("/team")
                                            ? "bg-blue-800 text-white"
                                            : "hover:bg-blue-700/70"
                                    )}
                                    onClick={() => toggleDropdown("team")}>
                                    Our Team{" "}
                                    <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
                                </button>
                                <div className="absolute hidden group-hover:block w-48 bg-white rounded-b-md shadow-lg overflow-hidden transform translate-y-0 transition-all duration-200 ease-out z-50">
                                    <Link
                                        href="/team"
                                        className={cn(
                                            "block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#0B2F5C] transition-colors border-l-2",
                                            isActive("/team") &&
                                                pathname === "/team"
                                                ? "border-l-blue-700 bg-gray-50"
                                                : "border-l-transparent"
                                        )}>
                                        Team Overview
                                    </Link>
                                    <Link
                                        href="/team/2024"
                                        className={cn(
                                            "block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#0B2F5C] transition-colors border-l-2",
                                            isActive("/team/2024")
                                                ? "border-l-blue-700 bg-gray-50"
                                                : "border-l-transparent"
                                        )}>
                                        2024-25 Team
                                    </Link>
                                    <Link
                                        href="/team/2023"
                                        className={cn(
                                            "block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#0B2F5C] transition-colors border-l-2",
                                            isActive("/team/2023")
                                                ? "border-l-blue-700 bg-gray-50"
                                                : "border-l-transparent"
                                        )}>
                                        2023-24 Team
                                    </Link>
                                </div>
                            </div>

                            {/* Faculty Coordinators Dropdown */}
                            <div className="relative group">
                                <button
                                    className={cn(
                                        "py-4 px-3 transition-colors flex items-center font-medium",
                                        isActive("/faculty")
                                            ? "bg-blue-800 text-white"
                                            : "hover:bg-blue-700/70"
                                    )}
                                    onClick={() => toggleDropdown("faculty")}>
                                    Faculty Coordinators{" "}
                                    <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
                                </button>
                                <div className="absolute hidden group-hover:block w-48 bg-white rounded-b-md shadow-lg overflow-hidden transform translate-y-0 transition-all duration-200 ease-out z-50">
                                    <Link
                                        href="/faculty"
                                        className={cn(
                                            "block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#0B2F5C] transition-colors border-l-2",
                                            isActive("/faculty") &&
                                                pathname === "/faculty"
                                                ? "border-l-blue-700 bg-gray-50"
                                                : "border-l-transparent"
                                        )}>
                                        Faculty Overview
                                    </Link>
                                    <Link
                                        href="/faculty/2024"
                                        className={cn(
                                            "block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#0B2F5C] transition-colors border-l-2",
                                            isActive("/faculty/2024")
                                                ? "border-l-blue-700 bg-gray-50"
                                                : "border-l-transparent"
                                        )}>
                                        2024-25 Faculty
                                    </Link>
                                    <Link
                                        href="/faculty/2023"
                                        className={cn(
                                            "block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#0B2F5C] transition-colors border-l-2",
                                            isActive("/faculty/2023")
                                                ? "border-l-blue-700 bg-gray-50"
                                                : "border-l-transparent"
                                        )}>
                                        2023-24 Faculty
                                    </Link>
                                </div>
                            </div>

                            <Link
                                href="/gallery"
                                className={cn(
                                    "py-4 px-3 transition-colors flex items-center font-medium",
                                    isActive("/gallery")
                                        ? "bg-blue-800 text-white"
                                        : "hover:bg-blue-700/70"
                                )}>
                                Gallery
                            </Link>
                            <Link
                                href="/contact"
                                className={cn(
                                    "py-4 px-3 transition-colors flex items-center font-medium",
                                    isActive("/contact")
                                        ? "bg-blue-800 text-white"
                                        : "hover:bg-blue-700/70"
                                )}>
                                Contact
                            </Link>
                            <Link
                                href="/demo"
                                className={cn(
                                    "py-4 px-3 transition-colors flex items-center font-medium",
                                    isActive("/demo")
                                        ? "bg-blue-800 text-white"
                                        : "hover:bg-blue-700/70"
                                )}>
                                Demo
                            </Link>
                        </div>

                        <div className="md:hidden flex items-center justify-end w-full">
                            <button
                                onClick={toggleMobileMenu}
                                className="p-2 rounded hover:bg-blue-700/50 transition-colors"
                                aria-label="Toggle menu">
                                {mobileMenuOpen ? (
                                    <X size={24} />
                                ) : (
                                    <Menu size={24} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-[#0B2F5C] pb-4 border-t border-blue-700/30">
                        <div className="flex flex-col space-y-1 px-4">
                            <Link
                                href="/"
                                className={cn(
                                    "py-3 px-3 rounded transition-colors font-medium",
                                    isActive("/")
                                        ? "bg-blue-800 text-white"
                                        : "hover:bg-blue-700/70"
                                )}>
                                Home
                            </Link>
                            <Link
                                href="/events"
                                className={cn(
                                    "py-3 px-3 rounded transition-colors font-medium",
                                    isActive("/events")
                                        ? "bg-blue-800 text-white"
                                        : "hover:bg-blue-700/70"
                                )}>
                                Events
                            </Link>

                            <button
                                onClick={() => toggleDropdown("team")}
                                className={cn(
                                    "py-3 px-3 text-left rounded transition-colors flex items-center justify-between font-medium",
                                    isActive("/team")
                                        ? "bg-blue-800 text-white"
                                        : "hover:bg-blue-700/70"
                                )}>
                                Our Team
                                <ChevronDown
                                    className={cn(
                                        "h-4 w-4 transition-transform duration-200",
                                        activeDropdown === "team"
                                            ? "rotate-180"
                                            : ""
                                    )}
                                />
                            </button>
                            {activeDropdown === "team" && (
                                <div className="pl-4 space-y-1 bg-blue-900/30 rounded ml-2 mb-1">
                                    <Link
                                        href="/team"
                                        className={cn(
                                            "block py-2 px-3 rounded transition-colors",
                                            isActive("/team") &&
                                                pathname === "/team"
                                                ? "bg-blue-800 text-white"
                                                : "hover:bg-blue-700/70"
                                        )}>
                                        Team Overview
                                    </Link>
                                    <Link
                                        href="/team/2024"
                                        className={cn(
                                            "block py-2 px-3 rounded transition-colors",
                                            isActive("/team/2024")
                                                ? "bg-blue-800 text-white"
                                                : "hover:bg-blue-700/70"
                                        )}>
                                        2024-25 Team
                                    </Link>
                                    <Link
                                        href="/team/2023"
                                        className={cn(
                                            "block py-2 px-3 rounded transition-colors",
                                            isActive("/team/2023")
                                                ? "bg-blue-800 text-white"
                                                : "hover:bg-blue-700/70"
                                        )}>
                                        2023-24 Team
                                    </Link>
                                </div>
                            )}

                            <button
                                onClick={() => toggleDropdown("faculty")}
                                className={cn(
                                    "py-3 px-3 text-left rounded transition-colors flex items-center justify-between font-medium",
                                    isActive("/faculty")
                                        ? "bg-blue-800 text-white"
                                        : "hover:bg-blue-700/70"
                                )}>
                                Faculty Coordinators
                                <ChevronDown
                                    className={cn(
                                        "h-4 w-4 transition-transform duration-200",
                                        activeDropdown === "faculty"
                                            ? "rotate-180"
                                            : ""
                                    )}
                                />
                            </button>
                            {activeDropdown === "faculty" && (
                                <div className="pl-4 space-y-1 bg-blue-900/30 rounded ml-2 mb-1">
                                    <Link
                                        href="/faculty"
                                        className={cn(
                                            "block py-2 px-3 rounded transition-colors",
                                            isActive("/faculty") &&
                                                pathname === "/faculty"
                                                ? "bg-blue-800 text-white"
                                                : "hover:bg-blue-700/70"
                                        )}>
                                        Faculty Overview
                                    </Link>
                                    <Link
                                        href="/faculty/2024"
                                        className={cn(
                                            "block py-2 px-3 rounded transition-colors",
                                            isActive("/faculty/2024")
                                                ? "bg-blue-800 text-white"
                                                : "hover:bg-blue-700/70"
                                        )}>
                                        2024-25 Faculty
                                    </Link>
                                    <Link
                                        href="/faculty/2023"
                                        className={cn(
                                            "block py-2 px-3 rounded transition-colors",
                                            isActive("/faculty/2023")
                                                ? "bg-blue-800 text-white"
                                                : "hover:bg-blue-700/70"
                                        )}>
                                        2023-24 Faculty
                                    </Link>
                                </div>
                            )}

                            <Link
                                href="/gallery"
                                className={cn(
                                    "py-3 px-3 rounded transition-colors font-medium",
                                    isActive("/gallery")
                                        ? "bg-blue-800 text-white"
                                        : "hover:bg-blue-700/70"
                                )}>
                                Gallery
                            </Link>
                            <Link
                                href="/contact"
                                className={cn(
                                    "py-3 px-3 rounded transition-colors font-medium",
                                    isActive("/contact")
                                        ? "bg-blue-800 text-white"
                                        : "hover:bg-blue-700/70"
                                )}>
                                Contact
                            </Link>
                            <Link
                                href="/demo"
                                className={cn(
                                    "py-3 px-3 rounded transition-colors font-medium",
                                    isActive("/demo")
                                        ? "bg-blue-800 text-white"
                                        : "hover:bg-blue-700/70"
                                )}>
                                Demo
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;

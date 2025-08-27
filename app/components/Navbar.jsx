"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
    const { data: session } = useSession();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                {/* Left: Website Name */}
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    MyWebsite
                </Link>

                {/* Center: Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-700 hover:text-blue-600">
                        Home
                    </Link>
                    <Link href="/products" className="text-gray-700 hover:text-blue-600">
                        Products
                    </Link>
                </div>

                {/* Right: Login / Profile */}
                <div className="relative">
                    {!session ? (
                        <button
                            onClick={() => signIn()}
                            className="px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Login
                        </button>
                    ) : (
                        <div className="relative">
                            <img
                                src={session.user.image || "/default-avatar.png"}
                                alt="Profile"
                                className="w-10 h-10 rounded-full cursor-pointer border"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            />

                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden">
                                    <Link
                                        href="/dashboard"
                                        className="block px-4 py-2 text-black hover:bg-gray-100"
                                    >
                                        Dashboard
                                    </Link>
                                    <button
                                        onClick={() => signOut()}
                                        className="w-full text-black text-left px-4 py-2 hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden px-4 pb-3 flex space-x-6 justify-center">
                <Link href="/" className="text-gray-700 hover:text-blue-600">
                    Home
                </Link>
                <Link href="/products" className="text-gray-700 hover:text-blue-600">
                    Products
                </Link>
            </div>
        </nav>
    );
}

"use client";

import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white p-6">
                <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                <ul>
                    <li className="mb-3">
                        <Link href="/" className="hover:text-blue-400">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/dashboard/add-product"
                            className="hover:text-blue-400"
                        >
                            Add Product
                        </Link>
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-gray-100 p-6">{children}</main>
        </div>
    );
}

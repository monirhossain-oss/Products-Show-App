"use client";

import Link from "next/link";

export default function GlobalError({ error, reset }) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 text-center">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
            <p className="text-gray-700 mb-6">{error?.message || "An unexpected error occurred."}</p>
            <button
                onClick={() => reset()}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Try Again
            </button>
            <Link href="/" className="mt-4 text-blue-600 hover:underline">
                Go Back Home
            </Link>
        </div>
    );
}

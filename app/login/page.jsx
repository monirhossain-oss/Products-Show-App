"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-200">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back</h1>
        <p className="text-gray-500 mb-6">Login to continue</p>

        {/* Google Login Button */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300"
        >
          Login with Google
        </button>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-sm text-gray-400">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="block w-full px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

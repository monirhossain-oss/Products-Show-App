"use client";

import { useState } from "react";
import DashboardLayout from "../page";

export default function AddProductPage() {
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(""); // 🔹 new state for image
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ productName, description, price, image }), // 🔹 send image also
            });

            if (res.ok) {
                setProductName("");
                setDescription("");
                setPrice("");
                setImage(""); // reset image field
                alert("✅ Product added successfully!");
            } else {
                alert("❌ Failed to add product.");
            }
        } catch (err) {
            console.error(err);
            alert("⚠️ Something went wrong.");
        }

        setLoading(false);
    };

    return (
        <DashboardLayout>
            <h1 className="text-3xl mt-16 font-bold text-center text-gray-800 mb-8">
                Add New Product
            </h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-8 space-y-6"
            >
                {/* Product Name */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                        Product Name
                    </label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="w-full text-black border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter product name"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                        Description
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full text-black border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter product description"
                        rows={4}
                        required
                    />
                </div>

                {/* Price */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                        Price (TK)
                    </label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full text-black border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter product price"
                        required
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                        Image URL
                    </label>
                    <input
                        type="url"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="w-full text-black border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter product image URL"
                        required
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-md font-semibold text-white ${loading
                            ? "bg-blue-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                        }`}
                >
                    {loading && (
                        <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8z"
                            ></path>
                        </svg>
                    )}
                    {loading ? "Adding..." : "Add Product"}
                </button>
            </form>
        </DashboardLayout>
    );
}

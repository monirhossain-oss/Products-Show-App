"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("/api/productsApi");
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="py-10 mt-16 px-4">
            <h1 className="text-3xl font-bold mb-6 text-center ">
                Products
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg shadow hover:shadow-lg transition duration-200"
                    >
                        <img
                            src={product.image}
                            alt={product.productName}
                            className="w-full h-36 object-cover rounded mb-3"
                        />
                        <h2 className="text-lg font-semibold mb-1 text-gray-900">
                            {product.productName}
                        </h2>
                        <p className="text-gray-600 text-sm mb-2 truncate">
                            {product.description}
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-blue-700">${product.price}</span>
                            <Link  href={`/products/${product._id}`} className="bg-blue-600 cursor-pointer text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

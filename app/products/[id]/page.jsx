"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
    const params = useParams();
    const { id } = params;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/productsApi/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;
    if (!product) return <p className="text-center mt-10 text-red-500">Product not found</p>;

    return (
        <div className="max-w-3xl mx-auto py-12 px-4 text-center">
            {/* Product Name */}
            <h1 className="text-4xl font-bold mb-6">{product.productName}</h1>

            {/* Product Image */}
            <img
                src={product.image}
                alt={product.productName}
                className="w-full h-120 object-cover rounded-lg shadow-md mb-6"
            />

            {/* Description */}
            <p className="text-gray-200 text-base mb-6">{product.description}</p>

            {/* Price */}
            <p className="text-2xl font-semibold text-blue-600">${product.price}</p>
        </div>
    );
}

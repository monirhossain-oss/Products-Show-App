import Link from "next/link";

export default function ProductHighlights() {
  const products = [
    {
      id: 1,
      name: "iPhone 16",
      description: "The iPhone 16 features the new A18 chip with Apple Intelligence.",
      price: "$1200",
      image: "https://i.ibb.co.com/ccJ0CGdF/two-happy-girls-sweaters-having-fun-with-shopping-trolley-megaphone-white-wall.jpg",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      description: "Samsung Galaxy S24 with Exynos 2400 processor and amazing camera.",
      price: "$1100",
      image: "https://i.ibb.co.com/Sw8NsM51/smartphone-nature-concept.jpg",
    },
    {
      id: 3,
      name: "Google Pixel 9",
      description: "Google Pixel 9 with pure Android experience and exceptional camera.",
      price: "$950",
      image: "https://i.ibb.co.com/9Hrk0wHf/pixel-smartphone-with-pumpkins-fall-setting.jpg",
    },
    {
      id: 4,
      name: "OnePlus 12",
      description: "OnePlus 12 with fast charging and smooth OxygenOS.",
      price: "$850",
      image: "https://i.ibb.co.com/0yG1F80V/phone-box-background.jpg",
    },
    {
      id: 5,
      name: "Xiaomi 14 Pro",
      description: "Xiaomi 14 Pro with high-resolution display and AI camera.",
      price: "$700",
      image: "https://i.ibb.co.com/9kvccM66/eid-mobile-screens-front-side.jpg",
    },
    {
      id: 6,
      name: "Oppo Find X6",
      description: "Oppo Find X6 with sleek design and powerful Snapdragon chip.",
      price: "$680",
      image: "https://i.ibb.co.com/Sw8NsM51/smartphone-nature-concept.jpg",
    },
    {
      id: 7,
      name: "Vivo X100",
      description: "Vivo X100 with excellent battery life and vibrant AMOLED display.",
      price: "$600",
      image: "https://i.ibb.co.com/0jPqFLVg/top-view-internet-communication-network-with-5g-sim-card-smartphone.jpg",
    },
    {
      id: 8,
      name: "Realme GT 6",
      description: "Realme GT 6 with high refresh rate display and performance-focused design.",
      price: "$550",
      image: "https://i.ibb.co.com/Sw8NsM51/smartphone-nature-concept.jpg",
    },
  ];

  return (
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Product Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-36 object-cover rounded mb-3"
            />
            <h3 className="text-lg text-black font-bold mb-1">{p.name}</h3>
            <p className="text-gray-600 text-sm mb-2 truncate">{p.description}</p>
            <div className="flex justify-between items-center">
              <span className="font-bold text-blue-700">{p.price}</span>
              <Link
                href={`/products`}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

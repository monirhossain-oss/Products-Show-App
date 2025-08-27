export default function ProductHighlights() {
  const products = [
    { id: 1, name: "Product A", price: "$20" },
    { id: 2, name: "Product B", price: "$30" },
    { id: 3, name: "Product C", price: "$25" },
  ];

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Product Highlights</h2>
      <div className="flex justify-center gap-8">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded shadow w-40 text-center">
            <h3 className="font-bold">{p.name}</h3>
            <p className="mt-2">{p.price}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

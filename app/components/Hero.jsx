export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/whPQvbVb/two-happy-girls-sweaters-having-fun-with-shopping-trolley-megaphone-white-wall.jpg')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to MyShop</h1>
        <p className="text-xl mb-6">
          Discover amazing products curated just for you!
        </p>
        <a
          href="/products"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}

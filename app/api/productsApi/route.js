import clientPromise from "@/Utils/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("MyNewDB");
    const collection = db.collection("products");

    const products = await collection.find({}).toArray();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), { status: 500 });
  }
}

// POST যেমন আছে, সেটাও থাকবে
export async function POST(req) {
    try {
        const { productName, description, price, image } = await req.json();

        const client = await clientPromise;
        const db = client.db("MyNewDB");
        const collection = db.collection("products");

        const result = await collection.insertOne({
            productName,
            description,
            price: Number(price),
            image,
            createdAt: new Date(),
        });

        return new Response(
            JSON.stringify({
                message: "Product added successfully",
                id: result.insertedId,
            }),
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ error: "Failed to add product" }),
            { status: 500 }
        );
    }
}

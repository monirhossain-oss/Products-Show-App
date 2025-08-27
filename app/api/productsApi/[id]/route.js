import clientPromise from "@/Utils/mongodb";
import { ObjectId } from "mongodb";

export async function GET(req) {
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop(); // last segment = id

    try {
        const client = await clientPromise;
        const db = client.db("MyNewDB");
        const collection = db.collection("products");

        const product = await collection.findOne({ _id: new ObjectId(id) });

        if (!product) return new Response(JSON.stringify({ error: "Product not found" }), { status: 404 });

        return new Response(JSON.stringify(product), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: "Failed to fetch product" }), { status: 500 });
    }
}

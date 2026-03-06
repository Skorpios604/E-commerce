import { getProductById, products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductClient from "./components/ProductClient";

export function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = getProductById(id);

    if (!product) {
        return notFound();
    }

    return <ProductClient product={product} />;
}

"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw, Check, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/lib/data";
import Link from "next/link"; // For "not found" link, though not strictly used in current mock fallback

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    // Normally we'd use params.id, but since this is client-side mock
    // we'll just show Product 1 details if not found, or find mock.
    // We need to unwrap params in Next.js 15+ properly, but for now assuming direct access or use use effect if it was async params.
    // Actually params prop is async in recent next.js versions, but for client component we often use `useParams` hook.

    // Safe way using data mock:
    const product = products[0]; // Default mock for showcase

    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isAdded, setIsAdded] = useState(false);

    // Mock Gallery
    const images = [
        product.image,
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800", // dog
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800", // dogs playing
    ];

    const handleAddToCart = () => {
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <motion.div
                        layoutId={`product-image-${product.id}`}
                        className="aspect-square rounded-3xl overflow-hidden bg-secondary/10 border border-border relative group"
                    >
                        <img
                            src={images[selectedImage]}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Simple Zoom Hint */}
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </motion.div>

                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedImage(idx)}
                                className={`relative w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${selectedImage === idx ? "border-primary ring-2 ring-primary/20" : "border-transparent hover:border-border"}`}
                            >
                                <img src={img} alt="" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                                Top Rated
                            </Badge>
                            {product.badge && (
                                <Badge className="bg-primary text-primary-foreground">{product.badge}</Badge>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">{product.name}</h1>

                        <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1 text-yellow-400">
                                <Star fill="currentColor" size={18} />
                                <span className="font-bold text-foreground text-lg">{product.rating}</span>
                            </div>
                            <span className="text-muted-foreground">({product.reviews} reviews)</span>
                        </div>
                    </div>

                    <div className="flex items-end gap-4">
                        <span className="text-4xl font-bold font-heading text-primary">${product.price.toFixed(2)}</span>
                        <span className="text-muted-foreground line-through mb-2 text-lg">$65.00</span>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Give your furry friend the comfort they deserve. Made with premium, pet-safe materials designed to last. Perfect for naps, plays, and everything in between.
                    </p>

                    {/* Actions */}
                    <div className="space-y-6 pt-6 border-t border-border">
                        {/* Quantity */}
                        <div className="flex items-center gap-4">
                            <span className="font-bold">Quantity:</span>
                            <div className="flex items-center border border-border rounded-full bg-secondary/10">
                                <Button variant="ghost" size="icon" className="rounded-full hover:bg-white" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                                    <Minus size={16} />
                                </Button>
                                <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                                <Button variant="ghost" size="icon" className="rounded-full hover:bg-white" onClick={() => setQuantity(quantity + 1)}>
                                    <Plus size={16} />
                                </Button>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <div className="flex gap-4">
                            <Button
                                size="lg"
                                className={`flex-1 rounded-full text-lg h-14 relative overflow-hidden transition-all duration-300 ${isAdded ? "bg-green-500 hover:bg-green-600" : ""}`}
                                onClick={handleAddToCart}
                            >
                                <AnimatePresence mode="wait">
                                    {isAdded ? (
                                        <motion.div
                                            key="added"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            <Check size={24} /> Added to Cart!
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="add"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -20, opacity: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            <ShoppingCart size={24} /> Add to Cart
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Button>
                            <Button size="icon" variant="outline" className="h-14 w-14 rounded-full border-2">
                                <Heart size={24} />
                            </Button>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-3 gap-4 py-6">
                        <div className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-orange-50">
                            <div className="p-2 bg-white rounded-full text-orange-500 shadow-sm">
                                <Truck size={20} />
                            </div>
                            <span className="text-xs font-bold">Fast Shipping</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-green-50">
                            <div className="p-2 bg-white rounded-full text-green-500 shadow-sm">
                                <Shield size={20} />
                            </div>
                            <span className="text-xs font-bold">Pet Safe</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2 p-3 rounded-xl bg-blue-50">
                            <div className="p-2 bg-white rounded-full text-blue-500 shadow-sm">
                                <RotateCcw size={20} />
                            </div>
                            <span className="text-xs font-bold">Easy Returns</span>
                        </div>
                    </div>

                    {/* Tabs */}
                    <Tabs defaultValue="details" className="w-full">
                        <TabsList className="w-full justify-start bg-transparent border-b rounded-none h-auto p-0 gap-8">
                            <TabsTrigger value="details" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none px-0 pb-2 font-bold text-lg">Details</TabsTrigger>
                            <TabsTrigger value="materials" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none px-0 pb-2 font-bold text-lg">Materials</TabsTrigger>
                            <TabsTrigger value="shipping" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none px-0 pb-2 font-bold text-lg">Shipping</TabsTrigger>
                        </TabsList>
                        <TabsContent value="details" className="pt-6 text-muted-foreground">
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Ultra-soft plush cushioning</li>
                                <li>Non-slip bottom</li>
                                <li>Machine washable cover</li>
                                <li>Available in multiple sizes</li>
                            </ul>
                        </TabsContent>
                        <TabsContent value="materials" className="pt-6 text-muted-foreground">
                            <p>Made from 100% recycled polyester fill and organic cotton cover. Safe for all pets.</p>
                        </TabsContent>
                        <TabsContent value="shipping" className="pt-6 text-muted-foreground">
                            <p>Free standard shipping on orders over $50. Express delivery available at checkout.</p>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

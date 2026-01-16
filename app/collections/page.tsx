"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const collections = [
    {
        id: "summer-vibes",
        title: "Summer Vibes",
        description: "Cool gear for hot days. Swim vests, cooling mats, and travel bowls.",
        image: "https://images.unsplash.com/photo-1541857754-5aa626bb43a3?auto=format&fit=crop&q=80&w=800",
        color: "bg-orange-100",
        textColor: "text-orange-900"
    },
    {
        id: "cozy-corner",
        title: "Cozy Corner",
        description: "The softest beds and blankets for the ultimate nap time.",
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800",
        color: "bg-indigo-100",
        textColor: "text-indigo-900"
    },
    {
        id: "adventure-ready",
        title: "Adventure Ready",
        description: "Harnesses, leashes, and backpacks for the outdoor explorer.",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800",
        color: "bg-green-100",
        textColor: "text-green-900"
    },
    {
        id: "premium-treats",
        title: "Premium Treats",
        description: "Organic, grain-free snacks that taste as good as they look.",
        image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800",
        color: "bg-amber-100",
        textColor: "text-amber-900"
    }
];

export default function CollectionsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Curated Collections</h1>
                <p className="text-lg text-muted-foreground">
                    Explore our hand-picked selections designed for every occasion and personality.
                </p>
            </div>

            <div className="space-y-20">
                {collections.map((collection, index) => (
                    <motion.div
                        key={collection.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-1/2 relative group">
                            <div className={`absolute inset-0 ${collection.color} rounded-[3rem] transform rotate-3 transition-transform group-hover:rotate-6 duration-500`} />
                            <div className="relative h-[300px] md:h-[400px] rounded-[3rem] overflow-hidden shadow-xl border-4 border-white">
                                <img
                                    src={collection.image}
                                    alt={collection.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                            <h2 className={`text-4xl font-bold font-heading ${collection.textColor}`}>
                                {collection.title}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {collection.description}
                            </p>
                            <Button size="lg" className="rounded-full px-8 shadow-lg hover:shadow-xl transition-all" asChild>
                                <Link href={`/shop?collection=${collection.id}`}>
                                    Explore Collection <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

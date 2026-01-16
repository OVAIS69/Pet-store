"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Category {
    id: string;
    name: string;
    image: string;
    color: string;
}

interface CategorySelectorProps {
    categories: Category[];
}

export function CategorySelector({ categories }: CategorySelectorProps) {
    return (
        <section className="py-16 container mx-auto px-4">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold font-heading mb-2">Shop by Category</h2>
                <p className="text-muted-foreground">Find the perfect gear for your furry friend</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {categories.map((cat, index) => (
                    <motion.div
                        key={cat.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                        whileHover={{ y: -10 }}
                    >
                        <Link href={`/shop?category=${cat.id}`} className="group flex flex-col items-center gap-4">
                            <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full ${cat.color} p-2 shadow-lg group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white relative z-10">
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                {/* Decorative Ring */}
                                <div className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <span className="font-bold font-heading text-lg group-hover:text-primary transition-colors">{cat.name}</span>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

"use client";

import { motion, Variants } from "framer-motion";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeaturedProductsProps {
    products: any[]; // Using any for simplicity with dummy data, ideally typed
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <section className="py-20 bg-secondary/10">
            <div className="container mx-auto px-4">
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-wider text-sm">Trending Now</span>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2">Staff Picks</h2>
                    </div>
                    <Button variant="ghost" className="hidden md:flex gap-2 text-primary hover:text-primary/80" asChild>
                        <Link href="/shop">View All <ArrowRight size={16} /></Link>
                    </Button>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {products.map((product) => (
                        <motion.div key={product.id} variants={item}>
                            <ProductCard {...product} />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-10 text-center md:hidden">
                    <Button className="w-full rounded-full" asChild>
                        <Link href="/shop">View All Products</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

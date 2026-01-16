"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    id: number;
    name: string;
    price: number;
    rating: number;
    image: string;
    category: string;
    badge?: string;
    className?: string;
}

export function ProductCard({
    id,
    name,
    price,
    rating,
    image,
    category,
    badge,
    className,
}: ProductCardProps) {
    return (
        <motion.div
            className={cn("group relative bg-card rounded-3xl overflow-hidden border border-border/50 shadow-sm transition-all duration-300", className)}
            whileHover={{
                y: -8,
                rotateZ: -1,
                transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
        >
            {/* Badge */}
            {badge && (
                <div className="absolute top-3 left-3 z-10">
                    <Badge variant="secondary" className="font-bold bg-white/90 backdrop-blur-sm text-primary hover:bg-white">{badge}</Badge>
                </div>
            )}

            {/* Wishlist Button */}
            <button className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm text-muted-foreground hover:text-red-500 hover:bg-white transition-colors shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                <Heart size={18} />
            </button>

            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-secondary/20">
                <Link href={`/product/${id}`}>
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </Link>

                {/* Quick Actions Overlay (Mobile friendly? maybe just show on hover for desktop) */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-2 bg-gradient-to-t from-black/50 to-transparent pb-6">
                    <Button size="sm" className="rounded-full gap-2 bg-white text-foreground hover:bg-primary hover:text-white border-0 shadow-lg">
                        <Eye size={16} /> Quick View
                    </Button>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">{category}</p>
                    <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold">
                        <Star size={12} fill="currentColor" /> {rating}
                    </div>
                </div>

                <Link href={`/product/${id}`}>
                    <h3 className="font-bold font-heading text-lg leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-1">{name}</h3>
                </Link>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold font-heading text-primary">${price.toFixed(2)}</span>
                    <Button size="icon" className="rounded-full w-10 h-10 shadow-md group-hover:bg-primary group-hover:text-white transition-colors">
                        <ShoppingCart size={18} />
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}

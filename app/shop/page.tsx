"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FilterSidebar } from "@/components/shop/FilterSidebar";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { SlidersHorizontal, ArrowUpDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { products } from "@/lib/data";

export default function ShopPage() {
    // Duplicate products to fill the grid
    const allProducts = [...products, ...products, ...products].map((p, i) => ({ ...p, id: i + 10 }));

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
                <div>
                    <h1 className="text-4xl font-bold font-heading mb-2">All Products</h1>
                    <p className="text-muted-foreground">Premium accessories for your beloved pets</p>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                    {/* Mobile Filter Trigger */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" className="md:hidden flex-1 gap-2">
                                <SlidersHorizontal size={16} /> Filters
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px]">
                            <SheetHeader className="mb-6">
                                <SheetTitle>Filters</SheetTitle>
                            </SheetHeader>
                            <FilterSidebar />
                        </SheetContent>
                    </Sheet>

                    {/* Sort Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="gap-2 flex-1 md:flex-none">
                                <ArrowUpDown size={16} /> Sort by
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Newest</DropdownMenuItem>
                            <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                            <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                            <DropdownMenuItem>Best Selling</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Sidebar (Desktop) */}
                <div className="hidden md:block col-span-1">
                    <div className="sticky top-24">
                        <FilterSidebar />
                    </div>
                </div>

                {/* Product Grid */}
                <div className="col-span-1 md:col-span-3">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {allProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0 }
                                }}
                            >
                                <ProductCard {...product} />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Pagination (Visual Only) */}
                    <div className="flex justify-center mt-12 gap-2">
                        <Button variant="outline" size="sm" disabled>Previous</Button>
                        <Button variant="outline" size="sm" className="bg-primary text-white border-primary">1</Button>
                        <Button variant="outline" size="sm">2</Button>
                        <Button variant="outline" size="sm">3</Button>
                        <Button variant="outline" size="sm">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

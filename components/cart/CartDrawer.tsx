"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

// Mock Cart Item
interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export function CartDrawer({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([
        {
            id: 1,
            name: "Comfy Cloud Bed",
            price: 49.99,
            image: "https://images.unsplash.com/photo-1591946614720-90a587da4a36?auto=format&fit=crop&q=80&w=200",
            quantity: 1,
        },
        {
            id: 2,
            name: "Interactive Laser Toy",
            price: 24.50,
            image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=200",
            quantity: 2,
        },
    ]);

    const updateQuantity = (id: number, delta: number) => {
        setItems(items.map(item => {
            if (item.id === id) {
                const newQ = Math.max(0, item.quantity + delta);
                return { ...item, quantity: newQ };
            }
            return item;
        }).filter(item => item.quantity > 0));
    };

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <Sheet>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>
            <SheetContent className="w-full sm:w-[400px] flex flex-col p-0">
                <SheetHeader className="p-6 border-b border-border bg-secondary/5">
                    <SheetTitle className="flex items-center gap-2">
                        <div className="bg-primary/10 p-2 rounded-full text-primary">
                            <ShoppingCart size={20} />
                        </div>
                        Your Cart ({items.reduce((a, b) => a + b.quantity, 0)})
                    </SheetTitle>
                </SheetHeader>

                <ScrollArea className="flex-1 p-6">
                    <div className="flex flex-col gap-6">
                        <AnimatePresence>
                            {items.length === 0 ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-10 space-y-4"
                                >
                                    <p className="text-muted-foreground text-lg">Your cart is empty.</p>
                                    <Button variant="outline" className="rounded-full" asChild>
                                        <SheetTrigger>Start Shopping</SheetTrigger>
                                    </Button>
                                </motion.div>
                            ) : (
                                items.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="flex gap-4"
                                    >
                                        <div className="h-20 w-20 rounded-xl overflow-hidden bg-secondary/20 flex-shrink-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-bold font-heading line-clamp-1">{item.name}</h4>
                                                <button
                                                    onClick={() => updateQuantity(item.id, -item.quantity)}
                                                    className="text-muted-foreground hover:text-destructive transition-colors"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-2 border border-border rounded-full px-2 py-1">
                                                    <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-primary"><Minus size={14} /></button>
                                                    <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-primary"><Plus size={14} /></button>
                                                </div>
                                                <span className="font-bold text-primary">${(item.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </AnimatePresence>
                    </div>
                </ScrollArea>

                {items.length > 0 && (
                    <div className="p-6 bg-secondary/5 border-t border-border space-y-4">
                        <div className="flex justify-between items-center text-lg font-bold">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <Button className="w-full rounded-full h-12 text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform">
                            Checkout <ArrowRight className="ml-2" />
                        </Button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}

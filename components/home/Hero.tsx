"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-background to-secondary/20">
            {/* Decorative Background Blobs */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 blur-3xl rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <div className="space-y-6 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30, rotate: -2 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            duration: 0.8
                        }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border shadow-sm text-sm font-semibold text-primary mb-4">
                            <Sparkles size={16} /> New Collections Available
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight tracking-tight text-foreground">
                            Make Your Pet <br />
                            <span className="text-primary italic">Happy</span> & <span className="text-secondary-foreground italic relative">
                                Healthy
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.5" />
                                </svg>
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0"
                    >
                        Discover premium toys, cozy beds, and healthy treats that get tails wagging and kitties purring.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <Button size="lg" className="rounded-full text-lg h-14 px-8 shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                            <Link href="/shop">
                                Shop Now <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full text-lg h-14 px-8 border-2 hover:bg-secondary/20" asChild>
                            <Link href="/about">
                                Our Story
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-80"
                    >
                        <div className="text-center">
                            <p className="font-bold text-2xl font-heading">20k+</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wide">Happy Pets</p>
                        </div>
                        <div className="w-px h-8 bg-border" />
                        <div className="text-center">
                            <p className="font-bold text-2xl font-heading">150+</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wide">Brands</p>
                        </div>
                        <div className="w-px h-8 bg-border" />
                        <div className="text-center">
                            <p className="font-bold text-2xl font-heading">4.9</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wide">Rating</p>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image */}
                <div className="relative h-[500px] lg:h-[700px] hidden md:block">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        {/* Main Pet Image Container with irregular shape */}
                        <div className="relative w-[500px] h-[500px] bg-secondary rounded-[3rem] rotate-3 overflow-hidden shadow-2xl border-4 border-white">
                            {/* Replace with actual image later, using Unsplash */}
                            <img
                                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=800&auto=format&fit=crop"
                                alt="Happy Dog"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [0, 2, 0]
                            }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-10 right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[200px]"
                        >
                            <div className="bg-orange-100 p-2 rounded-full text-orange-500">
                                <Sparkles size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Premium Quality</p>
                                <p className="text-xs text-muted-foreground">Certified materials</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{
                                y: [0, 15, 0],
                                rotate: [0, -2, 0]
                            }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 -left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                            <div className="bg-blue-100 p-2 rounded-full text-blue-500">
                                <Sparkles size={20} />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Express Delivery</p>
                                <p className="text-xs text-muted-foreground">Free over $50</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

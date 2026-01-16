"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tips = [
    {
        title: "Choosing the Right Food",
        desc: "Nutrition is key for a happy pet. Learn about balanced diets for dogs and cats.",
        image: "https://images.unsplash.com/photo-1589924691195-41432c84c1f7?auto=format&fit=crop&q=80&w=400",
        color: "bg-orange-50",
        tag: "Nutrition"
    },
    {
        title: "Playtime Essentials",
        desc: "Keeps your pet active and mentally stimulated with these fun games.",
        image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&q=80&w=400",
        color: "bg-blue-50",
        tag: "Activity"
    },
    {
        title: "Grooming 101",
        desc: "Tips for keeping your furry friend's coat shiny and healthy.",
        image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400",
        color: "bg-green-50",
        tag: "Health"
    }
];

export function PetCareTips() {
    return (
        <section className="py-20 container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Pet Care Tips</h2>
                    <p className="text-muted-foreground">Expert advice for your best friend</p>
                </div>
                <Button variant="link" className="text-primary font-bold" asChild>
                    <Link href="/blog">Read our Blog <ArrowRight size={16} className="ml-1" /></Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tips.map((tip, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="group cursor-pointer"
                    >
                        <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                            <img
                                src={tip.image}
                                alt={tip.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                                {tip.tag}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">{tip.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{tip.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

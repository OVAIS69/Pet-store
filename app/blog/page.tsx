"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const articles = [
    {
        id: 1,
        title: "How to Choose the Perfect Bed for Your Dog",
        excerpt: "Size, material, and sleeping style matter. Here's our guide to finding the dream bed for your pup.",
        image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&q=80&w=800",
        date: "Jan 12, 2026",
        author: "Sarah Jenkins",
        category: "Guides"
    },
    {
        id: 2,
        title: "5 Fun Indoor Games for Cats",
        excerpt: "Keep your feline friend active and entertained even on rainy days with these simple DIY games.",
        image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800",
        date: "Jan 08, 2026",
        author: "Mike Ross",
        category: "Activity"
    },
    {
        id: 3,
        title: "Understanding Pet Nutrition Labels",
        excerpt: "Deciphering the ingredients list. What to look for and what to avoid in your pet's food.",
        image: "https://images.unsplash.com/photo-1589924691195-41432c84c1f7?auto=format&fit=crop&q=80&w=800",
        date: "Dec 28, 2025",
        author: "Dr. Emily Vet",
        category: "Health"
    },
    {
        id: 4,
        title: "Travel Tips for Pet Owners",
        excerpt: "Planning a trip? Here's how to ensure a smooth and safe journey for your furry companion.",
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=800",
        date: "Dec 15, 2025",
        author: "Sarah Jenkins",
        category: "Lifestyle"
    },
    {
        id: 5,
        title: "The Benefits of Regular Grooming",
        excerpt: "It's not just about looking good. Regular grooming prevents health issues and bonds you with your pet.",
        image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800",
        date: "Dec 05, 2025",
        author: "Mike Ross",
        category: "Grooming"
    },
    {
        id: 6,
        title: "DIY Healthy Dog Treats",
        excerpt: "Simple, nutritious recipes you can make at home with ingredients you probably already have.",
        image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=800",
        date: "Nov 22, 2025",
        author: "Chef Barker",
        category: "Nutrition"
    }
];

export default function BlogPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">The Daily Wag</h1>
                <p className="text-lg text-muted-foreground">
                    Tips, tricks, and tales from the world of pets.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, i) => (
                    <motion.article
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex flex-col h-full bg-card rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 left-4">
                                <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-foreground font-bold hover:bg-white inset-0">
                                    {article.category}
                                </Badge>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                                <span className="flex items-center gap-1"><User size={12} /> {article.author}</span>
                            </div>

                            <h2 className="text-xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                                <Link href={`/blog/${article.id}`}>
                                    {article.title}
                                </Link>
                            </h2>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                                {article.excerpt}
                            </p>

                            <Button variant="link" className="p-0 h-auto justify-start text-primary font-bold group/btn" asChild>
                                <Link href={`/blog/${article.id}`}>
                                    Read Article <ArrowRight size={16} className="ml-1 transition-transform group-hover/btn:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    );
}

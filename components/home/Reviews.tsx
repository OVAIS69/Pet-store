"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Review {
    id: number;
    user: string;
    text: string;
    rating: number;
    avatar: string;
}

interface ReviewsProps {
    reviews: Review[];
}

export function Reviews({ reviews }: ReviewsProps) {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 text-primary/5 rotate-12">
                <Quote size={120} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Happy Parents, Happy Pets</h2>
                    <p className="text-muted-foreground">Don't just take our woof for it</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Duplicate reviews to fill the grid if needed */}
                    {[...reviews, ...reviews, ...reviews].slice(0, 3).map((review, i) => (
                        <motion.div
                            key={`${review.id}-${i}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-secondary/5 h-full">
                                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                                    <div className="relative mb-4">
                                        <Avatar className="w-16 h-16 border-4 border-white shadow-md">
                                            <AvatarImage src={review.avatar} alt={review.user} />
                                            <AvatarFallback>{review.user[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm text-yellow-400">
                                            <Star size={12} fill="currentColor" />
                                        </div>
                                    </div>
                                    <p className="italic text-muted-foreground mb-4">"{review.text}"</p>
                                    <div className="mt-auto">
                                        <h4 className="font-bold font-heading text-lg">{review.user}</h4>
                                        <div className="flex justify-center gap-1 text-yellow-400 mt-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} />
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

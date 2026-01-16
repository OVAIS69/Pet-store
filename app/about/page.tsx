"use client";

import { motion } from "framer-motion";
import { Heart, Users, Globe, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 bg-secondary/10">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-bold uppercase tracking-wider text-sm mb-4 block">Our Story</span>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Designed with Love for <br /><span className="text-primary">Every Paw, Claw, and Fluff.</span></h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We believe pets aren't just animals—they're family. That's why we create premium, safe, and joyful accessories that make every moment with your best friend special.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Image Grid */}
            <section className="py-12 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="col-span-1 md:col-span-2 aspect-video rounded-3xl overflow-hidden relative shadow-lg"
                    >
                        <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop" alt="Happy Dogs Playing" className="object-cover w-full h-full" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-span-1 aspect-square md:aspect-auto rounded-3xl overflow-hidden relative shadow-lg"
                    >
                        <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=600&auto=format&fit=crop" alt="Cat Napping" className="object-cover w-full h-full" />
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { icon: Users, label: "Happy Parents", value: "20,000+" },
                        { icon: Heart, label: "Pets Served", value: "50,000+" },
                        { icon: Globe, label: "Countries", value: "12" },
                        { icon: Award, label: "Pet Design Awards", value: "5" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                                <stat.icon size={32} />
                            </div>
                            <h3 className="text-4xl font-bold font-heading mb-1">{stat.value}</h3>
                            <p className="text-white/80">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <img src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=800" alt="Mission" className="rounded-[3rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" />
                    </div>
                    <div className="order-1 md:order-2 space-y-6">
                        <h2 className="text-3xl font-bold font-heading">Our Mission</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Founded in 2024, our mission is simple: to bring joy to pets and their owners through thoughtful, beautiful design. We got tired of ugly, beige plastic pet products, so we decided to make something better.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            We source sustainable materials, partner with ethical manufacturers, and test every single product with our own furry office assistants.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

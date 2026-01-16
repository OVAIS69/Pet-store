"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Heart, Search, Menu, PawPrint } from "lucide-react";
import { motion } from "framer-motion";
import { CartDrawer } from "@/components/cart/CartDrawer";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-white/70 backdrop-blur-xl shadow-sm border-b border-white/20 py-3 supports-[backdrop-filter]:bg-white/60"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary text-primary-foreground p-2 rounded-xl group-hover:rotate-12 transition-transform">
                        <PawPrint size={24} fill="currentColor" />
                    </div>
                    <span className="text-2xl font-bold font-heading text-foreground tracking-tight">
                        PetStore
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary relative",
                                pathname === link.href ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {link.name}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute -bottom-2 left-0 right-0 h-1 bg-primary rounded-full"
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Icons & Actions */}
                <div className="hidden md:flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="hover:text-primary rounded-full">
                        <Search size={20} />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:text-primary rounded-full">
                        <Heart size={20} />
                    </Button>
                    <CartDrawer>
                        <Button variant="ghost" size="icon" className="hover:text-primary rounded-full relative">
                            <ShoppingCart size={20} />
                            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-primary rounded-full border-2 border-white" />
                        </Button>
                    </CartDrawer>
                    <div className="w-px h-6 bg-border mx-2" />
                    {/* Mock Profile Trigger */}
                    <Button variant="default" className="rounded-full shadow-lg hover:shadow-xl transition-all">
                        Sign In
                    </Button>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu size={24} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] border-l-2 border-primary/10">
                            <SheetHeader className="pb-6 border-b border-border">
                                <SheetTitle className="flex items-center gap-2">
                                    <PawPrint className="text-primary" />
                                    <span className="font-heading font-bold">Menu</span>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-4 mt-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium py-2 px-4 rounded-lg hover:bg-accent transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="h-px bg-border my-2" />
                                <Button className="w-full rounded-full">Sign In</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}

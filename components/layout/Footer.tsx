import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, PawPrint } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary/30 pt-20 pb-10 relative overflow-hidden mt-auto">
            {/* Decorative Top Wave - Simplified as a border radius for now or CSS shape */}
            {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform -translate-y-full">
         <svg ...wave... />
      </div> */}

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1 space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                                <PawPrint size={20} fill="currentColor" />
                            </div>
                            <span className="text-xl font-bold font-heading tracking-tight">PetStore</span>
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            Making tails wag and kitties purr since 2024. Premium accessories for your best friends.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-white hover:text-primary">
                                <Instagram size={20} />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-white hover:text-primary">
                                <Facebook size={20} />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full hover:bg-white hover:text-primary">
                                <Twitter size={20} />
                            </Button>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-4">Shop</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/shop" className="hover:text-primary transition-colors">All Products</Link></li>
                            <li><Link href="/shop?category=dogs" className="hover:text-primary transition-colors">For Dogs</Link></li>
                            <li><Link href="/shop?category=cats" className="hover:text-primary transition-colors">For Cats</Link></li>
                            <li><Link href="/shop?category=new" className="hover:text-primary transition-colors">New Arrivals</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/track-order" className="hover:text-primary transition-colors">Track Order</Link></li>
                            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
                            <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-4">Stay in the loop</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Join our newsletter for exclusive deals and cute pet pics!
                        </p>
                        <div className="flex flex-col gap-2">
                            <Input
                                placeholder="Enter your email"
                                className="bg-white border-none shadow-sm focus-visible:ring-primary"
                            />
                            <Button className="w-full font-bold shadow-md hover:shadow-lg transition-all">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} PetStore Inc. All rights reserved. Designed with ❤️.</p>
                </div>
            </div>
        </footer>
    );
}

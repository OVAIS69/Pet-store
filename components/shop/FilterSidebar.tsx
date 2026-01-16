"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
// No slider component installed, we'll use a simple mock or default input
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function FilterSidebar() {
    const [priceRange, setPriceRange] = useState([0, 100]);

    return (
        <div className="space-y-6">
            <div>
                <h3 className="font-heading font-bold text-lg mb-4">Pet Type</h3>
                <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="dog" />
                        <Label htmlFor="dog">Dog</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="cat" />
                        <Label htmlFor="cat">Cat</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="small-pet" />
                        <Label htmlFor="small-pet">Small Pet</Label>
                    </div>
                </div>
            </div>

            <Separator />

            <div>
                <h3 className="font-heading font-bold text-lg mb-4">Category</h3>
                <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="toys" />
                        <Label htmlFor="toys">Toys</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="beds" />
                        <Label htmlFor="beds">Beds & Furniture</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="food" />
                        <Label htmlFor="food">Food & Treats</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="accessories" />
                        <Label htmlFor="accessories">Accessories</Label>
                    </div>
                </div>
            </div>

            <Separator />

            <div>
                <h3 className="font-heading font-bold text-lg mb-4">Price Range</h3>
                <div className="px-2">
                    {/* Simple mock range input since we didn't install slider */}
                    <input
                        type="range"
                        min="0"
                        max="200"
                        className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                        <span>$0</span>
                        <span>$200+</span>
                    </div>
                </div>
            </div>

            <Button className="w-full rounded-full">Apply Filters</Button>
        </div>
    );
}

import { Hero } from "@/components/home/Hero";
import { CategorySelector } from "@/components/home/CategorySelector";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Reviews } from "@/components/home/Reviews";
import { PetCareTips } from "@/components/home/PetCareTips";
import { categories, products, reviews } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CategorySelector categories={categories} />
      <FeaturedProducts products={products} />
      <Reviews reviews={reviews} />
      <PetCareTips />

      {/* Simple Banner CTA */}
      <section className="py-20 bg-primary/10 mb-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading mb-4">Join the Pack!</h2>
          <p className="mb-6 text-muted-foreground max-w-xl mx-auto">
            Sign up for our subscription service and get a monthly box of joy delivered to your doorstep.
          </p>
          <button className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

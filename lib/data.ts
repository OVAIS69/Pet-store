export const categories = [
    {
        id: "dogs",
        name: "Dogs",
        image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=400&auto=format&fit=crop",
        color: "bg-orange-100",
    },
    {
        id: "cats",
        name: "Cats",
        image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=400&auto=format&fit=crop",
        color: "bg-blue-100",
    },
    {
        id: "small-pets",
        name: "Small Pets",
        image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?q=80&w=400&auto=format&fit=crop",
        color: "bg-green-100",
    },
];

export const products = [
    {
        id: 1,
        name: "Comfy Cloud Bed",
        price: 49.99,
        rating: 4.8,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&q=80&w=800", // Using verified 'Bed' blog image
        category: "beds",
        petType: "dog",
        badge: "Bestseller",
    },
    {
        id: 2,
        name: "Interactive Laser Toy",
        price: 24.50,
        rating: 4.5,
        reviews: 85,
        image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800", // Using verified 'Games' blog image
        category: "toys",
        petType: "cat",
        badge: "New",
    },
    {
        id: 3,
        name: "Premium Leather Collar",
        price: 35.00,
        rating: 4.9,
        reviews: 210,
        image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&q=80&w=800", // Using verified 'Travel' blog image
        category: "accessories",
        petType: "dog",
    },
    {
        id: 4,
        name: "Organic Catnip Treats",
        price: 12.99,
        rating: 4.7,
        reviews: 300,
        image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&q=80&w=800", // Using verified 'Treats' blog image
        category: "food",
        petType: "cat",
        badge: "Organic",
    },
];

export const reviews = [
    {
        id: 1,
        user: "Sarah & Max",
        text: "The cloud bed is amazing! Max hasn't slept anywhere else since we got it.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1517423568366-eb51fb43d4ac?auto=format&fit=crop&q=80&w=100",
    },
    {
        id: 2,
        user: "Mike & Luna",
        text: "Super durable toys. Luna destroys everything but this one lasted!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
    },
];

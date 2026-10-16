export type ProductCategory = "Kaftans" | "Senator" | "Corporate" | "Jalabias";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number | null;
  image: string;
  description: string;
}
export const products: Product[] = [
  {
    id: "Kaftan-001",
    name: "Classic Kaftan",
    category: "Kaftans",
    price: null,
    image: "/images/kaftan.jpg",
    description: "A refined Kaftan for an elegant, timeless look.",
  },
  {
    id: "senator-001",
    name: "Classic Senator Outfit",
    category: "Senator",
    price: null,
    image: "/images/senator.jpg",
    description: "A Sophisticated traditional outfit for special occassions.",
  },
  {
    id: "corporate-001",
    name: "Modern Corporate Wear",
    category: "Corporate",
    price: null,
    image: "/images/corporate.jpg",
    description: "A Polished look for professional settings.",
  },
  {
    id: "jalabia-001",
    name: "Classic Jalabia",
    category: "Jalabias",
    price: null,
    image: "/images/jalabia.jpg",
    description: "Comfortable traditional wear with understated elegance.",
  },
];

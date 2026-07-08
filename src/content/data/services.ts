import { Service } from "@/types/content.types";

export const servicesData: Service[] = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    shortDescription: "Creating visually appealing designs for digital and print media with a focus on clarity, creativity and communication.",
    iconName: "PenTool", // Lucide icon
    category: "Design",
    displayOrder: 1,
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    shortDescription: "Designing memorable brand identities including logos, color systems and visual guidelines.",
    iconName: "Fingerprint", // Lucide icon
    category: "Design",
    displayOrder: 2,
  },
  {
    id: "social-media",
    title: "Social Media Design",
    shortDescription: "Designing engaging posts, banners and promotional creatives optimized for social media platforms.",
    iconName: "Share2", // Lucide icon
    category: "Design",
    displayOrder: 3,
  },
  {
    id: "photo-editing",
    title: "Photo Editing",
    shortDescription: "Professional photo editing, retouching and creative manipulation using modern editing techniques.",
    iconName: "Camera", // Lucide icon
    category: "Photography",
    displayOrder: 4,
  },
  {
    id: "digital-art",
    title: "Digital Art",
    shortDescription: "Creating creative digital artwork and visual concepts for personal and commercial projects.",
    iconName: "Palette", // Lucide icon
    category: "Design",
    displayOrder: 5,
  },
];

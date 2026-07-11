import { Service } from "@/types/content.types";

export const servicesData: Service[] = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    shortDescription: "Creating visually appealing designs for digital and print media with a focus on clarity, creativity, and communication.",
    iconName: "PenTool",
    category: "Design",
    displayOrder: 1,
  },
  {
    id: "brand-identity",
    title: "Brand Identity",
    shortDescription: "Designing memorable brand identities including logos, color systems, and visual guidelines.",
    iconName: "Fingerprint",
    category: "Design",
    displayOrder: 2,
  },
  {
    id: "social-media",
    title: "Social Media Design",
    shortDescription: "Designing engaging posts, banners, and promotional creatives optimized for social media platforms.",
    iconName: "Share2",
    category: "Design",
    displayOrder: 3,
  },
  {
    id: "poster-design",
    title: "Poster Design",
    shortDescription: "Crafting impactful poster and digital artwork layouts combining modern typography and visual elements.",
    iconName: "FileImage",
    category: "Design",
    displayOrder: 4,
  },
  {
    id: "photo-editing",
    title: "Photo Editing",
    shortDescription: "Professional photo editing, retouching, and creative manipulation using modern editing techniques.",
    iconName: "Camera",
    category: "Photography",
    displayOrder: 5,
  },
  {
    id: "ui-design",
    title: "UI Design (Learning)",
    shortDescription: "Exploring modern web layouts, interactive interfaces, design system building, and wireframing.",
    iconName: "Layout",
    category: "Design",
    displayOrder: 6,
  }
];

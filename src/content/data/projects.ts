import { Project } from "@/types/content.types";

export const projectsData: Project[] = [
  {
    id: "horizon-branding",
    slug: "horizon-branding",
    title: "Horizon Brand Identity",
    category: "Brand Identity",
    thumbnail: "/placeholders/gradient-1.jpg", 
    shortDescription: "A complete brand overhaul for a modern tech startup, including logo design, typography, and color system.",
    tags: ["Illustrator", "Photoshop", "Branding"],
    year: "2025",
    isFeatured: true,
    visibility: "public",
    overview: "Horizon is a modern tech startup focused on delivering lightning-fast cloud computing solutions. They approached me to completely redesign their brand identity from the ground up, requiring a look that felt both incredibly futuristic and securely grounded.",
    objectives: [
      "Establish a premium, trustworthy visual identity.",
      "Design a scalable logo mark that works at 16px and 1000px.",
      "Create a comprehensive brand guideline document for their internal marketing team."
    ],
    research: "I began by analyzing their top 5 competitors in the cloud computing space. Most relied on generic blue cloud motifs. I wanted to break this mold by leaning into sleek, aerodynamic forms and a vibrant gradient palette inspired by atmospheric entry.",
    process: "The process started with over 50 pencil sketches. We narrowed it down to three concepts, eventually proceeding with a geometric 'H' that subtly doubles as a portal or gateway. The typography was carefully kerned to feel architectural.",
    designSolution: "The final solution is a masterclass in modern minimalism. We paired a highly customized sans-serif wordmark with a strikingly vibrant icon. The primary brand color, 'Horizon Neon', ensures they stand out on dark-mode software interfaces.",
    challenges: [
      "Ensuring the vibrant gradient reproduced accurately in print media.",
      "Balancing the futuristic aesthetic with corporate trustworthiness."
    ],
    keyLearnings: [
      "Extensive print-testing early in the process saves countless revision hours.",
      "A strong brand guideline is the most valuable asset you can hand over to a client."
    ],
    gallery: [
      "/placeholders/gradient-1.jpg",
      "/placeholders/gradient-2.jpg",
      "/placeholders/gradient-3.jpg",
      "/placeholders/gradient-4.jpg"
    ]
  },
  {
    id: "stellar-ui",
    slug: "stellar-ui",
    title: "Stellar Dashboard UI",
    category: "UI Design",
    thumbnail: "/placeholders/gradient-2.jpg",
    shortDescription: "Sleek, dark-mode financial dashboard emphasizing data clarity and minimal aesthetics.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    year: "2025",
    isFeatured: false,
    visibility: "public",
  },
  {
    id: "social-campaign-x",
    slug: "social-campaign-x",
    title: "Neon Social Campaign",
    category: "Social Media Design",
    thumbnail: "/placeholders/gradient-3.jpg",
    shortDescription: "A vibrant, high-energy Instagram post series designed to boost engagement for a music festival.",
    tags: ["Canva", "Photoshop", "Social Media"],
    year: "2024",
    isFeatured: false,
    visibility: "public",
  },
  {
    id: "editorial-retouch",
    slug: "editorial-retouch",
    title: "Editorial Retouching",
    category: "Photo Editing",
    thumbnail: "/placeholders/gradient-4.jpg",
    shortDescription: "High-end fashion photography retouching focused on skin texture preservation and color grading.",
    tags: ["Lightroom", "Photoshop", "Photography"],
    year: "2024",
    isFeatured: false,
    visibility: "public",
  },
  {
    id: "cyber-art",
    slug: "cyber-art",
    title: "Cyberpunk Cityscape",
    category: "Digital Art",
    thumbnail: "/placeholders/gradient-5.jpg",
    shortDescription: "A futuristic digital illustration blending 3D assets with heavy 2D digital painting overlays.",
    tags: ["Illustrator", "Blender", "Concept Art"],
    year: "2023",
    isFeatured: false,
    visibility: "public",
  },
  {
    id: "eco-poster",
    slug: "eco-poster",
    title: "Eco Awareness Poster",
    category: "Graphic Design",
    thumbnail: "/placeholders/gradient-6.jpg",
    shortDescription: "Minimalist typographic poster design created for a university environmental awareness campaign.",
    tags: ["Typography", "Illustrator", "Print"],
    year: "2023",
    isFeatured: false,
    visibility: "public",
  },
];

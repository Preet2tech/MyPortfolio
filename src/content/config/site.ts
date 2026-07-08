import { SiteConfig, NavigationItem } from "@/types/content.types";

export const siteConfig: SiteConfig = {
  name: "Preet Patel",
  description: "Graphic Designer & Photographer Portfolio",
  url: "https://preetpatel.com", // Placeholder
  ogImage: "/assets/seo/og-image.jpg",
  links: {
    twitter: "https://twitter.com/preetpatel",
    github: "https://github.com/preetpatel",
  },
};

export const mainNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Tools", href: "#tools" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

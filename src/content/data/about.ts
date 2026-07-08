import { AboutData } from "@/types/content.types";
import { profileData } from "./profile";

export const aboutData: AboutData = {
  biography: profileData.longAbout,
  education: [
    {
      institution: "Computer Science & Design University",
      degree: "B.S. in Computer Science & Design",
      year: "2024",
    },
  ],
  interests: [
    "Graphic Design", 
    "Brand Identity", 
    "Photo Editing", 
    "Photography", 
    "Digital Art"
  ],
  currentlyLearning: [
    "Data Analytics",
    "Data Science",
    "Modern UI/UX",
    "Design Systems"
  ],
  goal: "To design meaningful digital experiences that combine creativity, technology, and usability.",
  designPhilosophy:
    "I believe design is not just about making things look good, but about solving problems effectively and communicating ideas clearly.",
  statistics: [
    { label: "Projects Completed", value: "20+" },
    { label: "Years Experience", value: "3+" },
  ],
};

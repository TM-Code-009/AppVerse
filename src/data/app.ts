export interface AppType {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  url: string;
}

export const apps: AppType[] = [
  {
    id: 1,
    title: "NYSC Connect",
    description:
      "Connecting corps members across Nigeria.",
    category: "Community",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    url: "#",
  },

  {
    id: 2,
    title: "Nacos Store",
    description:
      "Modern ecommerce experience.",
    category: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    url: "#",
  },

  {
    id: 3,
    title: "TaskFlow",
    description:
      "Productivity management tool.",
    category: "Productivity",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    url: "#",
  },

  {
    id: 4,
    title: "AI Writer",
    description:
      "Generate content with AI.",
    category: "AI",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    url: "#",
  },
];
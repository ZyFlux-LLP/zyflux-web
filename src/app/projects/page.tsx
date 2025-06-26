
'use client';
import { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Users, Star, Filter, X, Award, Building,Target, Clock, CheckCircle, Phone} from 'lucide-react';
import { Marquee } from "@/components/ui/marquee"
import Link from 'next/link';

interface Category {
  id: string;
  label: string;
}

interface ProjectResults {
  [key: string]: string;
}

interface Testimonial {
  text: string;
  author: string;
  position: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  type: string;
  description: string;
  longDescription: string;
  image: string;
  projectImage: string;
  technologies: string[];
  features: string[];
  results: ProjectResults;
  duration: string;
  client: string;
  year: string;
  status: string;
  liveUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  testimonial: Testimonial;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}
const Logos = {
  tailwind: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 33">
      <path fill="#06b6d4" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.439 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.361 33.692.6 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.639 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.561 20.192 16.8 13.5 16.8z"/>
    </svg>
  ),
  nextjs: (
    <svg viewBox="0 0 128 128">
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z" fill="white"/>
    </svg>
  ),
  react: (
    <svg viewBox="0 0 128 128">
      <path d="M64 31.63c-17.78 0-32.2-1.9-32.2-1.9l-.46 1.06c4.05 18.1 15.84 62.5 15.84 62.5h1.75s3.66-11.7 7.1-20.9c7.1 3.4 20.5 5.6 35.3 1.8l1.3 19.1h1.8s11.6-44.4 15.8-62.5l-.4-1.1c-.1 0-14.4 1.9-32.2 1.9z" fill="#61dafb"/><path d="M64 31.63c17.78 0 32.2-1.9 32.2-1.9l-.46-1.06c-4.05 18.1-15.84 62.5-15.84 62.5h-1.75s-3.66-11.7-7.1-20.9c-7.1 3.4-20.5 5.6-35.3 1.8l-1.3 19.1h-1.8s-11.6-44.4-15.8-62.5l.4-1.1c.1 0 14.4 1.9 32.2 1.9z" fill="#61dafb"/><circle cx="64" cy="65.63" r="11.2" fill="#61dafb"/><path d="M64 31.63c-17.78 0-32.2 1.9-32.2 1.9l.46 1.06c4.05-18.1 15.84-62.5 15.84-62.5h1.75s3.66 11.7 7.1 20.9c7.1-3.4 20.5-5.6 35.3-1.8l1.3-19.1h1.8s11.6 44.4 15.8 62.5l-.4 1.1c0 .1-14.4-1.9-32.2-1.9z" fill="#61dafb"/>
    </svg>
  ),
  node: (
    <svg viewBox="0 0 128 128">
      <path fill="#83CD29" d="M112.8 31.2l-48-28.8c-2.4-1.6-5.6-1.6-8 0l-48 28.8c-2.4 1.6-3.2 4-3.2 6.4v51.2c0 2.4.8 4.8 3.2 6.4l48 28.8c1.2.8 2.4.8 4 .8s2.8 0 4-.8l48-28.8c2.4-1.6 3.2-4 3.2-6.4v-51.2c0-2.4-.8-4.8-3.2-6.4zm-8 57.6l-48 28.8-48-28.8v-51.2l48-28.8 48 28.8v51.2z"/><path fill="#83CD29" d="M80.8 105.6c-12 0-15.2-5.6-16-12-.8-4.8 0-8.8 4-14.4 2.4-3.2 7.2-5.6 12.8-8 1.6-.8 2.4-1.6 2.4-3.2v-1.6c0-.8-.8-1.6-1.6-2.4-4.8-1.6-8-4-10.4-7.2-3.2-4-4-8.8-4-14.4.8-12 8-20 22.4-20 12.8 0 19.2 5.6 20 13.6 0 4-.8 7.2-4 11.2-2.4 3.2-7.2 5.6-12.8 8-1.6.8-2.4 1.6-2.4 3.2v1.6c0 .8.8 1.6 1.6 2.4 5.6 2.4 9.6 4.8 12 8.8 3.2 4.8 4 10.4 3.2 17.6-1.6 12-8.8 19.2-22.4 19.2zm-4.8-62.4c0 1.6.8 2.4 2.4 3.2 4.8 1.6 8 4 10.4 7.2 1.6 2.4 2.4 5.6 2.4 8.8 0 4-.8 7.2-4 10.4-2.4 2.4-6.4 4.8-11.2 6.4-.8 0-1.6.8-1.6 1.6v2.4c0 .8.8 1.6 1.6 2.4 4 1.6 6.4 3.2 8 5.6 2.4 3.2 2.4 6.4 2.4 9.6 0 4.8-1.6 8-4.8 10.4-3.2 2.4-8 3.2-14.4 3.2-8.8 0-12.8-2.4-14.4-7.2-.8-2.4-.8-4.8 0-7.2.8-2.4 2.4-4 4.8-5.6 4-1.6 8-3.2 12-5.6 1.6-.8 2.4-1.6 2.4-3.2v-12.8c0-.8-.8-1.6-1.6-2.4-4.8-1.6-8-4-10.4-7.2-3.2-4-4-8.8-4-14.4.8-12 8-20 22.4-20 12.8 0 19.2 5.6 20 13.6 0 4-.8 7.2-4 11.2-2.4 3.2-7.2 5.6-12.8 8-1.6.8-2.4 1.6-2.4 3.2v1.6c0 .8.8 1.6 1.6 2.4 5.6 2.4 9.6 4.8 12 8.8 3.2 4.8 4 10.4 3.2 17.6-1.6 12-8.8 19.2-22.4 19.2z"/>
    </svg>
  ),
  express: (
    <svg viewBox="0 0 128 128">
      <path fill="#F7DF1C" d="M126.67 98.44c-4.56 1.16-8.24.92-11.18.28-3.57-.8-6.75-2.6-9.46-5.4-3.1-3.12-5.5-7.27-7.12-12.13L81.9 22.96l-1.98-5.3-18.74 48.1-7.24 18.25c-1.6 4.1-3.8 7.57-6.45 10.1-3.1 2.94-6.7 4.8-10.8 5.5-3.8.66-7.7.6-11.7 0-4.1-.66-7.57-2.1-10.4-4.3-2.8-2.2-4.9-5.1-6.27-8.7-1.37-3.6-1.8-7.5-1.27-11.6.53-4.1 1.86-7.9 4-11.3 2.1-3.4 5.03-6.1 8.66-8.1 3.63-2 7.9-3.3 12.8-3.8 4.1-.47 8.1-.1 11.7 1.1 3.6 1.2 6.8 3.1 9.5 5.7 2.7 2.6 4.8 5.8 6.3 9.6l7.4-18.2-5.3-13.2-7.4 18.2c-1.1 2.7-2.7 5.1-4.8 7.1-2.1 2-4.6 3.5-7.5 4.5-2.9 1-6 1.4-9.3 1.2-3.3-.2-6.3-1-9-2.5-2.7-1.5-4.9-3.5-6.6-6-1.7-2.5-2.8-5.4-3.3-8.7-.5-3.3-.1-6.7 1.2-10.1 1.3-3.4 3.2-6.4 5.7-8.9 2.5-2.5 5.6-4.5 9.3-5.7 3.7-1.2 7.8-1.6 12.2-1.2 4.4.4 8.5 1.6 12.3 3.6 3.8 2 7 4.7 9.5 8.2 2.5 3.5 4.3 7.6 5.5 12.3l16.2-41.7c1.1-2.8 2.7-5.2 4.8-7.2 2.1-2 4.6-3.5 7.5-4.5 2.9-1 6-1.4 9.3-1.2 3.3.2 6.3 1 9 2.5 2.7 1.5 4.9 3.5 6.6 6 1.7 2.5 2.8 5.4 3.3 8.7.5 3.3.1 6.7-1.2 10.1-1.3 3.4-3.2 6.4-5.7 8.9-2.5 2.5-5.6 4.5-9.3 5.7-3.7 1.2-7.8 1.6-12.2 1.2-4.4-.4-8.5-1.6-12.3-3.6-3.8-2-7-4.7-9.5-8.2-2.5-3.5-4.3-7.6-5.5-12.3L75.53 9.35c-.93-2.5-2.6-4.6-4.9-6.2-2.3-1.6-5-2.6-8-2.8-3-.2-6.2.3-9.5 1.6-3.3 1.3-6.2 3.3-8.7 5.9-2.5 2.6-4.4 5.7-5.7 9.2-1.3 3.5-1.8 7.2-1.5 11 .3 3.8 1.3 7.4 3 10.7 1.7 3.3 4 6.1 6.8 8.4 2.8 2.3 6 4 9.7 5 3.7 1 7.6 1.3 11.7.8 4.1-.5 7.9-1.6 11.3-3.3 3.4-1.7 6.3-4 8.6-6.8 2.3-2.8 4-6 5-9.6l16.2-41.7c1.1-2.8 2.7-5.2 4.8-7.2 2.1-2 4.6-3.5 7.5-4.5 2.9-1 6-1.4 9.3-1.2 3.3.2 6.3 1 9 2.5 2.7 1.5 4.9 3.5 6.6 6 1.7 2.5 2.8 5.4 3.3 8.7.5 3.3.1 6.7-1.2 10.1-1.3 3.4-3.2 6.4-5.7 8.9-2.5 2.5-5.6 4.5-9.3 5.7-3.7 1.2-7.8 1.6-12.2 1.2-4.4-.4-8.5-1.6-12.3-3.6-3.8-2-7-4.7-9.5-8.2-2.5-3.5-4.3-7.6-5.5-12.3L75.53 9.35"/>
    </svg>
  ),
  htmlLogo : (
    <svg viewBox="0 0 128 128">
      <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
      <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>
      <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/>
      <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/>
    </svg>
  ),
  cssLogo : (
  <svg viewBox="0 0 128 128">
    <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.118 12.543z"/>
    <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16z"/>
    <path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95z"/>
    <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018z"/>
    <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881z"/>
    <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711zM64.001 51.431v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711z"/>
  </svg>
),
 jsLogo : (
  <svg viewBox="0 0 128 128">
    <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
    <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
  </svg>
)
};


export default function ProjectsPage() {
  const logoArray = Object.values(Logos);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrollY, setScrollY] = useState<number>(0);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const categories: Category[] = [
    { id: 'all', label: 'All Projects'},
    { id: 'web', label: 'Web Development'},
    { id: 'mobile', label: 'Mobile Apps'},
    { id: 'ai', label: 'AI/ML' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Prasthanam Holidays",
      category: "web",
      type: "Travel & Tourism Platform",
      description: "A comprehensive full-stack tour agency website built with modern web technologies, featuring advanced booking systems, customer management, and personalized travel experiences.",
      longDescription: "Prasthanam Holidays represents a complete digital transformation of traditional travel booking. The platform integrates seamlessly with multiple booking engines, offers real-time availability, and provides customers with detailed itineraries, reviews, and personalized recommendations. The admin panel allows efficient management of customer data, bookings, and travel packages.",
      image: "bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-600",
      projectImage: "assets/Pras.png", // Add your actual image path here
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Google Maps API", "Wix"],
      features: [
        "Real-time booking system",
        "Customer management portal",
        "Interactive travel packages",
        "Payment gateway integration",
        "Review and rating system",
        "Mobile-responsive design"
      ],
      results: {
        bookingIncrease: "300%",
        userEngagement: "+250%",
        conversionRate: "12.5%"
      },
      duration: "3 months",
      client: "Prasthanam Holidays",
      year: "2024",
      status: "Live",
      liveUrl: "https://prasthanamholidays.com",
      testimonial: {
        text: "ZyFlux transformed our travel business with an amazing website that increased our bookings by 300%.",
        author: "Rajesh Kumar",
        position: "Founder, Prasthanam Holidays"
      }
    },
    {
      id: 2,
      title: "SparksFly Dating App",
      category: "mobile",
      type: "Social & Dating Platform",
      description: "A modern dating application with advanced matching algorithms, real-time messaging, and intuitive user experience designed to create meaningful connections.",
      longDescription: "SparksFly revolutionizes online dating with sophisticated AI-powered matching algorithms that go beyond surface-level preferences. The app focuses on compatibility, personality matching, and shared interests to foster genuine connections. Features include video profiles, advanced filters, and safety-first design principles.",
      image: "bg-gradient-to-br from-pink-600 via-red-500 to-rose-600",
      projectImage: "assets/Sparksflay wix.jpg", // Add your actual image path here
      technologies: ["Flutter", "Firebase", "Node.js", "TensorFlow", "Socket.io", "Google Cloud"],
      features: [
        "AI-powered matching algorithm",
        "Video profile creation",
        "Real-time messaging",
        "Advanced safety features",
        "Personality-based matching",
        "Cross-platform compatibility"
      ],
      results: {
        userRetention: "85%",
        matchSuccessRate: "68%",
        activeUsers: "10K+"
      },
      duration: "4 months",
      client: "SparksFly Inc.",
      year: "2024",
      status: "Live",
      appStoreUrl: "https://apps.apple.com/sparksfly",
      playStoreUrl: "https://play.google.com/store/apps/sparksfly",
      testimonial: {
        text: "The dating app they built for us is intuitive, engaging, and has great user retention.",
        author: "Mike Chen",
        position: "CEO, SparksFly"
      }
    },
    {
      id: 3,
      title: "Smart Accessibility Device",
      category: "ai",
      type: "Healthcare & Assistive Technology",
      description: "An innovative AI-powered navigation assistance device for visually impaired users, integrating cutting-edge technology for enhanced mobility and independence.",
      longDescription: "This groundbreaking smart device redefines accessibility for the visually impaired community. Using advanced computer vision, machine learning, and sensor fusion, it provides real-time navigation assistance, object recognition, and environmental awareness. The device offers voice-guided navigation, obstacle detection, and integration with smart city infrastructure.",
      image: "bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600",
      projectImage: "assets/SMart Solution-1.jpg", // Add your actual image path here
      technologies: ["Python", "TensorFlow", "OpenCV", "Raspberry Pi", "IoT Sensors", "Voice Recognition"],
      features: [
        "Real-time object recognition",
        "Voice-guided navigation",
        "Obstacle detection system",
        "Smart city integration",
        "Wearable design",
        "Long battery life"
      ],
      results: {
        accuracyRate: "94%",
        batteryLife: "12 hours",
        userSatisfaction: "96%"
      },
      duration: "6 months",
      client: "Smart Solutions",
      year: "2024",
      status: "Prototype",
      testimonial: {
        text: "Their innovative approach to our accessibility device project exceeded all expectations.",
        author: "Sarah Johnson",
        position: "Director, Smart Solutions"
      }
    },
    {
      id: 4,
      title: "Illuzn Dating Platform",
      category: "mobile",
      type: "Premium Dating Experience",
      description: "A sophisticated dating platform that brings mystery and authenticity to modern dating, featuring unique interaction mechanisms and premium user experiences.",
      longDescription: "Illuzn transforms the dating landscape with its unique approach to connection-building. The platform introduces mystery elements, gamification, and premium interaction features that encourage genuine conversations and meaningful relationships. Advanced privacy controls and verification systems ensure a safe, authentic environment.",
      image: "bg-gradient-to-br from-purple-600 via-violet-500 to-indigo-600",
      projectImage: "assets/Illuzn wix.jpg", // Add your actual image path here
      technologies: ["React Native", "GraphQL", "PostgreSQL", "Redis", "AWS", "Machine Learning"],
      features: [
        "Mystery interaction system",
        "Premium user verification",
        "Gamified user experience",
        "Advanced privacy controls",
        "AI-curated matches",
        "Video chat integration"
      ],
      results: {
        premiumConversion: "23%",
        engagementRate: "+180%",
        userGrowth: "150%"
      },
      duration: "5 months",
      client: "Illuzn Technologies",
      year: "2024",
      status: "Live",
      testimonial: {
        text: "Illuzn's unique approach to dating has created a truly premium experience for our users.",
        author: "Alex Rivera",
        position: "Product Manager, Illuzn"
      }
    },
    {
      id: 5,
      title: "YouShare – Social Media Web App",
      category: "web",
      type: "Media Sharing Platform",
      description: "A dynamic web application for discovering, saving, and sharing visual content, with personalized boards and a modern UI.",
      longDescription: "YouShare is a Pinterest-style platform where users can explore visual content, organize them into personalized boards, and share them with others. The platform includes user authentication, content discovery through tags and categories, and AI-powered recommendations based on user behavior.",
      image: "bg-gradient-to-br from-yellow-500 via-orange-400 to-pink-500",
      projectImage: "assets/YouS.png", // Add your actual image path here
      technologies: ["ReactJS", "Tailwind CSS", "Sanity", "JavaScript", "HTML", "CSS"],
      features: [
        "Customizable visual boards",
        "User account management",
        "Tag-based search and filtering",
        "Personalized recommendations",
        "Responsive design",
        "Content sharing and saving"
      ],
      results: {
        dailyUsers: "3K+",
        avgSessionTime: "8.2 min",
        contentShared: "150K+"
      },
      duration: "3 months",
      client: "Internal Product",
      year: "2024",
      status: "Live",
      testimonial: {
        text: "YouShare is intuitive and smooth—our users love the minimal interface and seamless experience.",
        author: "Team ZyFlux",
        position: "Product Team"
      }
    },
    {
      id: 6,
      title: "Image Compressor App",
      category: "desktop",
      type: "Image Optimization Tool",
      description: "A cross-platform image compressor that reduces file size while preserving quality, designed for designers and developers.",
      longDescription: "Built for creators, this desktop application allows bulk image compression with support for multiple formats and quality control sliders. It delivers high-performance compression while ensuring image fidelity, optimized for web and mobile assets.",
      image: "bg-gradient-to-br from-gray-600 via-slate-500 to-neutral-500",
      projectImage: "assets/Image Compressor.jpg", // Add your actual image path here
      technologies: ["Python", "Kivy", "Tkinter", "Swift", "Pillow", "Sharp"],
      features: [
        "Cross-platform (Windows & macOS)",
        "Bulk compression",
        "Format conversion",
        "Drag-and-drop interface",
        "Custom compression level",
        "Offline capability"
      ],
      results: {
        avgCompression: "72%",
        installs: "5K+",
        feedbackRating: "4.8/5"
      },
      duration: "2 months",
      client: "Open Source",
      year: "2023",
      status: "Live",
      testimonial: {
        text: "The best image compression tool I've used. Fast and easy!",
        author: "Amit Roy",
        position: "UI/UX Designer"
      }
    },
    {
      id: 7,
      title: "Namma Pondy Delivery App",
      category: "mobile",
      type: "Food Delivery Platform",
      description: "A local food delivery solution connecting users in Pondicherry to home chefs and restaurants through a modern mobile app.",
      longDescription: "Namma Pondy is designed to promote local culinary talent by enabling home chefs and restaurants to reach customers. It offers real-time order tracking, secure payment, customer reviews, and partner dashboard for vendors. The app is optimized for local languages and lightweight for fast performance.",
      image: "bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500",
      projectImage: "assets/App ss.jpg", // Add your actual image path here
      technologies: ["Flutter", "Flutterflow", "Dart", "Firebase", "Stripe"],
      features: [
        "Live order tracking",
        "Secure online payment",
        "Vendor dashboard",
        "Multi-language support",
        "Rating & review system",
        "Push notifications"
      ],
      results: {
        vendorOnboarded: "120+",
        ordersDelivered: "30K+",
        appRating: "4.7/5"
      },
      duration: "4 months",
      client: "Namma Pondy",
      year: "2023",
      status: "Live",
      testimonial: {
        text: "ZyFlux built us a clean, fast food app that locals love to use daily.",
        author: "Sundar Raj",
        position: "Founder, Namma Pondy"
      }
    },
    {
      id: 8,
      title: "Metoospace Hotel Booking App",
      category: "mobile",
      type: "Hospitality Booking Platform",
      description: "An app offering seamless and personalized hotel booking experiences for domestic and international travelers.",
      longDescription: "Metoospace simplifies hotel discovery and booking with filters for location, ratings, budget, and amenities. It supports secure booking, real-time availability sync, user reviews, and calendar integrations. The app also integrates promotional campaigns and discounts.",
      image: "bg-gradient-to-br from-sky-600 via-blue-500 to-indigo-600",
      projectImage: "assets/MetooSpace Wix.jpg", // Add your actual image path here
      technologies: ["FlutterFlow", "Firebase", "Dart", "Flutter"],
      features: [
        "Hotel search with smart filters",
        "Secure room booking",
        "Review and rating system",
        "Real-time availability updates",
        "Promotional coupon system",
        "Trip itinerary sync"
      ],
      results: {
        bookings: "40K+",
        hotelPartners: "300+",
        avgBookingTime: "2.5 min"
      },
      duration: "5 months",
      client: "Metoospace Inc.",
      year: "2024",
      status: "Live",
      testimonial: {
        text: "Booking hotels is now a breeze with Metoospace—thanks to ZyFlux for the smooth design and flawless execution.",
        author: "Anjali Nair",
        position: "Operations Manager"
      }
    }
  ];
  
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Excellence",
      description: "20+ successful projects delivered with exceptional quality and measurable business impact"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Partnership",
      description: "Long-term relationships built on trust, transparency, and collaborative success"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Focused",
      description: "Every project designed to achieve specific business objectives and ROI targets"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description: "Consistent on-time project completion with agile development methodologies"
    }
  ];

  const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
    <div
      className="group bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 transform hover:scale-105"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.projectImage} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
            project.status === 'Live' 
              ? 'bg-white/90 text-black' 
              : 'bg-gray-800/90 text-white'
          }`}>
            {project.status}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className={`w-12 h-12 ${project.image} rounded-lg flex items-center justify-center`}>
            <Building className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Project Header */}
      <div className="p-8 pb-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-gray-400">{project.type}</p>
          </div>
        </div>

        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

        {/* Key Results */}
        <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-black/50 rounded-xl">
          {Object.entries(project.results).slice(0, 3).map(([key, value], idx) => (
            <div key={idx} className="text-center">
              <div className="text-xl font-bold text-white mb-1">{value}</div>
              <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="px-8 mb-6">
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span key={idx} className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-gray-600/20 text-gray-300 px-3 py-1 rounded-full text-sm">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Action Area */}
      <div className="px-8 pb-8">
        <div className="flex gap-3">
          <button
            onClick={() => setSelectedProject(project)}
            className="flex-1 bg-white text-black px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-gray-200 flex items-center justify-center gap-2"
          >
            View Case Study
            <ArrowRight className="w-4 h-4" />
          </button>
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-6 py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full"
              style={{
                backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-white">Project</span>
            <span className="block text-[#4ab9a9]">Portfolio</span>
            <span className="block text-white">Excellence</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover how we&apos;sve transformed businesses through innovative digital solutions,
            strategic development, and cutting-edge technology implementations.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/contact#contact-form">
              <button className="group border border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Start Your Project
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Desktop Categories */}
            <div className="hidden md:flex items-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-white text-black'
                      : 'border border-white text-white hover:bg-white hover:text-black'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Mobile Filter */}
            <div className="md:hidden w-full">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full border border-white text-white px-6 py-3 rounded-full flex items-center justify-between"
              >
                <span>Filter Projects</span>
                <Filter className="w-4 h-4" />
              </button>

              {isFilterOpen && (
                <div className="absolute top-full left-4 right-4 bg-gray-900 border border-gray-700 rounded-xl mt-2 p-4 z-50">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-white text-black'
                          : 'text-white hover:bg-gray-800'
                      }`}
                    >
                      {category.label} 
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="text-gray-400 text-sm">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">
              Why Choose <span className="text-[#4ab9a9]">Our Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We combine technical excellence with strategic thinking to deliver
              projects that not only meet requirements but exceed business expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="group bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-white mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">
              Technology <span className="text-[#4ab9a9]">Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies and proven frameworks to build
              scalable, performant, and future-ready digital solutions.
            </p>
          </div>
          <Marquee speed={35} direction="right" className="mt-6">
            {logoArray.reverse().map((Logo, index) => (
              <div
                key={`second-${index}`}
                className="mx-6 sm:mx-8 flex items-center justify-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  {Logo}
                </div>
              </div>
            ))}
          </Marquee>

        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative p-8 pb-6 border-b border-gray-800">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 ${selectedProject.image} rounded-xl flex items-center justify-center`}>
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">{selectedProject.title}</h2>
                  <p className="text-gray-400 text-lg">{selectedProject.type}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-white mb-6">Project Overview</h3>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">{selectedProject.longDescription}</p>

                  <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                        <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="bg-black/50 rounded-xl p-6 mb-6">
                    <h4 className="text-xl font-semibold text-white mb-6">Project Details</h4>
                    <div className="space-y-4">
                      <div>
                        <span className="text-gray-400 text-sm">Client:</span>
                        <p className="text-white font-semibold">{selectedProject.client}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Duration:</span>
                        <p className="text-white font-semibold">{selectedProject.duration}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Year:</span>
                        <p className="text-white font-semibold">{selectedProject.year}</p>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Status:</span>
                        <p className={`font-semibold ${selectedProject.status === 'Live' ? 'text-white' : 'text-gray-300'
                          }`}>{selectedProject.status}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/50 rounded-xl p-6">
                    <h4 className="text-xl font-semibold text-white mb-6">Results Achieved</h4>
                    <div className="space-y-4">
                      {Object.entries(selectedProject.results).map(([key, value], idx) => (
                        <div key={idx}>
                          <span className="text-gray-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                          <p className="text-white font-bold text-lg">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-6">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {selectedProject.testimonial && (
                <div className="bg-gradient-to-r from-gray-900/50 to-black/50 border border-gray-700 rounded-xl p-8 mb-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic text-lg mb-6 leading-relaxed">{selectedProject.testimonial.text}</p>
                  <div>
                    <p className="text-white font-bold text-lg">{selectedProject.testimonial.author}</p>
                    <p className="text-gray-400">{selectedProject.testimonial.position}</p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {selectedProject.liveUrl && (
                  <Link
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-600 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Live Project
                  </Link>
                )}
                <Link
                  href="/contact"
                  className="border border-gray-600 hover:border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2"
                >
                  Start Similar Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}


      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
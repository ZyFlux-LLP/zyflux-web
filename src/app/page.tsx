'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import {
  ArrowRight, Play, MessageCircle, Smartphone, TrendingUp, Users, Award, Star, CheckCircle, ChevronDown, Globe, Code, BarChart, ChevronLeft, ChevronRight, Lightbulb,
  Brain,
  Image as ImageIcon,
  PenTool,
} from 'lucide-react';
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"
import Link from 'next/link';

export default function ZyFluxHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselSlides = [
    {
      ctaLink: "/projects/",
      title: "Dainik Nirnayak – Smart Newspaper Management System",
      subtitle: "Transforming Traditional Newspaper Operations with Digital Automation",
      description: "Digitized entire newspaper production and advertisement billing workflow with custom web-based application. Managed editorial uploads, real-time approval flows, PDF generation, client billing, and GST-based invoicing in a centralized dashboard.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=600&fit=crop&auto=format",
      stats: { metric1: "10 Days", label1: "Early Delivery", metric2: "100%", label2: "Workflow Automation" },
      technologies: ["ReactJS", "Firebase", "PDF Generation", "GST Integration"],
      cta: "View Case Study"
    },
    {
      ctaLink: "/projects/",
      title: "Sparksfly",
      subtitle: "Igniting New Connections – A Modern Dating Experience",
      description: "User-centric dating application facilitating genuine connections through interactive, secure interfaces. Features swipe-based matching with deeper compatibility insights, real-time chat, and personalized algorithms.",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1200&h=600&fit=crop&auto=format",
      stats: { metric1: "6 Weeks", label1: "Delivery Time", metric2: "Real-time", label2: "Chat & Matching" },
      technologies: ["FlutterFlow", "Firebase", "Dart", "Real-time Sync"],
      cta: "Explore Project"
    },
    {
      ctaLink: "/projects/",
      title: "Iluzn",
      subtitle: "A Safe Space to Meet, Chat & Connect",
      description: "Privacy-focused dating application emphasizing user safety and authentic connections. Features identity verification, secure chat system, in-app reporting, and user moderation tools for responsible interaction.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=600&fit=crop&auto=format",
      stats: { metric1: "6 Weeks", label1: "Delivery Time", metric2: "Multi-layer", label2: "Authentication" },
      technologies: ["FlutterFlow", "Firebase", "Identity Verification", "Security"],
      cta: "Learn More"
    },
    {
      ctaLink: "/projects/",
      title: "Prathanam Holidays",
      subtitle: "Wander, Explore & Book with Ease",
      description: "Visually rich travel & tourism website showcasing curated packages and destination guides. Built with SEO optimization, dynamic package listings, and easy content management for hassle-free tour bookings.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop&auto=format",
      stats: { metric1: "3 Weeks", label1: "Delivery Time", metric2: "SEO", label2: "Optimized" },
      technologies: ["Wix Studios", "SEO", "CMS", "Lead Generation"],
      cta: "View Project"
    },
    {
      ctaLink: "/projects/",

      title: "Namma Pondy",
      subtitle: "Hyperlocal Food Delivery, Reimagined",
      description: "Location-based food delivery application connecting users with local eateries in Pondicherry. Features geo-location restaurant listings, live delivery tracking, and multi-user role architecture.",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1200&h=600&fit=crop&auto=format",
      stats: { metric1: "8 Weeks", label1: "Delivery Time", metric2: "3 Roles", label2: "User Architecture" },
      technologies: ["FlutterFlow", "Firebase", "Geo-location", "Real-time Tracking"],
      cta: "Explore App"
    },
    {
      ctaLink: "/projects/",
      title: "MissCallPay (Biz & Ind)",
      subtitle: "UPI on Voice – Simplified Merchant Transactions",
      description: "Voice-enabled UPI payment application for merchants using missed calls and voice prompts. Designed for accessibility with minimal UI, smart automation, and secure financial transaction compliance.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&auto=format",
      stats: { metric1: "10 Weeks", label1: "Delivery Time", metric2: "Voice", label2: "UPI Integration" },
      technologies: ["Flutter", "Firebase", "Voice Commands", "UPI Gateway"],
      cta: "View Details"
    },
    {
      ctaLink: "/projects/",
      title: "Metoospace",
      subtitle: "Smart Booking for Smarter Hotels",
      description: "Mobile application for browsing, filtering, and booking hotels across cities. Features real-time room availability, secure booking engine, map-based UI, and comprehensive admin dashboards.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop&auto=format",
      stats: { metric1: "8 Weeks", label1: "Delivery Time", metric2: "Real-time", label2: "Inventory Sync" },
      technologies: ["Flutter", "Firebase", "Payment Integration", "Admin Dashboard"],
      cta: "Learn More"
    },
  ];
  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);


  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "ZyFlux crafts dynamic and responsive websites using no-code platforms like Wix/WordPress and full-stack technologies like HTML, CSS, and JavaScript.",
      features: [
        "Custom Website Design",
        "Wix & WordPress Development",
        "Responsive Layouts",
        "SEO Optimization",
        "Maintenance & Hosting Support"
      ],
      image: "https://images.unsplash.com/photo-1581091870622-2fe09fdd9264?w=400&h=300&fit=crop&auto=format",
      videoSrc: "/assets/Web Dev.webm",
      link: "/services/#web-development"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development",
      description: "ZyFlux builds cross-platform apps using FlutterFlow and Dart, delivering performant and user-friendly apps for startups and enterprises alike.",
      features: [
        "Cross-platform Development",
        "FlutterFlow UI Integration",
        "API Connectivity",
        "Firebase Backend",
        "Store Deployment"
      ],
      image: "https://images.unsplash.com/photo-1614281512486-85fde2e201d9?w=400&h=300&fit=crop&auto=format",
      videoSrc: "/assets/Mobile App.webm",
      link: "/services/#app-development"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description: "ZyFlux delivers intelligent AI solutions powered by modern frameworks—transforming data into smart decisions, automation, and personalized user experiences.",
      features: [
        "Natural Language Processing (NLP)",
        "Computer Vision Applications",
        "AI-Powered Chatbots & Virtual Assistants",
        "Custom AI Model Development",
        "Cloud-Based AI Deployment"
      ],
      image: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f5?w=400&h=300&fit=crop&auto=format",
      videoSrc: "/assets/AI Dev.webm",
      link: "/services/#ai-solutions"
    },
    {
      icon: <ImageIcon className="w-8 h-8" />,
      title: "Graphics & Multimedia",
      description: "ZyFlux delivers compelling branding, visual content, and animations using Adobe Creative Suite, tailored for web, print, and social platforms.",
      features: [
        "Logo & Branding",
        "Static & Motion Graphics",
        "Promotional Videos",
        "Infographics",
        "UI Visual Assets"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&auto=format",
      videoSrc: "/assets/Graphics.webm",
      link: "/services/#graphics-design"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "ZyFlux creates intuitive and elegant interfaces using Figma and Adobe XD, prioritizing seamless user experiences and brand consistency.",
      features: [
        "Wireframes & Mockups",
        "Prototyping",
        "User Flows",
        "Accessibility Design",
        "Design Systems"
      ],
      image: "https://images.unsplash.com/photo-1559027615-8a3b17ae6f62?w=400&h=300&fit=crop&auto=format",
      videoSrc: "/assets/UI_UX.webm",
      link: "/services/#uiux-design"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "From SEO and content to ad campaigns on Google and Meta, ZyFlux delivers tailored strategies that boost visibility and drive conversions.",
      features: [
        "Search Engine Optimization",
        "Meta & Google Ads",
        "Lead Generation",
        "Social Media Campaigns",
        "Content Marketing"
      ],
      image: "https://images.unsplash.com/photo-1556742400-b5df941d2922?w=400&h=300&fit=crop&auto=format",
      videoSrc: "/assets/Digital.webm",
      link: "/services/#digital-marketing"
    },
  ];


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const stats = [
    { number: "20+", label: "Projects Delivered", icon: <Award className="w-6 h-6" /> },
    { number: "15+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "3+", label: "Years Experience", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <MessageCircle className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      author: {
        name: "Dainik Nirnayak",
        handle: "@dainiknirnayak",
        avatar: "https://ui-avatars.com/api/?name=Dainik+Nirnayak&background=random"
      },
      text: "The system has made our day-to-day newspaper production incredibly smooth and efficient. From uploading pages to generating invoices, everything is now just a few clicks away. The team was proactive, responsive, and delivered beyond our expectations. Great job!",
      href: "#"
    },
    {
      author: {
        name: "Consulting Wizz – Sparksfly",
        handle: "@sparksfly",
        avatar: "https://ui-avatars.com/api/?name=Sparksfly&background=random"
      },
      text: "We came in with a vision for a dating app that doesn’t feel like every other. The team brought it to life quickly and efficiently — with minimal bugs and maximum creativity.",
      href: "#"
    },
    {
      author: {
        name: "Consulting Wizz – Iluzn",
        handle: "@iluzn",
        avatar: "https://ui-avatars.com/api/?name=Iluzn&background=random"
      },
      text: "From UI planning to deployment, the journey was incredibly smooth. The team understood the niche requirements and added valuable suggestions throughout.",
      href: "#"
    },
    {
      author: {
        name: "Prathanam Holidays",
        handle: "@prathanamholidays",
        avatar: "https://ui-avatars.com/api/?name=Prathanam+Holidays&background=random"
      },
      text: "We wanted a site that’s both beautiful and functional — and got exactly that. The team made updates easy even after the handover.",
      href: "#"
    },
    {
      author: {
        name: "Namma Pondy",
        handle: "@nammapondy",
        avatar: "https://ui-avatars.com/api/?name=Namma+Pondy&background=random"
      },
      text: "The app turned out exactly how we imagined. We were impressed by the responsiveness and the way the team translated our local vision into a scalable digital product.",
      href: "#"
    },
    {
      author: {
        name: "MissCallPay",
        handle: "@misscallpay",
        avatar: "https://ui-avatars.com/api/?name=MissCallPay&background=random"
      },
      text: "Our app needed to work for users with low tech-literacy — and it does exactly that. The team delivered a thoughtful, functional, and inclusive solution.",
      href: "#"
    },
    {
      author: {
        name: "Metoospace",
        handle: "@metoospace",
        avatar: "https://ui-avatars.com/api/?name=Metoospace&background=random"
      },
      text: "Great design, great backend, and even better support post-deployment. We’re now expanding features thanks to the smooth MVP launch.",
      href: "#"
    }
  ];



  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Comprehensive business analysis, market research, and strategic assessment to understand your unique challenges and opportunities.",
      icon: <Globe className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Creation of tailored business strategies, technology roadmaps, and implementation plans aligned with your goals.",
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Implementation & Execution",
      description: "Expert execution of strategies with project management, quality assurance, and continuous monitoring for optimal results.",
      icon: <Code className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Growth & Optimization",
      description: "Ongoing support, performance optimization, and strategic adjustments to ensure sustained business growth and success.",
      icon: <BarChart className="w-8 h-8" />
    }
  ];
  const handleScroll = () => {
    const el = document.getElementById('next-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Hero Background */}
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

        <div className="relative z-30 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">Revolutionizing your </span>
              <span className="block text-white">business with</span>
              <span className="block">
                <AnimatedTextCycle
                  words={[
                    "SMART TECH",
                    "AI Tech",
                    "Web Tech",
                    "Mobile App",
                    "Digi Tech",
                    "Designing",
                    "UI/UX",
                  ]}
                  interval={3000}
                  className="text-[#4ab9a9] font-semibold"
                />
              </span>
              <span className="block text-white">Solutions</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We partner with ambitious companies to accelerate growth through strategic business development, technology innovation, and operational excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href="/contact"
                className="group bg-white text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-2xl hover:bg-gray-100"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/projects"
                className="group border border-white/30 hover:border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/10 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                View Our Work
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-gray-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm flex items-center justify-center gap-1">
                    {stat.icon}
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleScroll}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30"
        >
          <ChevronDown className="w-6 h-6 text-white/60 cursor-pointer" />
        </button>


      </section>

      {/* Success Stories Carousel - Improved Responsive Version */}
      <section className="py-8 sm:py-12 lg:py-16 bg-black" id='next-section'>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-5">
              Success <span className="text-[#4ab9a9]">Stories</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              Discover how we&apos;ve helped businesses achieve remarkable transformations and sustainable growth
            </p>
          </div>

          <div className="relative">
            {/* Main Carousel Container - Now responsive height */}
            <div className="relative h-[600px] sm:h-[550px] lg:h-[600px] rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden border border-white/10">
              {carouselSlides.map((slide, index) => (
                <div
                  key={index} 
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
                    ? 'opacity-100 transform translate-x-0'
                    : index < currentSlide
                      ? 'opacity-0 transform -translate-x-full'
                      : 'opacity-0 transform translate-x-full'
                    }`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/50 sm:from-black/90 sm:via-black/60 sm:to-black/40"></div>
                  </div>

                  {/* Content - Improved mobile layout */}
                  <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
                        <div className="text-white order-2 lg:order-1">
                          <div className="text-gray-400 text-xs sm:text-sm font-medium mb-1 sm:mb-2 uppercase tracking-wide">
                            {slide.subtitle}
                          </div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-5 leading-tight">
                            {slide.title}
                          </h3>
                          <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                            {slide.description}
                          </p>

                          {/* Technologies - Better mobile wrapping */}
                          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                            {slide.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="bg-white/10 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm border border-white/20 hover:bg-white/20 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <Link
                            href={slide.ctaLink || '/'}
                            className="group bg-white text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-1 hover:bg-gray-100 text-xs sm:text-sm"
                          >
                            {slide.cta}
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>

                        </div>

                        {/* Stats Card - More compact on mobile */}
                        <div className="bg-white/5 backdrop-blur-xl rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-5 lg:p-6 border border-white/10 order-1 lg:order-2">
                          <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="text-center">
                              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                                {slide.stats.metric1}
                              </div>
                              <div className="text-gray-400 text-xs">
                                {slide.stats.label1}
                              </div>
                            </div>
                            <div className="text-center">
                              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                                {slide.stats.metric2}
                              </div>
                              <div className="text-gray-400 text-xs">
                                {slide.stats.label2}
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/20">
                            <div className="text-center text-gray-400 text-xs">
                              Project Impact Metrics
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows - Now visible on small screens with larger touch targets */}
            <button
              onClick={prevSlide}
              className="absolute left-1 sm:left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-1.5 sm:p-2 lg:p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 border border-white/20"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-1 sm:right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-1.5 sm:p-2 lg:p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 border border-white/20"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Slide Indicators - More compact on mobile */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-20">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 border border-white/30 ${index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>

            {/* Progress Bar - Thinner on mobile */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-white/10">
              <div
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / carouselSlides.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="text-[#4ab9a9]">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive business development solutions designed to accelerate growth and drive sustainable success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-white/30 transition-all duration-500 transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Service Video */}
                <div className="relative h-48 overflow-hidden">
                  <div className="relative w-full h-full">
                    <video
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={service.videoSrc} type="video/webm" />
                      {/* Fallback image if video fails to load */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 text-white group-hover:text-gray-300 transition-colors">
                      {service.icon}
                    </div>
                  </div>
                </div>

                <div className="relative z-10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-400">
                        <CheckCircle className="w-4 h-4 text-white" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={service.link}
                    className="text-white hover:text-gray-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className=" text-[#4ab9a9]">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures exceptional results and sustainable business transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-black">
                    {step.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-400 mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection
        title="Trusted by developers worldwide"
        description="Join thousands of developers who are already building the future with our AI platform"
        testimonials={testimonials}
      />

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
      `}</style>
    </div>
  );
}
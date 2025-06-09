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

export default function ZyFluxHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      title: "Enterprise Resource Planning System",
      subtitle: "Streamlining Business Operations",
      description: "Developed a comprehensive ERP solution that integrated all business processes, resulting in 40% operational efficiency improvement and $2M annual cost savings.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop&auto=format",
      stats: { metric1: "40%", label1: "Efficiency Gain", metric2: "$2M", label2: "Annual Savings" },
      technologies: ["Enterprise Architecture", "Cloud Integration", "Data Analytics", "Process Automation"],
      cta: "View Case Study"
    },
    {
      title: "Manufacturing Excellence Program",
      subtitle: "Operational Transformation",
      description: "Led digital transformation initiative for manufacturing company, implementing IoT solutions and smart analytics that increased production capacity by 60%.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop&auto=format",
      stats: { metric1: "60%", label1: "Production Increase", metric2: "25%", label2: "Cost Reduction" },
      technologies: ["IoT Integration", "Smart Analytics", "Lean Manufacturing", "Quality Systems"],
      cta: "Explore Project"
    },
    {
      title: "Retail Chain Expansion Strategy",
      subtitle: "Strategic Growth Initiative",
      description: "Developed comprehensive expansion strategy for retail chain, including market analysis, location optimization, and operational scaling that enabled 300% growth.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop&auto=format",
      stats: { metric1: "300%", label1: "Business Growth", metric2: "50+", label2: "New Locations" },
      technologies: ["Market Analysis", "Location Intelligence", "Operations Scaling", "Brand Strategy"],
      cta: "Learn More"
    },
    {
      title: "Financial Services Innovation",
      subtitle: "Fintech Development",
      description: "Created next-generation banking platform with advanced security and user experience, serving 500,000+ customers with 99.9% uptime reliability.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&auto=format",
      stats: { metric1: "500K+", label1: "Active Users", metric2: "99.9%", label2: "Uptime" },
      technologies: ["Financial Systems", "Security Architecture", "User Experience", "Compliance"],
      cta: "See Demo"
    }
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
    { number: "200+", label: "Projects Delivered", icon: <Award className="w-6 h-6" /> },
    { number: "150+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "8+", label: "Years Experience", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <MessageCircle className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Rajesh Patel",
      company: "CEO, TechCorp Industries",
      text: "ZyFlux transformed our entire business operations. Their strategic approach and technical expertise helped us achieve 250% growth in just 18 months. Exceptional team with outstanding results.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format"
    },
    {
      name: "Priya Sharma",
      company: "Founder, RetailNext",
      text: "The business development strategy from ZyFlux was game-changing. They didn&apos;t just deliver a solution, they delivered a complete transformation that revolutionized our market presence.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b2adc515?w=100&h=100&fit=crop&auto=format"
    },
    {
      name: "Amit Kumar",
      company: "Director, Manufacturing Plus",
      text: "Professional, innovative, and results-driven. ZyFlux understood our challenges and delivered solutions that exceeded our expectations. Their ongoing support is invaluable.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format"
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

      {/* Success Stories Carousel */}
      <section className="py-20 bg-black" id='next-section'>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Success <span className="text-[#4ab9a9]">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how we&apos;ve helped businesses achieve remarkable transformations and sustainable growth
            </p>
          </div>

          <div className="relative">
            {/* Main Carousel Container */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10">
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
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex items-center">
                    <div className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
                      <div className="text-white">
                        <div className="text-gray-400 text-sm font-medium mb-2 uppercase tracking-wide">
                          {slide.subtitle}
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                          {slide.title}
                        </h3>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                          {slide.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-3 mb-8">
                          {slide.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <button className="group bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 hover:bg-gray-100">
                          {slide.cta}
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>

                      {/* Stats Card */}
                      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                        <div className="grid grid-cols-2 gap-6">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">
                              {slide.stats.metric1}
                            </div>
                            <div className="text-gray-400 text-sm">
                              {slide.stats.label1}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-4xl font-bold text-white mb-2">
                              {slide.stats.metric2}
                            </div>
                            <div className="text-gray-400 text-sm">
                              {slide.stats.label2}
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/20">
                          <div className="text-center text-gray-400 text-sm">
                            Project Impact Metrics
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20 border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 border border-white/30 ${index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                    }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
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
              Our <span className=" text-[#4ab9a9]">Services</span>
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

                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 text-white group-hover:text-gray-300 transition-colors">
                    {service.icon}
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
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Client <span className="text-[#4ab9a9]">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear from our satisfied clients who&apos;ve achieved remarkable results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-[#4ab9a9] transition-all duration-300 transform hover:scale-105">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>

                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
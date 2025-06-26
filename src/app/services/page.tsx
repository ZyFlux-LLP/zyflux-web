'use client';
import Link from 'next/link';
import { useState } from 'react';
import {
  Code,
  Smartphone,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Phone,
  Image as ImageIcon,
  PenTool,
  Rocket,
  Users,
  Award,
  Target,
  Clock,
  Shield,
  Brain,
} from 'lucide-react';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  const mainServices = [
    {
      id: 'web-development',
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      subtitle: "Robust and visually stunning websites",
      description: "ZyFlux crafts dynamic and responsive websites using a blend of no-code platforms like Wix/WordPress and full-stack technologies like HTML, CSS, and JavaScript. Their solutions are tailored to business goals and optimized for performance.",
      features: [
        "Custom Website Design",
        "Wix & WordPress Development",
        "Responsive Layouts",
        "SEO Optimization",
        "Maintenance & Hosting Support"
      ],
      video: "/assets/Web Dev.webm" // Assuming this exists for web development
    },
    {
      id: 'app-development',
      icon: <Smartphone className="w-12 h-12" />,
      title: "App Development",
      subtitle: "Cross-platform apps for iOS & Android",
      description: "ZyFlux builds cross-platform applications using FlutterFlow and Dart. Their apps are user-centric, high-performing, and tailored to client needs for both startups and enterprises.",
      features: [
        "Cross-platform Development",
        "FlutterFlow UI Integration",
        "API Connectivity",
        "Firebase Backend",
        "App Store & Play Store Deployment"
      ],
      video: "/assets/Mobile App.webm"
    },
    {
      id: "ai-solutions",
      icon: <Brain className="w-12 h-12" />,
      title: "AI Solutions",
      subtitle: "AI solutions powered by data",
      description:
        "ZyFlux develops and deploys ML models tailored to client needs. Using Python, TensorFlow, PyTorch, and tools like AWS, Docker, and MLflow, they turn raw data into actionable insights.",
      features: [
        "Custom ML Model Development",
        "Data Collection & Cleaning",
        "Model Training & Evaluation",
        "Deployment on Cloud Platforms",
        "Performance Monitoring"
      ],
      video: "/assets/AI Dev.webm"
    },
    {
      id: 'graphics-design',
      icon: <ImageIcon className="w-12 h-12" />,
      title: "Graphics & Multimedia",
      subtitle: "Creative visuals & animations",
      description: "With Adobe Creative Suite at the core, ZyFlux delivers compelling designs, animations, and visual content that help businesses stand out in digital and print media.",
      features: [
        "Logo & Branding",
        "Static & Motion Graphics",
        "Promotional Videos",
        "Infographics",
        "UI Visual Assets"
      ],
      video: "/assets/Graphics.webm"
    },
    {
      id: 'uiux-design',
      icon: <PenTool className="w-12 h-12" />,
      title: "UI/UX Design",
      subtitle: "Human-centered digital interfaces",
      description: "ZyFlux creates intuitive and elegant interfaces with a strong focus on user experience. They use Figma and Adobe XD to craft designs that align with user behavior and brand identity.",
      features: [
        "Wireframes & Mockups",
        "Prototyping",
        "User Flows",
        "Accessibility Design",
        "Design Systems"
      ],
      video: "/assets/UI_UX.webm"
    },
    {
      id: 'digital-marketing',
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      subtitle: "SEO, Ads & lead generation",
      description: "From SEO and content marketing to ad campaigns on Google and Meta, ZyFlux drives visibility and conversions for brands using tailored, data-backed strategies.",
      features: [
        "Search Engine Optimization",
        "Meta & Google Ads",
        "Lead Generation",
        "Social Media Campaigns",
        "Content Marketing"
      ],
      video: "/assets/Digital.webm"
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Expertise",
      description: "5+ years of proven success across diverse industries with 200+ projects delivered"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric Approach",
      description: "Dedicated to building long-term partnerships with personalized solutions"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovation Focus",
      description: "Leveraging cutting-edge technology and methodologies for competitive advantage"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality control and testing processes ensure exceptional results"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Execution",
      description: "Committed to meeting deadlines while maintaining the highest quality standards"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Focused on measurable outcomes that directly impact your business success"
    }
  ];

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
            <span className="block text-white">Business</span>
            <span className="block text-[#4ab9a9]">Development</span>
            <span className="block text-white">Excellence</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transforming businesses through strategic innovation, cutting-edge technology,
            and data-driven solutions that deliver measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/contact#contact-form">
              <button className="group border border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule Consultation
              </button>
            </Link>
          </div>

          {/* Service Cards Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setActiveService(index)}
              >
                <div
                  className={`flex flex-col justify-between h-full bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:border-white/30 ${activeService === index ? 'scale-105 border-white/30' : ''
                    }`}
                >
                  {/* Icon + Title in same row */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-white">{service.icon}</div>
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  </div>

                  {/* Subtitle */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.subtitle}</p>

                  {/* Learn More Link */}
                  <Link
                    href={`#${service.id}`}
                    className="flex items-center text-gray-400 text-sm group-hover:text-white transition-colors mt-auto"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      {mainServices.map((service, index) => (
        <section key={service.id} id={service.id} className={`py-24 ${index % 2 === 0 ? 'bg-gray-950' : 'bg-black'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-white">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-2">{service.title}</h2>
                    <p className="text-gray-400 text-lg">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Core Services</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-900/50 transition-colors">
                        <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact#contact-form"
                    className="group bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-gray-200 flex items-center justify-center gap-2"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Visual with Video */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative">
                  <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-8 h-[500px] flex flex-col justify-center items-center relative overflow-hidden border border-gray-800">
                    <div className="absolute inset-0 opacity-5">
                      <div className="h-full w-full"
                        style={{
                          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                          backgroundSize: '30px 30px'
                        }}>
                      </div>
                    </div>

                    <div className="relative z-10 w-full h-full flex flex-col justify-center items-center">
                      {/* Video Container */}
                      <div className="w-full max-w-md h-80 mb-6 rounded-xl overflow-hidden border border-gray-700 bg-gray-900">
                        <video 
                          className="w-full h-full object-cover"
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                        >
                          <source src={service.video} type="video/webm" />
                          Your browser does not support the video tag.
                        </video>
                      </div>

                      {/* Service Info */}
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">
              Why Choose <span className="text-[#4ab9a9]">ZyFlux</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We combine deep industry expertise with innovative technology solutions
              to deliver exceptional business outcomes that drive sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="group bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-white mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
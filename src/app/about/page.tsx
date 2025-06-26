'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Users, Target, Award, Lightbulb, Calendar, Phone } from 'lucide-react';
import Link from 'next/link';
import { TestimonialsSection } from '@/components/blocks/testimonials-with-marquee';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const stats = [
    { number: "3+", label: "Years of Experience", icon: <Calendar className="w-6 h-6" /> },
    { number: "15+", label: "Trusted Clients", icon: <Users className="w-6 h-6" /> },
    { number: "20+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Target className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to stay ahead of the digital curve.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships through transparent communication and results.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "We deliver premium solutions that exceed expectations and drive measurable business growth.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Continuous Growth",
      description: "We constantly evolve our skills and methodologies to provide the best possible outcomes.",
      color: "from-purple-400 to-pink-500"
    }
  ];


  const clientLogos = [
    { name: "Consulting Wiz", logo: "assets/project-1.png" },
    { name: "Prasthanam Holidays", logo: "assets/project-2.png" },
    { name: "Dainik Nirnayak", logo: "assets/project-3.png" },
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
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            ></div>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-white">About</span>
            <span className="block text-[#4ab9a9]">ZyFlux</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-white">Empowering Your Business Journey</span> through innovative digital solutions, creative excellence, and strategic partnerships.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/contact#contact-form">
              <button className="group bg-white text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gray-200 flex items-center gap-2">
                Let&apos;s Work Together
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link href="/contact#GetInTouch">
              <button className="group border border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Get In Touch
              </button>
            </Link>
          </div>

          {/* Icon stats section */}
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🚀", label: "Innovation Driven" },
              { icon: "🎯", label: "Result Focused" },
              { icon: "⚡", label: "Quality First" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-white mb-1">{item.icon}</div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="p-6 bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-gray-800 group-hover:border-white/30 transition-all transform group-hover:scale-105">
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8 text-center">
              Our <span className="text-[#4ab9a9]">Journey</span>
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
              <p>
                Zyflux was born out of the shared ambition of four engineering graduates driven by a deep passion for technology and a desire to empower businesses in a digital-first world. What began as a close-knit collaboration has grown into a dedicated IT solutions firm built on experience, innovation, and trust. From our early days of delivering quality solutions through offline referrals and word-of-mouth, we&apos;ve steadily built a reputation for reliability and excellence.
              </p>
              <p>
                To become a leading provider of innovative IT solutions that empower businesses to thrive in a rapidly evolving digital world.
                To bridge the gap between technology and business, offering accessible, cutting-edge services that drive measurable success for startups and established companies alike.
                To continuously evolve and adapt our offerings, staying ahead of industry trends and technological advancements to ensure clients are always at the forefront of their respective markets.
                To create a collaborative environment where businesses can rely on us as a trusted partner, enabling them to scale and succeed in an increasingly digital and competitive landscape.
                To build a global presence, expanding our reach through online platforms while maintaining the personalized, high-quality service that has defined our success.
                To be recognized for our commitment to innovation, customer satisfaction, and delivering solutions that make a lasting impact on the growth and success of our clients.
              </p>
              <p>
                From creating stunning websites for travel agencies like Prasthanam Holidays to developing cutting-edge dating applications like SparksFly and accessibility solutions for the visually impaired, our journey has been marked by innovation, creativity, and measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Values Section */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">
              Our <span className="text-[#4ab9a9]">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The principles that guide our work and define our culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 h-full hover:border-white/30 transition-all duration-300 transform hover:scale-105">
                  <div className="text-white mb-6">
                    {value.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">
              Trusted by <span className="text-[#4ab9a9]">Amazing Clients</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Companies that have chosen ZyFlux for their digital transformation
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {clientLogos.map((client, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-12 lg:p-16 hover:border-white/30 transition-all duration-300 border border-gray-800 hover:scale-105 transform min-h-[200px] lg:min-h-[240px] flex flex-col justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={300}
                      height={150}
                      className="w-full h-20 lg:h-50 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection
        title="Trusted by developers worldwide"
        description="Join thousands of developers who are already building the future with our AI platform"
        testimonials={testimonials}
      />
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, Users, Target, Award, Lightbulb, Quote, Star, Calendar, Phone } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const stats = [
    { number: "3+", label: "Years of Experience", icon: <Calendar className="w-6 h-6" /> },
    { number: "50+", label: "Trusted Clients", icon: <Users className="w-6 h-6" /> },
    { number: "100+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
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
    { name: "Consulting Wiz", logo: "/api/placeholder/150/80" },
    { name: "Prasthanam Holidays", logo: "/api/placeholder/150/80" },
    { name: "Dainik Nirnayak", logo: "/api/placeholder/150/80" },
    { name: "Smart Solutions", logo: "/api/placeholder/150/80" },
    { name: "SparksFly", logo: "/api/placeholder/150/80" },
    { name: "Illuzn", logo: "/api/placeholder/150/80" }
  ];

  const testimonials = [
    {
      text: "ZyFlux transformed our travel business with an amazing website that increased our bookings by 300%. Their team understood our vision perfectly.",
      author: "Rajesh Kumar",
      company: "Prasthanam Holidays",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      text: "The smart device project exceeded all expectations. Their innovative approach to accessibility technology is truly remarkable.",
      author: "Dr. Sarah Johnson",
      company: "Smart Solutions",
      rating: 5,
      image: "/api/placeholder/60/60"
    },
    {
      text: "Working with ZyFlux on our dating app was incredible. The user experience is intuitive and our retention rates have improved significantly.",
      author: "Mike Chen",
      company: "SparksFly",
      rating: 5,
      image: "/api/placeholder/60/60"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                <span className="block text-white">About</span>
                <span className="block text-[#4ab9a9]">ZyFlux</span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 mb-12 leading-relaxed">
                <span className="font-semibold text-white">Empowering Your Business Journey</span> through innovative digital solutions, creative excellence, and strategic partnerships.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">

                <Link href="/contact#contact-form">
                  <button className="group bg-white text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gray-200 flex items-center justify-center gap-2">
                    Let&apos;s Work Together
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>


                <Link href="/contact#GetInTouch">
                  <button className="group border border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Get In Touch
                  </button>
                </Link>


              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">🚀</div>
                  <div className="text-sm text-gray-400">Innovation Driven</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">🎯</div>
                  <div className="text-sm text-gray-400">Result Focused</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">⚡</div>
                  <div className="text-sm text-gray-400">Quality First</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-2xl p-8 border border-gray-800">
                <Image
                  src="/assets/team.png"
                  alt="ZyFlux Team"
                  width={500}
                  height={400}
                  className="rounded-xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-white text-black rounded-2xl p-6 shadow-2xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">3+</div>
                    <div className="text-sm">Years Strong</div>
                  </div>
                </div>
              </div>
            </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">
                Our <span className=" text-[#4ab9a9]">Journey</span>
              </h2>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
                <p>
                  Zyflux was born out of the shared ambition of four engineering graduates driven by a deep passion for technology and a desire to empower businesses in a digital-first world. What began as a close-knit collaboration has grown into a dedicated IT solutions firm built on experience, innovation, and trust. From our early days of delivering quality solutions through offline referrals and word-of-mouth, we&apos;ve steadily built a reputation for reliability and excellence.

                </p>
                <p>
                  We started as a small team of passionate developers and designers who believed that every business deserves a remarkable digital presence. Today, we&apos;ve grown into a comprehensive digital agency that has helped over 50 clients achieve their goals.
                </p>
                <p>
                  From creating stunning websites for travel agencies like Prasthanam Holidays to developing cutting-edge dating applications like SparksFly and accessibility solutions for the visually impaired, our journey has been marked by innovation, creativity, and measurable results.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-white/30 transition-all">
                  <h3 className="text-white font-bold text-lg mb-3">Our <span className='text-[#4ab9a9]'>Mission</span></h3>
                  <p className="text-gray-400 leading-relaxed">To empower businesses with innovative digital solutions that drive growth and create lasting impact.</p>
                </div>
                <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-6 hover:border-white/30 transition-all">
                  <h3 className="text-white font-bold text-lg mb-3">Our <span className='text-[#4ab9a9]'>Vision</span></h3>
                  <p className="text-gray-400 leading-relaxed">To be the leading digital transformation partner for businesses worldwide.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-2 border border-gray-800">
                <Image
                  src="/api/placeholder/600/500" // Replace this with your actual image path
                  alt="Our Journey"
                  width={600}
                  height={500}
                  className="rounded-xl w-full h-auto"
                />
              </div>
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-6 hover:border-white/30 transition-all duration-300 border border-gray-800 hover:scale-105 transform">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={60}
                    className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">
              What Clients <span className="text-[#4ab9a9]">Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Real feedback from businesses we&apos;ve helped transform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                   <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="mb-8">
                  <Quote className="w-8 h-8 text-white mb-4" />
                  <p className="text-gray-300 italic leading-relaxed text-lg">&ldquo;{testimonial.text}&rdquo;</p>
                </div>

                <div className="flex items-center gap-4 border-t border-gray-700 pt-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.author}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
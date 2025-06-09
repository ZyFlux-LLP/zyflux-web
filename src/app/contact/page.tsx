'use client';
import emailjs from 'emailjs-com';
import { ChevronDown } from "lucide-react";
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
  Zap,
  Target,
  Star,Facebook, Linkedin, Instagram, Github 
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  timeline: string;
}

interface ContactMethod {
  icon: React.ReactElement;
  title: string;
  description: string;
  contact: string;
  action: string | (() => void);
  color: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const templateParams = {
      message: `📩 New Contact Form Submission
  
  👤 Name: ${formData.name}
  📧 Email: ${formData.email}
  📱 Phone: ${formData.phone}
  🏢 Company: ${formData.company}
  🛠️ Service: ${formData.service}
  💰 Budget: ${formData.budget}
  📆 Timeline: ${formData.timeline}
  📝 Message: ${formData.message}
  
  Please respond at your earliest convenience.`,
    };

    try {
      await emailjs.send(
        'service_zs4a6ew',     // 👉 Replace with your actual EmailJS service ID
        'template_zkhc4v8',    // 👉 Replace with your actual EmailJS template ID
        templateParams,
        '2EUKFVDaeA-npvkX2'      // 👉 Replace with your actual EmailJS public key
      );

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        timeline: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const CALENDLY_URL = "https://cal.com/zyflux/30min";
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setIsCalendlyLoaded(true);
    document.head.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      // Cleanup: remove script and link elements
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      const existingLink = document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]');
      if (existingScript) existingScript.remove();
      if (existingLink) existingLink.remove();
    };
  }, []);

  const handleScheduleMeeting = () => {
    if (isCalendlyLoaded && window.Calendly) {
      // Open Calendly popup widget
      window.Calendly.initPopupWidget({
        url: CALENDLY_URL,
        utm: {
          utmCampaign: "Website Button",
          utmSource: "Navbar",
          utmMedium: "website",
        },
        prefill: {
          // You can prefill user data if available
          // name: "John Doe",
          // email: "john@example.com",
        },
        text: "Schedule time with me",
        color: "#9333ea", // Purple color to match your theme
        textColor: "#ffffff",
        branding: true,
      });
    } else {
      // Fallback: redirect to Calendly page
      window.open(CALENDLY_URL, "_blank");
    }
  };


  const contactMethods: ContactMethod[] = [
    {
      icon: <Facebook className="w-6 h-6" />,
      title: "Facebook",
      description: "Follow us on Facebook",
      contact: "/zyflux",
      action: "https://facebook.com/zyflux",
      color: "from-blue-700 to-blue-500",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      description: "Connect on LinkedIn",
      contact: "/company/zyflux",
      action: "https://linkedin.com/company/zyflux",
      color: "from-sky-700 to-blue-600",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      description: "See our latest work",
      contact: "@zyflux.in",
      action: "https://instagram.com/zyflux.in",
      color: "from-pink-500 to-yellow-500",
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      description: "Browse our codebase",
      contact: "@zyflux",
      action: "https://github.com/zyflux",
      color: "from-gray-700 to-black",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "Get a response within 2 hours",
      contact: "info@zyflux.in",
      action: "mailto:info@zyflux.in",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Mon-Sat, 9AM-8PM IST",
      contact: "+91 9867787160",
      action: "tel:+919867787160",
      color: "from-green-600 to-teal-600",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Quick responses guaranteed",
      contact: "Chat with us",
      action: "https://wa.me/919867787160",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      description: "Schedule an appointment",
      contact: "H-3/1001 Valley Shilp CHS, Kharghar, Navi Mumbai 410210",
      action: handleScheduleMeeting,
      color: "from-purple-600 to-pink-600",
    },
   
  ];
  

  const services: string[] = [
    "Web Development",
    "App Development",
    "Digital Marketing",
    "Brand Identity & Design",
    "E-commerce Solutions",
    "UI/UX Design",
    "SEO & SEM",
    "Social Media Marketing",
    "Other"
  ];

  const budgetRanges: string[] = [
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹2,00,000",
    "₹2,00,000 - ₹5,00,000",
    "₹5,00,000+",
    "Let's discuss"
  ];

  const timelines: string[] = [
    "ASAP (Rush Job)",
    "Within 2 weeks",
    "Within 1 month",
    "2-3 months",
    "3+ months",
    "Flexible"
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does your company offer?",
      answer:
        "We offer a wide range of technology services including Web Design, App Development, UI/UX Design, Graphics/Multimedia, Digital Marketing, and custom software solutions tailored to meet your business needs.",
    },
    {
      question: "How do I get started with your services?",
      answer:
        "Getting started is easy! Simply contact us via our website&apos;s contact form, schedule a consultation, or call us directly. We&apos;ll discuss your needs, evaluate your project requirements, and create a custom solution tailored for you.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We provide technology solutions to a wide variety of industries, including healthcare, finance, retail, education, manufacturing, logistics, and more. Our flexible solutions are designed to meet the unique needs of each industry.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on the complexity and scope of the work. After our initial consultation, we will provide an estimated timeline and milestones, ensuring transparency throughout the process.",
    },
    {
      question: "Can you help with ongoing support and maintenance?",
      answer:
        "Yes! We offer ongoing support and maintenance services for all the solutions we deliver. Whether it&apos;s bug fixes, updates, or performance monitoring, our team ensures that your systems run smoothly over time.",
    },
    {
      question: "What are your pricing models?",
      answer:
        "We offer flexible pricing models including fixed-price contracts, hourly rates, or subscription-based models, depending on the scope and duration of the project. Contact us for a custom quote based on your specific requirements.",
    },
    {
      question: "Do you provide consultations before committing to a project?",
      answer:
        "Yes, we offer free initial consultations to discuss your needs, challenges, and objectives. This helps us understand your requirements and design a solution that fits your business.",
    },
    {
      question: "How do you ensure project success?",
      answer:
        "We ensure project success through a collaborative approach, regular communication, clear documentation, and adherence to best practices in project management. Our team works closely with you to meet deadlines and exceed expectations.",
    },
    {
      question: "How do you communicate with clients during a project?",
      answer:
        "We ensure continuous communication through regular meetings, email updates, and project management tools. Our team is always available for questions or support, ensuring transparency and alignment throughout the project.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Grid Pattern */}
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
            <span className="block text-white">Let&apos;s Create</span>
            <span className="block text-[#4ab9a9]">Something</span>
            <span className="block text-white">Amazing</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Get in touch and let&apos;s discuss your next big project.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <a
              href="#contact-form"
              className="group bg-white text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gray-200 flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://wa.me/919867787160"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center group">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-gray-400 transition-colors">
                &lt;2h
              </div>
              <div className="text-gray-400 text-sm flex items-center justify-center gap-1">
                <Clock className="w-4 h-4" />
                Response Time
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-gray-400 transition-colors">
                24/7
              </div>
              <div className="text-gray-400 text-sm flex items-center justify-center gap-1">
                <Zap className="w-4 h-4" />
                Support
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-gray-400 transition-colors">
                FREE
              </div>
              <div className="text-gray-400 text-sm flex items-center justify-center gap-1">
                <Target className="w-4 h-4" />
                Consultation
              </div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-gray-400 transition-colors">
                100%
              </div>
              <div className="text-gray-400 text-sm flex items-center justify-center gap-1">
                <Star className="w-4 h-4" />
                Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-gray-950" id="GetInTouch">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">
              Get In <span className=" text-[#4ab9a9]">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Choose your preferred way to connect with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const commonClasses =
                "group bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 transform hover:scale-105";

              const content = (
                <>
                  <div className="text-white mb-6 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{method.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{method.description}</p>
                  <p className="text-white font-semibold">{method.contact}</p>
                </>
              );

              if (typeof method.action === "string") {
                const isExternal = method.action.startsWith("http");
                return (
                  <a
                    key={index}
                    href={method.action}
                    target={isExternal ? "_blank" : "_self"}
                    rel={isExternal ? "noopener noreferrer" : ""}
                    className={commonClasses}
                  >
                    {content}
                  </a>
                );
              } else {
                return (
                  <button
                    key={index}
                    onClick={method.action}
                    className={commonClasses + " w-full text-left"}
                  >
                    {content}
                  </button>
                );
              }
            })}
          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">
              Start Your <span className=" text-[#4ab9a9]">Project</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within 2 hours
            </p>
          </div>

          {submitted ? (
            <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-12 text-center">
              <CheckCircle className="w-20 h-20 text-white mx-auto mb-8" />
              <h3 className="text-3xl font-bold text-white mb-6">Message Sent Successfully!</h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Thank you for reaching out. We&apos;ll get back to you within 2 hours during business hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://wa.me/919867787160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-gray-200 flex items-center gap-2 justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+919876543210"
                  className="border border-white text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-black flex items-center gap-2 justify-center"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-12">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-white font-semibold text-lg mb-4">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black border border-gray-700 rounded-xl px-6 py-4 text-white text-lg placeholder-gray-400 focus:border-white focus:outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold text-lg mb-4">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black border border-gray-700 rounded-xl px-6 py-4 text-white text-lg placeholder-gray-400 focus:border-white focus:outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold text-lg mb-4">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black border border-gray-700 rounded-xl px-6 py-4 text-white text-lg placeholder-gray-400 focus:border-white focus:outline-none transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold text-lg mb-4">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-gray-700 rounded-xl px-6 py-4 text-white text-lg placeholder-gray-400 focus:border-white focus:outline-none transition-all"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold text-lg mb-4">
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black border border-gray-700 rounded-xl px-6 py-4 text-white text-lg focus:border-white focus:outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-semibold text-lg mb-4">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-gray-700 rounded-xl px-6 py-4 text-white text-lg focus:border-white focus:outline-none transition-all"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((budget, index) => (
                        <option key={index} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white font-semibold text-lg mb-4">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full bg-black border border-gray-700 rounded-xl px-6 py-4 text-white text-lg focus:border-white focus:outline-none transition-all"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-white font-semibold text-lg mb-4">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-black border border-gray-700 rounded-xl px-6 py-4 text-white text-lg placeholder-gray-400 focus:border-white focus:outline-none transition-all resize-vertical"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    ></textarea>
                  </div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-white text-black px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gray-200 disabled:bg-gray-600 disabled:text-gray-300 flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-600 border-t-black rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <a
                    href="https://wa.me/919867787160"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Quick WhatsApp
                  </a>
                </div>

                <p className="text-gray-400 text-center mt-8 text-lg">
                  🔒 Your information is safe and secure. We&apos;ll never share your details.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-8">
            Frequently Asked <span className="text-[#4ab9a9]">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex items-center justify-between px-6 py-5 focus:outline-none"
              >
                <span className="text-white text-xl font-semibold">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 px-6 text-gray-300 text-lg leading-relaxed ${
                  openIndex === index ? "max-h-[500px] py-4" : "max-h-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 mb-8 text-xl">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/919867787160"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gray-200 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Chat with us on WhatsApp
            </a>
            <a
              href="mailto:info@zyflux.in"
              className="border border-white text-white px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center gap-3"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>

    </div>
  );
}
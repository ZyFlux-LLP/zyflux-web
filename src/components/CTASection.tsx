"use client";
import { ArrowRight, MessageCircle, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-800 relative overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to <span className="text-[#4ab9a9]">Transform</span> Your Business?
        </h2>

        <p className="text-xl text-gray-300 mb-8">
          {`Let's discuss your project and create something amazing together that drives real results`}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="group bg-white text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-2xl"
          >
            Book Your Free Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="https://wa.me/919867787160"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/10 flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </Link>
        </div>

        <div className="flex items-center justify-center gap-8 mt-8 text-gray-400">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>Response within 2 hours</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Free strategy session</span>
          </div>
        </div>
      </div>
    </section>
  );
}

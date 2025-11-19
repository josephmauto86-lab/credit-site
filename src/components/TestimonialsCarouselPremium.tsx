import React from "react";
import { TestimonialsColumn } from "./ui/testimonials-columns";

const testimonials = [
  {
    text: "Creditoré helped me consolidate my overwhelming debt into one manageable payment. Their team was compassionate and professional throughout the entire process.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    name: "Lindiwe M.",
    role: "Financial Services Professional",
  },
  {
    text: "My monthly payments were reduced significantly after working with Creditoré. I finally feel like I have control over my finances again.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    name: "Brandon S.",
    role: "Small Business Owner",
  },
  {
    text: "The debt review process was transparent and straightforward. Creditoré's team answered all my questions and made me feel secure throughout.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    name: "Charlene P.",
    role: "Marketing Executive",
  },
  {
    text: "I had multiple debts from different creditors and was drowning. Creditoré consolidated everything into one payment I could actually afford.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    name: "Thabo K.",
    role: "Construction Manager",
  },
  {
    text: "What impressed me most was Creditoré's professionalism and genuine care. They treated my situation with respect and urgency.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    name: "Nomsa D.",
    role: "Healthcare Administrator",
  },
  {
    text: "The team at Creditoré went above and beyond to help me understand my options. They made a stressful situation manageable and gave me hope.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    name: "Johan V.",
    role: "Retail Manager",
  },
  {
    text: "NCR-compliant, transparent, and truly customer-focused. Creditoré restored my confidence in managing my finances.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    name: "Amelia T.",
    role: "Educator",
  },
  {
    text: "The entire experience from assessment to debt plan approval was seamless. Creditoré's support team was always available when I had questions.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    name: "Michael R.",
    role: "Logistics Coordinator",
  },
  {
    text: "I was skeptical at first, but Creditoré's results spoke for themselves. My financial stress has significantly decreased.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    name: "Zainab H.",
    role: "Finance Analyst",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsCarouselPremium = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#f3f4f6] to-white py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center mb-4 px-4 py-2 rounded-full border-2 border-[#0080ff] bg-[#e0eeff] bg-opacity-50">
            <span className="text-xs sm:text-sm font-semibold text-[#0066cc]">
              CLIENT TESTIMONIALS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#0066cc] mb-4 sm:mb-6 leading-tight">
            Real Stories of Financial Freedom
          </h2>
          <p className="text-center text-base sm:text-lg text-[#6b7280] font-medium leading-relaxed">
            See how Creditoré has helped South Africans regain control of their finances and rebuild their futures.
          </p>
        </div>

        <div className="flex justify-center gap-4 sm:gap-6 mt-12 sm:mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] sm:max-h-[700px] md:max-h-[800px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:flex"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:flex"
            duration={17}
          />
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-[#0080ff] to-[#0066cc] opacity-5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#0080ff] to-[#0066cc] opacity-5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default TestimonialsCarouselPremium;

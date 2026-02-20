"use client";

import { useState } from "react";
import Image from "next/image";

function Industries() {
  const industries = [
    "Financial Services",
    "Healthcare",
    "Real Estate",
    "Education",
    "E-Commerce",
    "Government",
  ];

  const [selectedIndustry, setSelectedIndustry] =
    useState("Financial Services");

  const industryContent: Record<
    string,
    { heading: string; paragraphs: string[] }
  > = {
    "Financial Services": {
      heading: "Financial Services",
      paragraphs: [
        "We build secure, scalable fintech platforms that handle complex transactions with precision. Our solutions enable banks, payment processors, and financial institutions to deliver seamless digital experiences while maintaining the highest security standards.",
        "Through robust architecture and intuitive design, we create trading platforms, banking applications, and wealth management systems that empower financial organizations to serve their customers better and scale confidently.",
      ],
    },
    Healthcare: {
      heading: "Healthcare",
      paragraphs: [
        "We develop HIPAA-compliant healthcare systems that improve patient care and streamline medical operations. Our platforms enable hospitals, clinics, and health tech companies to manage patient data securely while enhancing the care delivery experience.",
        "From telemedicine applications to electronic health records and medical device integrations, we build software that healthcare professionals trust and patients find easy to use, ultimately improving health outcomes.",
      ],
    },
    "Real Estate": {
      heading: "Real Estate",
      paragraphs: [
        "We create comprehensive property management platforms and real estate marketplaces that connect buyers, sellers, and agents seamlessly. Our solutions streamline property listings, transactions, and portfolio management for real estate companies.",
        "Through innovative technology, we help real estate firms digitize their operations, from virtual property tours to automated document processing, enabling them to serve clients faster and more efficiently in today's digital market.",
      ],
    },
    Education: {
      heading: "Education",
      paragraphs: [
        "We build learning management systems and educational platforms that enhance teaching and learning experiences. Our solutions help schools, universities, and edtech companies deliver engaging digital education to students worldwide.",
        "From student information systems to interactive learning tools and online course platforms, we create software that educators love to use and students find intuitive, making quality education more accessible and effective.",
      ],
    },
    "E-Commerce": {
      heading: "E-Commerce",
      paragraphs: [
        "We develop high-performance e-commerce platforms that drive sales and provide exceptional shopping experiences. Our solutions enable retailers and brands to manage inventory, process orders, and engage customers across multiple channels seamlessly.",
        "Through optimized checkout flows, personalized recommendations, and scalable infrastructure, we help e-commerce businesses convert more visitors into customers while handling peak traffic and growing their online presence confidently.",
      ],
    },
    Government: {
      heading: "Government",
      paragraphs: [
        "We build secure, accessible government platforms that improve citizen services and streamline public sector operations. Our solutions help government agencies deliver digital services efficiently while maintaining compliance and security standards.",
        "From citizen portals to internal management systems and public service applications, we create software that makes government services more accessible, transparent, and efficient for citizens and public servants alike.",
      ],
    },
  };

  const currentContent = industryContent[selectedIndustry];

  return (
    <div>
      {/* ================= HEADER SECTION ================= */}
      <section
        id="industries"
        className="py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center mb-10 sm:mb-14">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold mb-4"
              style={{
                fontFamily:
                  'var(--font-darker-grotesque), "Darker Grotesque", sans-serif',
                color: "#159653",
              }}
            >
              Industries We Serve
            </h2>

            <p
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight"
              style={{
                fontFamily:
                  'var(--font-darker-grotesque), "Darker Grotesque", sans-serif',
                color: "#000000",
              }}
            >
              Powering organizations with industry focused design and
              engineering.
            </p>
          </div>

          {/* ================= INDUSTRY BUTTONS ================= */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base ${
                  selectedIndustry === industry
                    ? "bg-gray-800 text-white shadow-lg"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                }`}
                style={{
                  fontFamily:
                    'var(--font-montserrat), Montserrat, sans-serif',
                }}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMAGE + RECTANGLE CARD SECTION ================= */}
      <section>
        <div className="relative w-full min-h-[350px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px] flex items-center justify-center overflow-hidden px-4">
          {/* Background Image */}
          <Image
            src="/images/Rectangle.svg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />

          {/* Wide Rectangle Card */}
          <div
            className="relative z-10 bg-white rounded-2xl shadow-2xl 
                       w-full 
                       max-w-xl 
                       md:max-w-2xl 
                       lg:max-w-3xl 
                       xl:max-w-4xl 
                       p-6 sm:p-8 md:p-10"
          >
            {/* Title stays on top */}
            <h3
              className="text-lg sm:text-xl md:text-2xl font-semibold mb-4"
              style={{
                fontFamily:
                  'var(--font-montserrat), Montserrat, sans-serif',
                color: "#159653",
              }}
            >
              {currentContent.heading}
            </h3>

            {/* Description */}
            {currentContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={index > 0 ? "mt-4" : ""}
                style={{
                  fontFamily:
                    'var(--font-darker-grotesque), "Darker Grotesque", sans-serif',
                  fontSize: "clamp(15px, 1.4vw, 20px)",
                  lineHeight: "1.4",
                  color: "#000000",
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Industries;

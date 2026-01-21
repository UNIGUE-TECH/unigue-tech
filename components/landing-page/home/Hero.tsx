import React from 'react';

function Hero() {
  const pillLabels = [
    // Bottom scattered layer
    { text: "IT Services", color: "bg-pink-200", textColor: "text-pink-800", rotation: 0, animation: "float1", delay: 0, left: "6%", bottom: "50px" },
    { text: "IT Services", color: "bg-orange-300", textColor: "text-orange-900", rotation: 0, animation: "float2", delay: 0.2, left: "19%", bottom: "50px" },
    { text: "IT Services", color: "bg-pink-200", textColor: "text-pink-800", rotation:-30, animation: "float3", delay: 0.4, left: "48%", bottom: "95px" },
    { text: "IT Services", color: "bg-blue-200", textColor: "text-blue-800", rotation: 0, animation: "float4", delay: 0.6, left: "59%", bottom: "55px" },
    { text: "IT Services", color: "bg-orange-200", textColor: "text-orange-800", rotation: 30, animation: "float1", delay: 0.8, left: "75%", bottom: "120px" },
    { text: "IT Services", color: "bg-orange-200", textColor: "text-orange-800", rotation: 0, animation: "float1", delay: 0.8, left: "86%", bottom: "55px" },
    
    // Middle scattered layer
    { text: "App design", color: "bg-orange-200", textColor: "text-orange-800", rotation: 0, animation: "float2", delay: 1.0, left: "10%", bottom: "105px" },
    { text: "IT Services", color: "bg-orange-300", textColor: "text-orange-900", rotation: 0, animation: "float4", delay: 1.2, left: "71%", bottom: "55px"  },
    { text: "IT Services", color: "bg-pink-300", textColor: "text-pink-900", rotation: -40, animation: "float3", delay: 1.4, left: "37%", bottom: "105px" },
    
    // Top scattered layer
    { text: "Web development", color: "bg-blue-300", textColor: "text-blue-900", rotation: -30, animation: "float1", delay: 1.6, left: "1%", bottom: "145px" },
    { text: "IT Services", color: "bg-pink-300", textColor: "text-pink-900", rotation: -10, animation: "float2", delay: 1.8, left: "16%", bottom: "175px" },
    { text: "IT Services", color: "bg-blue-300", textColor: "text-blue-900", rotation: 30, animation: "float3", delay: 2.0, left: "26%", bottom: "95px" },
    { text: "IT Services", color: "bg-orange-200", textColor: "text-orange-800", rotation: -20, animation: "float4", delay: 2.2, left: "48%", bottom: "165px" },
    { text: "IT Services", color: "bg-blue-300", textColor: "text-blue-900", rotation: 0, animation: "float1", delay: 2.4, left: "65%", bottom: "109px" },
  ];

  return (
    <section id="home" className="relative h-[80vh] overflow-hidden bg-[#FEFFF0] pt-16">
      {/* HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="text-[#7BAE4E] mb-6 text-lg font-medium">
          Product design. Engineering. Support.
        </p>

        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold max-w-4xl mb-10 text-[#171717]">
          We design and build world-class software for corporations that want to scale.
        </h1>

        <button className="px-8 py-3 rounded-full font-medium text-white transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#159653' }}>
          Get in Touch
        </button>
      </div>

      {/* PILL CONTAINER - Now covers full section height */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {pillLabels.map((pill, index) => (
          <span
            key={index}
            className={`${pill.color} ${pill.textColor}`}
            style={{
              position: 'absolute',
              top: 0,
              left: pill.left,
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: '30px',
              lineHeight: '100%',
              letterSpacing: 0,
              textAlign: 'center',
              transform: `translateY(-60px) rotate(${pill.rotation}deg)`,
              animation: `drop-${index} 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${pill.delay}s forwards`,
              willChange: 'transform',
            }}
          >
            {pill.text}
            <style>{`
              @keyframes drop-${index} {
                from {
                  transform: translateY(-60px) rotate(${pill.rotation}deg);
                  opacity: 0;
                }
                to {
                  transform: translateY(calc(80vh - ${pill.bottom})) rotate(${pill.rotation}deg);
                  opacity: 1;
                }
              }
            `}</style>
          </span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
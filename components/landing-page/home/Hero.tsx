import React from 'react';

function Hero() {
  const pillLabels = [
    // Bottom scattered layer
    { text: "IT Services", color: "bg-pink-200", textColor: "text-pink-800", rotation: 0, animation: "float1", delay: 0, left: "6%", bottom: "-20px", leftMobile: "12%", bottomMobile: "35px", showOnMobile: true },
    { text: "IT Services", color: "bg-orange-300", textColor: "text-orange-900", rotation: 0, animation: "float2", delay: 0.2, left: "19%", bottom: "-20px", leftMobile: "25%", bottomMobile: "67px", showOnMobile: true },
    { text: "IT Services", color: "bg-pink-200", textColor: "text-pink-800", rotation:-30, animation: "float3", delay: 0.4, left: "48%", bottom: "25px", leftMobile: "5%", bottomMobile: "72px", showOnMobile: true },
    { text: "IT Services", color: "bg-blue-200", textColor: "text-blue-800", rotation: 0, animation: "float4", delay: 0.6, left: "59%", bottom: "-15px", leftMobile: "76%", bottomMobile: "35px", showOnMobile: true },
    { text: "IT Services", color: "bg-orange-200", textColor: "text-orange-800", rotation: 30, animation: "float1", delay: 0.8, left: "75%", bottom: "50px", leftMobile: "46%", bottomMobile: "50px", showOnMobile: true },
    { text: "IT Services", color: "bg-orange-200", textColor: "text-orange-800", rotation: 0, animation: "float1", delay: 0.8, left: "86%", bottom: "-15px", leftMobile: "60%", bottomMobile: "150px", showOnMobile: false },
    
    // Middle scattered layer
    { text: "App design", color: "bg-orange-200", textColor: "text-orange-800", rotation: 0, animation: "float2", delay: 1.0, left: "10%", bottom: "35px", leftMobile: "33%", bottomMobile: "35px", showOnMobile: true },
    { text: "IT Services", color: "bg-orange-300", textColor: "text-orange-900", rotation: 0, animation: "float4", delay: 1.2, left: "71%", bottom: "-15px", leftMobile: "55%", bottomMobile: "200px", showOnMobile: false },
    { text: "IT Services", color: "bg-pink-300", textColor: "text-pink-900", rotation: -40, animation: "float3", delay: 1.4, left: "37%", bottom: "35px", leftMobile: "65%", bottomMobile: "50px", showOnMobile: true },
    
    // Top scattered layer
    { text: "Web development", color: "bg-blue-300", textColor: "text-blue-900", rotation: -30, animation: "float1", delay: 1.6, left: "1%", bottom: "75px", leftMobile: "10%", bottomMobile: "300px", showOnMobile: false },
    { text: "IT Services", color: "bg-pink-300", textColor: "text-pink-900", rotation: -10, animation: "float2", delay: 1.8, left: "16%", bottom: "105px", leftMobile: "65%", bottomMobile: "300px", showOnMobile: false },
    { text: "IT Services", color: "bg-blue-300", textColor: "text-blue-900", rotation: 30, animation: "float3", delay: 2.0, left: "26%", bottom: "35px", leftMobile: "20%", bottomMobile: "350px", showOnMobile: false },
    { text: "IT Services", color: "bg-orange-200", textColor: "text-orange-800", rotation: -20, animation: "float4", delay: 2.2, left: "48%", bottom: "105px", leftMobile: "70%", bottomMobile: "350px", showOnMobile: false },
    { text: "IT Services", color: "bg-blue-300", textColor: "text-blue-900", rotation: 0, animation: "float1", delay: 2.4, left: "65%", bottom: "49px", leftMobile: "45%", bottomMobile: "400px", showOnMobile: false },
  ];

  return (
    <section id="home" className="relative h-[80vh] sm:h-[90vh] overflow-hidden bg-[#FEFFF0] pt-16">
      {/* HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24">
        <p className="text-[#7BAE4E] mb-6 text-lg font-medium">
          Product design. Engineering. Support.
        </p>

        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold max-w-4xl mb-10 text-[#171717]">
          We design and build world-class software for corporations that want to scale.
        </h1>

        <button className="px-7 py-2 rounded-full font-medium text-white transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#159653' }}>
          Get in Touch
        </button>
      </div>

      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <style>{`
          ${pillLabels.map((pill, index) => `
            .pill-${index} {
              --pill-bottom: ${pill.bottomMobile || pill.bottom};
              left: ${pill.leftMobile || pill.left};
            }
            @keyframes drop-${index} {
              from {
                transform: translateY(-60px) rotate(${pill.rotation}deg);
                opacity: 0;
              }
              to {
                transform: translateY(calc(80vh - var(--pill-bottom))) rotate(${pill.rotation}deg);
                opacity: 1;
              }
            }
            @media (min-width: 768px) {
              .pill-${index} {
                left: ${pill.left} !important;
                --pill-bottom: ${pill.bottom};
              }
            }
          `).join('')}
        `}</style>
        {pillLabels.map((pill, index) => (
          <span
            key={index}
            className={`pill-${index} ${pill.color} ${pill.textColor} ${pill.showOnMobile ? 'block' : 'hidden md:block'} text-base md:text-[30px] px-3 py-2 md:px-6 md:py-3`}
            style={{
              position: 'absolute',
              top: 0,
              borderRadius: '9999px',
              whiteSpace: 'nowrap',
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              fontWeight: 500,
              lineHeight: '100%',
              letterSpacing: 0,
              textAlign: 'center',
              transform: `translateY(-60px) rotate(${pill.rotation}deg)`,
              animation: `drop-${index} 1.2s cubic-bezier(0.22, 1, 0.36, 1) ${pill.delay}s forwards`,
              willChange: 'transform',
            }}
          >
            {pill.text}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
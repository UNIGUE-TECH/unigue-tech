import GetInTouchButton from "../../ui/GetInTouchButton";

function Hero() {
  const pillLabels = [
    { text: "IT Services", color: "bg-blue-200", textColor: "text-blue-800", rotation: -5, animation: "float1", delay: 0, left: "10%" },
    { text: "Web development", color: "bg-blue-300", textColor: "text-blue-900", rotation: 8, animation: "float2", delay: 0.5, left: "15%" },
    { text: "App design", color: "bg-orange-200", textColor: "text-orange-800", rotation: -12, animation: "float3", delay: 1, left: "20%" },
    { text: "Cloud Solutions", color: "bg-pink-200", textColor: "text-pink-800", rotation: 15, animation: "float4", delay: 1.5, left: "25%" },
    { text: "Data Analytics", color: "bg-purple-200", textColor: "text-purple-800", rotation: -8, animation: "float1", delay: 2, left: "30%" },
    { text: "DevOps", color: "bg-blue-200", textColor: "text-blue-800", rotation: 10, animation: "float2", delay: 2.5, left: "35%" },
    { text: "UI/UX Design", color: "bg-pink-300", textColor: "text-pink-900", rotation: -15, animation: "float3", delay: 3, left: "40%" },
    { text: "Mobile Apps", color: "bg-orange-300", textColor: "text-orange-900", rotation: 5, animation: "float4", delay: 3.5, left: "45%" },
    { text: "IT Services", color: "bg-green-200", textColor: "text-green-800", rotation: -10, animation: "float1", delay: 4, left: "50%" },
    { text: "API Development", color: "bg-blue-200", textColor: "text-blue-800", rotation: 12, animation: "float2", delay: 4.5, left: "55%" },
    { text: "E-commerce", color: "bg-pink-200", textColor: "text-pink-800", rotation: -7, animation: "float3", delay: 5, left: "60%" },
    { text: "Consulting", color: "bg-purple-300", textColor: "text-purple-900", rotation: 9, animation: "float4", delay: 5.5, left: "65%" },
    { text: "IT Services", color: "bg-orange-200", textColor: "text-orange-800", rotation: -11, animation: "float1", delay: 6, left: "70%" },
    { text: "Security", color: "bg-blue-300", textColor: "text-blue-900", rotation: 6, animation: "float2", delay: 6.5, left: "75%" },
    { text: "AI/ML", color: "bg-pink-300", textColor: "text-pink-900", rotation: -14, animation: "float3", delay: 7, left: "80%" },
    { text: "IT Services", color: "bg-green-300", textColor: "text-green-900", rotation: 13, animation: "float4", delay: 7.5, left: "85%" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F5F5DC] min-h-[80vh] sm:h-[80vh] flex flex-col"
    >
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <p 
          className="text-[#7BAE4E] text-center mb-4 sm:mb-6 text-base sm:text-lg md:text-[20px] leading-[100%]"
          style={{ 
            fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
            fontWeight: 500,
            letterSpacing: 0
          }}
        >
          Product design. Engineering. Support.
        </p>

        <h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-center text-gray-900 max-w-4xl mb-6 sm:mb-10 leading-[100%] px-2"
          style={{ 
            fontFamily: 'var(--font-darker-grotesque), "Darker Grotesque", sans-serif',
            fontWeight: 700,
            letterSpacing: 0,
            fontStyle: 'normal'
          }}
        >
          We design and build world-class software for corporations that want to scale.
        </h1>
        <GetInTouchButton 
          backgroundColor="#159653"
          hoverBackgroundColor="#0d7a3f"
          className="text-sm sm:text-base"
        />
      </div>
      <div className="relative w-full h-40 sm:h-48 md:h-60 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          {pillLabels.map((pill, index) => (
            <span
              key={index}
              className={`pill-animate px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full ${pill.color} ${pill.textColor} whitespace-nowrap text-center hidden sm:inline-block`}
              style={{ 
                '--rotation': `${pill.rotation}deg`,
                animationName: pill.animation,
                animationDelay: `${pill.delay}s`,
                left: pill.left,
                top: `${20 + (index % 4) * 25}%`,
                fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(12px, 2vw, 30px)',
                lineHeight: '100%',
                letterSpacing: 0,
                textAlign: 'center'
              } as React.CSSProperties}
            >
              {pill.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

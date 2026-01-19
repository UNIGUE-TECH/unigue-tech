function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 lg:py-32 min-h-[70vh] sm:h-[70vh] flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-4xl text-center space-y-4 sm:space-y-6 md:space-y-8">
          {/* Top text */}
          <p 
            className="text-[#F3E4C3] text-base sm:text-lg md:text-[20px] leading-[100%]"
            style={{ 
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              fontWeight: 500,
              letterSpacing: 0
            }}
          >
            We are Unigue.
          </p>

          {/* Main heading */}
          <h2 
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold leading-[100%] px-2"
            style={{ 
              fontFamily: 'var(--font-darker-grotesque), "Darker Grotesque", sans-serif',
              fontWeight: 700,
              letterSpacing: 0,
              fontStyle: 'normal'
            }}
          >
            We're a software development firm helping organizations transform bold ideas into world-class digital products.
          </h2>

          {/* Bottom text */}
          <p 
            className="text-[#F3E4C3] text-base sm:text-lg md:text-[20px] leading-[130%] px-2"
            style={{ 
              fontFamily: 'var(--font-montserrat), Montserrat, sans-serif',
              fontWeight: 400,
              letterSpacing: 0
            }}
          >
            Through refined UX design and reliable full-stack engineering, we deliver software that is elegant, intuitive, and built for long-term growth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

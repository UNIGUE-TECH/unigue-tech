import Image from "next/image";

export default function ServicesLogos() {
  const logos = [
    "/assets/images/logo1.png",
    "/assets/images/logo2.png",
    "/assets/images/logo3.png",
    "/assets/images/logo4.png",
    "/assets/images/logo5.png",
    "/assets/images/logo6.png",
  ];
  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 px-2">
      {logos.map((src, i) => (
        <div
          key={i}
          className="bg-[#F4F1E6] flex items-center justify-center rounded p-2 sm:p-3"
        >
          <Image
            src={src}
            alt={`Client logo ${i + 1}`}
            width={56}
            height={56}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
        </div>
      ))}
    </div>
  );
}

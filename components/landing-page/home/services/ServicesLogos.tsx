import Image from "next/image";

export default function ServicesLogos() {
  const logos = [
    "/assets/images/LG1.png",
    "/assets/images/LG2.png",
    "/assets/images/LG3.png",
    "/assets/images/LG4.png",
    "/assets/images/LG5.jpg",
    "/assets/images/LG6.png",
    "/assets/images/LG7.webp",
  ];
  return (
    <div className="flex  flex-wrap justify-center gap-6">
      {logos.map((src, i) => (
        <div
          key={i}
          className={`${i === 0 ? 'bg-black' : 'bg-transparent'} p-1 flex items-center justify-center `}
        >
          <Image
            src={src}
            alt={`Client logo ${1 + 1}`}
            width={60}
            height={60}
          />
        </div>
      ))}
    </div>
  );
}

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
    <div className="flex flex-wrap justify-center gap-6">
      {logos.map((src, i) => (
        <div
          key={i}
          className=" bg-[#F4F1E6] flex items-center justify-center rounded"
        >
          <Image
            src={src}
            alt={`Client logo ${1 + 1}`}
            width={56}
            height={56}
          />
        </div>
      ))}
    </div>
  );
}

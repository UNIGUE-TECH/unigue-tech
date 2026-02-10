type Props = {
  items: string[]
}

export default function ServiceDetailsCard({ items }: Props) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-[#159653] rounded-b-xl p-4 sm:p-5 md:p-6 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
      <ul className="space-y-1.5 sm:space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-white text-xs sm:text-sm md:text-base flex items-start">
            <span className="mr-2 flex-shrink-0">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
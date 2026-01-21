type Props = {
  items: string[]
}

export default function ServiceDetailsCard({ items }: Props) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-[#159653] rounded-b-xl p-6 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-white text-sm flex items-start">
            <span className="mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
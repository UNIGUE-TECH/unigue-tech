type Props = {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export default function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: Props) {
  return (
    <div className="border-b border-gray-300 pb-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="text-base font-medium">
          {question}
        </span>
        <span className="text-2xl font-light">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl">
          {answer}
        </p>
      )}
    </div>
  )
}

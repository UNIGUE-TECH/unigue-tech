'use client'

import { useState } from 'react'
import FaqItem from './FaqItem'

const faqs = [
  {
    question: 'How do I get started on my construction project?',
    answer:
      'You can get started by contacting our team for a consultation. We will guide you through planning, budgeting, and execution.',
  },
  {
    question: 'Do you provide project management services?',
    answer:
      'Yes, we offer full project management services from start to finish.',
  },
  {
    question:
      'What sets Mercuri Construction apart from other construction companies?',
    answer:
      'Our attention to detail, transparency, and commitment to quality set us apart.',
  },
  {
    question: 'Can I make changes to the project during construction?',
    answer:
      'Yes, changes can be accommodated depending on the project stage.',
  },
  {
    question: 'Do you offer sustainable building options?',
    answer:
      'Absolutely. We provide eco-friendly and sustainable construction solutions.',
  },
  {
    question: 'How do you handle unexpected issues during construction?',
    answer:
      'We proactively communicate and resolve issues efficiently to minimize delays.',
  },
  {
    question: 'What types of warranties do you offer on your work?',
    answer:
      'We offer workmanship warranties and manufacturer warranties where applicable.',
  },
]

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
        />
      ))}
    </div>
  )
}

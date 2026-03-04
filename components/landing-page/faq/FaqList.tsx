'use client'

import { useState } from 'react'
import FaqItem from './FaqItem'

const faqs = [
  {
    question: 'How do we start a custom software project with you?',
    answer:
      'Start with a discovery call so we can align on goals, scope, and timelines. We then propose a roadmap covering requirements, architecture, and delivery milestones.',
  },
  {
    question: 'Do you build both web and mobile applications?',
    answer:
      'Yes. We deliver responsive web apps and native or cross-platform mobile apps tailored to your product needs.',
  },
  {
    question: 'What kinds of AI-powered applications do you develop?',
    answer:
      'We build AI features like automation, personalization, predictive analytics, and intelligent assistants, integrated into your existing or new products.',
  },
  {
    question: 'Can you work with our existing software or codebase?',
    answer:
      'Absolutely. We can modernize legacy systems, add new features, and improve performance while keeping business continuity in mind.',
  },
  {
    question: 'How do you handle project management and communication?',
    answer:
      'We use an agile process with weekly updates, demos, and a dedicated point of contact to keep everything transparent and on track.',
  },
  {
    question: 'What makes your development team different?',
    answer:
      'We combine product strategy, strong engineering practices, and a focus on measurable business outcomes to deliver reliable software.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer:
      'Yes. We offer maintenance, monitoring, and iterative improvements to keep your product secure and scalable.',
  },
  {
    question: 'What are AI chatbots and how can they help my business?',
    answer:
      'AI chatbots are intelligent assistants that handle customer inquiries, automate support, and provide 24/7 engagement. They reduce response times and free up your team for complex tasks.',
  },
  {
    question: 'Can you build custom AI agents for specific workflows?',
    answer:
      'Yes. We develop AI agents that automate tasks like data processing, customer service, scheduling, and decision-making based on your unique business logic.',
  },
  {
    question: 'What is RAG and why would I need it?',
    answer:
      'RAG (Retrieval-Augmented Generation) combines AI with your proprietary data to provide accurate, context-aware responses. It\'s ideal for knowledge bases, support systems, and enterprise search.',
  },
  {
    question: 'How do you ensure AI models understand our domain-specific content?',
    answer:
      'We fine-tune and train models on your data, implement RAG pipelines, and use domain-specific prompt engineering to ensure accuracy and relevance.',
  },
  {
    question: 'Can you integrate AI into our existing applications?',
    answer:
      'Absolutely. We seamlessly integrate AI capabilities like natural language processing, image recognition, and predictive analytics into your current tech stack.',
  },
  {
    question: 'What AI technologies and frameworks do you work with?',
    answer:
      'We work with OpenAI, Anthropic, open-source LLMs, TensorFlow, PyTorch, LangChain, vector databases, and custom ML pipelines tailored to your needs.',
  },
  {
    question: 'How long does it take to develop an AI-powered application?',
    answer:
      'Timeline varies by complexity. A basic AI chatbot can be ready in 4-6 weeks, while advanced RAG systems or custom ML models may take 3-6 months.',
  },
  {
    question: 'Do you handle data privacy and compliance for AI projects?',
    answer:
      'Yes. We follow best practices for data security, implement privacy controls, and ensure compliance with regulations like GDPR and industry standards.',
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

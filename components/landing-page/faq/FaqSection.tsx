
import FaqList from './FaqList'

export default function FaqSection() {
  return (
    <section className="bg-background pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center my-16">
      <h2 className="text-3xl font-semibold mb-4">
        Frequently asked questions
      </h2>
      <p className="text-gray-600 max-w-lg mx-auto">
        We have curated a list of commonly asked questions to get you started.
      </p>
    </div>
        <FaqList />
      </div>
    </section>
  )
}

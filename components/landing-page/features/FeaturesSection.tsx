import FeaturesGrid from "./FeaturesGrid";


export default function FeaturesSection() {
  return (
    <section className="relative py-32 bg-features">
     
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <FeaturesGrid />
      </div>
    </section>
  )
}

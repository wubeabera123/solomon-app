import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/illustration.webp"
          alt="Architectural background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Bringing Architectural Visions to Life
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-8">
            With over 30 years of experience in architecture and construction, Engineer Solomon Mengistu delivers
            excellence in every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-white text-stone-800 rounded-md hover:bg-stone-100 transition-colors duration-300 text-center font-medium"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white text-white rounded-md hover:bg-white/10 transition-colors duration-300 text-center font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

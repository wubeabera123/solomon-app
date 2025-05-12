import Image from "next/image"
import Link from "next/link"
import Hero from "@/components/hero"
import FeaturedProjects from "@/components/featured-projects"
import ServicesOverview from "@/components/services-overview"
import TestimonialSlider from "@/components/testimonial-slider"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2>Crafting Excellence in Architecture & Construction</h2>
            <p className="text-lg mb-6">
              With over 30 years of experience, Engineer Solomon Mengistu brings unparalleled expertise to every
              project, combining architectural vision with practical construction knowledge.
            </p>
            <p className="mb-8">
              Specializing in durable, high-quality structures with meticulous attention to detail, Engineer Solomon
              personally oversees each project from concept to completion.
            </p>
            <Link href="/about" className="btn-primary">
              Learn More About My Approach
            </Link>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/solomon.jpg"
              alt="Engineer Solomon at work"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <ServicesOverview />
      <FeaturedProjects />
      <TestimonialSlider />
      <CallToAction />
    </div>
  )
}

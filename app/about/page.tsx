import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/components/page-header"

export default function About() {
  return (
    <div>
      <PageHeader
        title="About Engineer Solomon Mengistu"
        subtitle="Over three decades of excellence in architecture and construction"
      />

      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2>My Journey</h2>
            <p className="text-lg">
              With a career spanning over 30 years, I have dedicated my life to the art and science of creating spaces
              that are both beautiful and functional. My dual expertise as both an architect and construction engineer
              gives me a unique perspective on the building process.
            </p>

            <h3 className="mt-8">Education & Qualifications</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Master's Degree in Architectural Engineering</li>
              <li>Licensed Professional Engineer</li>
              <li>Certified Construction Manager</li>
              <li>Member of the National Association of Architects</li>
            </ul>

            <h3 className="mt-8">Philosophy</h3>
            <p>
              I believe that great architecture must be both visually striking and structurally sound. My approach
              combines creative design with practical implementation, ensuring that every project not only looks
              exceptional but stands the test of time.
            </p>
            <p>
              What sets my work apart is my hands-on involvement throughout the entire process. I personally guide
              construction teams, ensuring that every detail of the design is executed with precision and care.
            </p>

            <div className="mt-8">
              <Link href="/projects" className="btn-primary mr-4">
                View My Projects
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Engineer Solomon portrait"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-stone-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Career Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-stone-800 font-bold mr-2">•</span>
                  <span>Completed over 200 residential and commercial projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-800 font-bold mr-2">•</span>
                  <span>Award-winning designs recognized for innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-800 font-bold mr-2">•</span>
                  <span>Specialized in earthquake-resistant structures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-stone-800 font-bold mr-2">•</span>
                  <span>Mentored dozens of young architects and engineers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 mt-16">
        <div className="container-custom">
          <h2 className="section-title">My Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Architectural Design</h3>
              <p>
                Creating innovative, functional, and aesthetically pleasing designs that reflect each client's unique
                vision and needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Construction Engineering</h3>
              <p>
                Applying technical knowledge to ensure structures are built safely, efficiently, and according to
                specifications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Project Management</h3>
              <p>
                Overseeing all aspects of construction to deliver projects on time, within budget, and to the highest
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import Image from "next/image"
import PageHeader from "@/components/page-header"
import TestimonialCard from "@/components/testimonial-card"

export default function Testimonials() {
  // Sample testimonial data - would be replaced with real data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "Engineer Solomon transformed our vision into a beautiful, functional home that exceeded our expectations. His attention to detail and hands-on approach to construction management ensured that every aspect of our design was executed perfectly.",
      imageSrc: "/placeholder.svg?height=200&width=200",
      project: "Custom Residence",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO, Tech Innovations Inc.",
      content:
        "Working with Engineer Solomon on our corporate headquarters was an exceptional experience. He understood our company culture and created a space that fosters collaboration while making a bold architectural statement. His ability to manage both design and construction made the process seamless.",
      imageSrc: "/placeholder.svg?height=200&width=200",
      project: "Corporate Headquarters",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Community Development Director",
      content:
        "The community center designed and built by Engineer Solomon has become the heart of our neighborhood. His thoughtful approach to public spaces and commitment to quality construction has given us a facility that will serve generations to come.",
      imageSrc: "/placeholder.svg?height=200&width=200",
      project: "Community Center",
    },
    {
      id: 4,
      name: "David Okafor",
      role: "Property Developer",
      content:
        "I've worked with many architects and engineers over my career, but Engineer Solomon stands apart. His dual expertise saves time and money while ensuring the highest quality results. Our residential complex was completed on time and on budget with exceptional craftsmanship.",
      imageSrc: "/placeholder.svg?height=200&width=200",
      project: "Residential Complex",
    },
    {
      id: 5,
      name: "Aisha Mahmoud",
      role: "School Principal",
      content:
        "Engineer Solomon's design for our school expansion perfectly balances functionality, safety, and inspiration. The new learning spaces have transformed our educational environment, and his careful oversight during construction minimized disruption to our academic program.",
      imageSrc: "/placeholder.svg?height=200&width=200",
      project: "Educational Facility",
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Restaurant Owner",
      content:
        "The renovation of our historic building into a modern restaurant presented numerous challenges, but Engineer Solomon navigated them all with expertise and creativity. His understanding of both design aesthetics and structural requirements was invaluable.",
      imageSrc: "/placeholder.svg?height=200&width=200",
      project: "Restaurant Renovation",
    },
  ]

  return (
    <div>
      <PageHeader
        title="Client Testimonials"
        subtitle="What clients say about working with Engineer Solomon Mengistu"
      />

      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="bg-stone-100 py-16 mt-16">
        <div className="container-custom">
          <h2 className="section-title">Client Success Stories</h2>

          <div className="mt-12 space-y-12">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Luxury villa project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">The Johnson Family Home</h3>
                  <p className="mb-6">
                    The Johnsons approached me with a challenging site and ambitious vision for their dream home.
                    Through collaborative design and meticulous construction management, we created a residence that
                    harmonizes with its natural surroundings while providing all the modern amenities they desired.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Sarah Johnson"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-gray-600">Homeowner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[300px] md:h-auto md:order-2">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Corporate headquarters project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Tech Innovations Headquarters</h3>
                  <p className="mb-6">
                    Tech Innovations needed an office space that reflected their forward-thinking culture while
                    providing practical workspaces for their growing team. The resulting design incorporates flexible
                    collaboration areas, state-of-the-art technology infrastructure, and sustainable building practices.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Michael Chen"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Michael Chen</p>
                      <p className="text-sm text-gray-600">CEO, Tech Innovations Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Community center project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Riverside Community Center</h3>
                  <p className="mb-6">
                    This public project required balancing diverse community needs with budget constraints and
                    durability requirements. The resulting facility includes multipurpose spaces, recreational areas,
                    and administrative offices in a design that celebrates the community's cultural heritage.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Elena Rodriguez"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">Elena Rodriguez</p>
                      <p className="text-sm text-gray-600">Community Development Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

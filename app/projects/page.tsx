import Image from "next/image"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import ProjectCard from "@/components/project-card"

export default function Projects() {
  // Sample project data - would be replaced with real data
  const projects = [
    {
      id: 1,
      title: "Modern Residential Complex",
      category: "Residential",
      description:
        "A contemporary housing development featuring 12 luxury units with sustainable design elements and community spaces.",
      imageSrc: "/placeholder.svg?height=600&width=800",
      year: "2022",
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      category: "Commercial",
      description:
        "A state-of-the-art office building designed to foster collaboration and productivity while minimizing environmental impact.",
      imageSrc: "/placeholder.svg?height=600&width=800",
      year: "2021",
    },
    {
      id: 3,
      title: "Urban Renewal Project",
      category: "Mixed-Use",
      description:
        "Transformation of an abandoned industrial site into a vibrant mixed-use development with residential, retail, and public spaces.",
      imageSrc: "/placeholder.svg?height=600&width=800",
      year: "2020",
    },
    {
      id: 4,
      title: "Luxury Villa",
      category: "Residential",
      description:
        "A custom-designed private residence that harmonizes with its natural surroundings while providing modern luxury amenities.",
      imageSrc: "/placeholder.svg?height=600&width=800",
      year: "2019",
    },
    {
      id: 5,
      title: "Community Center",
      category: "Public",
      description:
        "A multipurpose facility designed to serve local residents with educational, recreational, and cultural programming.",
      imageSrc: "/placeholder.svg?height=600&width=800",
      year: "2018",
    },
    {
      id: 6,
      title: "Boutique Hotel",
      category: "Hospitality",
      description:
        "A distinctive 30-room hotel that combines local architectural traditions with contemporary comfort and amenities.",
      imageSrc: "/placeholder.svg?height=600&width=800",
      year: "2017",
    },
    {
      id: 7,
      title: "Educational Campus",
      category: "Institutional",
      description:
        "A comprehensive educational facility featuring classrooms, laboratories, administrative offices, and student gathering spaces.",
      imageSrc: "/placeholder.svg?height=600&width=800",
      year: "2016",
    },
    {
      id: 8,
      title: "Waterfront Development",
      category: "Mixed-Use",
      description:
        "A large-scale project that revitalized a neglected waterfront area with residential, commercial, and recreational components.",
      imageSrc: "/placeholder.svg?height=600&width=800",
      year: "2015",
    },
  ]

  // Categories for filtering
  const categories = ["All", "Residential", "Commercial", "Mixed-Use", "Public", "Hospitality", "Institutional"]

  return (
    <div>
      <PageHeader
        title="Projects"
        subtitle="A showcase of my architectural and construction work over the past 30 years"
      />

      <section className="container-custom">
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-stone-300 hover:bg-stone-100 transition-colors duration-300 text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="bg-stone-100 py-16 mt-16">
        <div className="container-custom">
          <h2 className="section-title">Featured Project</h2>
          <p className="section-subtitle">An in-depth look at one of my most significant works</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="space-y-6">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Featured project main view"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="relative h-[100px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Featured project detail 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[100px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Featured project detail 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[100px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Featured project detail 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4">Urban Renewal Project</h3>
              <div className="flex gap-4 mb-6">
                <span className="bg-stone-200 px-3 py-1 rounded-full text-sm">Mixed-Use</span>
                <span className="bg-stone-200 px-3 py-1 rounded-full text-sm">2020</span>
                <span className="bg-stone-200 px-3 py-1 rounded-full text-sm">10,000 sq.m</span>
              </div>

              <p className="text-lg mb-6">
                This transformative project revitalized an abandoned industrial site in the heart of the city, creating
                a vibrant community hub that combines residential, commercial, and public spaces.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-semibold">Project Highlights:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Preservation and adaptive reuse of historic industrial structures</li>
                  <li>Integration of sustainable design principles, including green roofs and rainwater harvesting</li>
                  <li>Creation of pedestrian-friendly public plazas and green spaces</li>
                  <li>Mixed-income residential units to promote community diversity</li>
                  <li>Incorporation of local art installations throughout the development</li>
                </ul>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-semibold">Technical Challenges:</h4>
                <p>
                  The project presented significant structural and environmental challenges, including soil remediation,
                  reinforcement of existing structures, and integration of modern systems within historic buildings.
                  These challenges were addressed through innovative engineering solutions and careful construction
                  management.
                </p>
              </div>

              <Link href="/contact" className="btn-primary">
                Discuss a Similar Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

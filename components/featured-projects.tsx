import Link from "next/link"
import Image from "next/image"

export default function FeaturedProjects() {
  // Sample project data - would be replaced with real data
  const projects = [
    {
      id: 1,
      title: "Modern Residential Complex",
      category: "Residential",
      description: "A contemporary housing development featuring 12 luxury units with sustainable design elements.",
      imageSrc: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      category: "Commercial",
      description: "A state-of-the-art office building designed to foster collaboration and productivity.",
      imageSrc: "/placeholder.svg?height=600&width=800",
    },
    {
      id: 3,
      title: "Urban Renewal Project",
      category: "Mixed-Use",
      description: "Transformation of an abandoned industrial site into a vibrant mixed-use development.",
      imageSrc: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <section className="bg-stone-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Explore some of my most significant architectural and construction works</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.imageSrc || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-stone-500">{project.category}</span>
                <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
                <p className="text-stone-600 mb-4">{project.description}</p>
                <Link href={`/projects#${project.id}`} className="text-stone-800 font-medium hover:underline">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

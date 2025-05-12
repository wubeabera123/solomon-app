import Image from "next/image"
import Link from "next/link"

interface ProjectProps {
  project: {
    id: number
    title: string
    category: string
    description: string
    imageSrc: string
    year: string
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.imageSrc || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-stone-500">{project.category}</span>
          <span className="text-sm text-stone-500">{project.year}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-stone-600 mb-4">{project.description}</p>
        <Link href={`/projects/${project.id}`} className="text-stone-800 font-medium hover:underline">
          View Details
        </Link>
      </div>
    </div>
  )
}

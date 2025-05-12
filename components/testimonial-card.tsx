import Image from "next/image"

interface TestimonialProps {
  testimonial: {
    id: number
    name: string
    role: string
    content: string
    imageSrc: string
    project: string
  }
}

export default function TestimonialCard({ testimonial }: TestimonialProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-stone-100">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <Image
            src={testimonial.imageSrc || "/placeholder.svg"}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold">{testimonial.name}</h3>
          <p className="text-sm text-stone-500">{testimonial.role}</p>
          <p className="text-xs text-stone-400">{testimonial.project}</p>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" className="mb-2 text-stone-300">
        <path
          fill="currentColor"
          d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"
        ></path>
      </svg>

      <p className="text-stone-600">{testimonial.content}</p>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function TestimonialSlider() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "Engineer Solomon transformed our vision into a beautiful, functional home that exceeded our expectations. His attention to detail and hands-on approach to construction management ensured that every aspect of our design was executed perfectly.",
      imageSrc: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO, Tech Innovations Inc.",
      content:
        "Working with Engineer Solomon on our corporate headquarters was an exceptional experience. He understood our company culture and created a space that fosters collaboration while making a bold architectural statement. His ability to manage both design and construction made the process seamless.",
      imageSrc: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Community Development Director",
      content:
        "The community center designed and built by Engineer Solomon has become the heart of our neighborhood. His thoughtful approach to public spaces and commitment to quality construction has given us a facility that will serve generations to come.",
      imageSrc: "/placeholder.svg?height=200&width=200",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="container-custom">
      <h2 className="section-title">What Clients Say</h2>

      <div className="mt-12 relative">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonials[currentIndex].imageSrc || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-bold">{testimonials[currentIndex].name}</h3>
                  <p className="text-sm text-stone-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>

              <div className="md:w-3/4">
                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" className="mb-4 text-stone-300">
                  <path
                    fill="currentColor"
                    d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"
                  ></path>
                </svg>
                <p className="text-lg mb-6">{testimonials[currentIndex].content}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-stone-800" : "bg-stone-300"}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

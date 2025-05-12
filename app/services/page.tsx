import Link from "next/link"
import PageHeader from "@/components/page-header"

export default function Services() {
  return (
    <div>
      <PageHeader
        title="Services"
        subtitle="Comprehensive architectural and construction solutions tailored to your needs"
      />

      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2>Architectural Services</h2>
            <div className="space-y-8 mt-6">
              <div className="flex gap-4">
                <div className="bg-stone-100 p-4 rounded-lg flex items-center justify-center min-w-[60px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Concept Development</h3>
                  <p>
                    Transforming your ideas into comprehensive architectural concepts that balance aesthetics,
                    functionality, and budget considerations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-stone-100 p-4 rounded-lg flex items-center justify-center min-w-[60px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Detailed Design</h3>
                  <p>
                    Creating comprehensive architectural plans, elevations, sections, and 3D visualizations that bring
                    your project to life.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-stone-100 p-4 rounded-lg flex items-center justify-center min-w-[60px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interior Design</h3>
                  <p>
                    Crafting interior spaces that harmonize with the architectural vision, focusing on spatial flow,
                    lighting, materials, and finishes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-stone-100 p-4 rounded-lg flex items-center justify-center min-w-[60px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Renovation Design</h3>
                  <p>
                    Reimagining existing spaces to enhance functionality, update aesthetics, and increase property value
                    while respecting the original structure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2>Construction Services</h2>
            <div className="space-y-8 mt-6">
              <div className="flex gap-4">
                <div className="bg-stone-100 p-4 rounded-lg flex items-center justify-center min-w-[60px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Project Management</h3>
                  <p>
                    Comprehensive oversight of the entire construction process, ensuring quality, timeliness, and
                    adherence to budget constraints.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-stone-100 p-4 rounded-lg flex items-center justify-center min-w-[60px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Construction Supervision</h3>
                  <p>
                    On-site direction of construction crews, ensuring that all work is performed according to design
                    specifications and quality standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-stone-100 p-4 rounded-lg flex items-center justify-center min-w-[60px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                  <p>
                    Rigorous inspection and testing protocols to ensure that all construction meets or exceeds industry
                    standards and building codes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-stone-100 p-4 rounded-lg flex items-center justify-center min-w-[60px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cost Management</h3>
                  <p>
                    Strategic planning and monitoring of project expenses to maximize value while maintaining quality
                    and meeting design objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-16 mt-16">
        <div className="container-custom">
          <h2 className="section-title">The Process</h2>
          <p className="section-subtitle">
            My comprehensive approach ensures a seamless journey from concept to completion
          </p>

          <div className="relative mt-20">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-stone-300"></div>

            <div className="space-y-24">
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-800 z-10 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Initial Consultation</h3>
                  <p>
                    We begin with a thorough discussion of your vision, requirements, and budget constraints to
                    establish a clear direction for your project.
                  </p>
                </div>
                <div className="md:pl-12"></div>
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:pr-12"></div>
                <div className="md:pl-12">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-800 z-10 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Concept Development</h3>
                  <p>
                    I create preliminary designs that translate your ideas into architectural concepts, presenting
                    options that balance aesthetics, functionality, and budget.
                  </p>
                </div>
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-800 z-10 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Detailed Design</h3>
                  <p>
                    Once a concept is approved, I develop comprehensive architectural and engineering plans, including
                    all technical specifications required for construction.
                  </p>
                </div>
                <div className="md:pl-12"></div>
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:pr-12"></div>
                <div className="md:pl-12">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-800 z-10 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Construction</h3>
                  <p>
                    I personally oversee the construction process, directing workers and ensuring that every aspect of
                    the design is executed with precision and care.
                  </p>
                </div>
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-12">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-800 z-10 flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Quality Assurance</h3>
                  <p>
                    Throughout construction, I conduct rigorous inspections to ensure all work meets the highest
                    standards of quality and durability.
                  </p>
                </div>
                <div className="md:pl-12"></div>
              </div>

              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:pr-12"></div>
                <div className="md:pl-12">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-800 z-10 flex items-center justify-center text-white font-bold">
                    6
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Project Completion</h3>
                  <p>
                    Upon completion, I conduct a final walkthrough with you to ensure every detail meets your
                    expectations before handing over your finished project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom mt-16">
        <div className="bg-stone-800 text-white rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-stone-200 mb-6">
                Contact me today to schedule a consultation and discuss how we can bring your vision to life.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-stone-800 rounded-md hover:bg-stone-200 transition-colors duration-300 font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

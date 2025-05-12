import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="container-custom py-16">
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
  )
}

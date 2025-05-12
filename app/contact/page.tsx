import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact-form"

export default function Contact() {
  return (
    <div>
      <PageHeader title="Contact" subtitle="Get in touch to discuss your project or schedule a consultation" />

      <section className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Let's Discuss Your Vision</h2>
            <p className="mb-8">
              Whether you're planning a new construction project, renovation, or simply want to explore possibilities,
              I'm here to help bring your vision to life. Fill out the form or use the contact information to get in
              touch.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-stone-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Office Address</h3>
                  <p className="text-gray-600">
                    123 Architecture Avenue, Suite 456
                    <br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-stone-100 p-3 rounded-full">
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600">+251 123 456 789</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-stone-100 p-3 rounded-full">
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">solomon.mengistu@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-stone-100 p-3 rounded-full">
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Office Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday: By appointment only
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-stone-100 p-3 rounded-full hover:bg-stone-200 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-stone-100 p-3 rounded-full hover:bg-stone-200 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="bg-stone-100 p-3 rounded-full hover:bg-stone-200 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="w-full h-[400px] bg-stone-200">
          {/* This would be replaced with an actual map */}
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-stone-500">Interactive Map Would Be Embedded Here</p>
          </div>
        </div>
      </section>

      <section className="container-custom mt-16">
        <h2 className="section-title">Frequently Asked Questions</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">What is your design process?</h3>
            <p className="text-gray-600">
              My design process begins with a thorough consultation to understand your needs and vision. I then develop
              concept designs, refine them based on your feedback, and create detailed plans for construction.
              Throughout the process, I maintain open communication to ensure your satisfaction.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">How long does a typical project take?</h3>
            <p className="text-gray-600">
              Project timelines vary based on scope and complexity. A residential renovation might take 3-6 months from
              design to completion, while a new commercial building could take 12-18 months. During our initial
              consultation, I can provide a more accurate timeline for your specific project.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Do you work on projects outside of Addis Ababa?</h3>
            <p className="text-gray-600">
              Yes, I work on projects throughout Ethiopia and have experience with international projects as well. For
              projects outside of Addis Ababa, I arrange regular site visits and utilize local construction teams under
              my supervision to ensure quality standards are maintained.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">What types of projects do you specialize in?</h3>
            <p className="text-gray-600">
              I specialize in residential, commercial, and institutional projects, with particular expertise in
              sustainable design, adaptive reuse of historic structures, and earthquake-resistant construction. My dual
              background in architecture and construction engineering allows me to handle diverse project types.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

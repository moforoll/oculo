"use client"

import { Button } from "@/components/ui/button"
import { Code, Languages, BookOpen } from "lucide-react"
import Image from "next/image"

export default function JoinUsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Join Our Mission</h1>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Volunteer With Us</h2>
          <p className="text-gray-700 mb-6">
            We're looking for passionate individuals to help us in our mission to combat river blindness in Nigeria.
            Here are some ways you can contribute:
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Code className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Developers</h3>
                <p className="text-gray-600">
                  Help build our AI tools, mobile applications, and interactive maps to detect and track river
                  blindness.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Languages className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Translators</h3>
                <p className="text-gray-600">
                  Help translate our educational materials into Yoruba, Hausa, Igbo, and other local languages.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Health Educators</h3>
                <p className="text-gray-600">
                  Help develop and deliver educational programs about river blindness prevention and treatment.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="relative h-48">
              <Image
                src="/images/volunteer-1.jpg"
                alt="Volunteer teaching in community"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-48">
              <Image
                src="/images/volunteer-2.jpg"
                alt="Volunteer working with technology"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Register Your Interest</h2>
          <p className="text-gray-700 mb-6">
            Ready to volunteer? Click below to send us an email with your information.
          </p>

          <div className="space-y-4">
            <Button asChild className="w-full">
              <a href="mailto:info@oculo.org?subject=Volunteer Application - Developer&body=Hi Oculo team,%0D%0A%0D%0AI'm interested in volunteering as a Developer.%0D%0A%0D%0AName: %0D%0AEmail: %0D%0AExperience: %0D%0AAvailability: %0D%0A%0D%0ATell us about yourself: %0D%0A">
                Apply as Developer
              </a>
            </Button>

            <Button asChild variant="outline" className="w-full">
              <a href="mailto:info@oculo.org?subject=Volunteer Application - Translator&body=Hi Oculo team,%0D%0A%0D%0AI'm interested in volunteering as a Translator.%0D%0A%0D%0AName: %0D%0AEmail: %0D%0ALanguages: %0D%0AExperience: %0D%0A%0D%0ATell us about yourself: %0D%0A">
                Apply as Translator
              </a>
            </Button>

            <Button asChild variant="outline" className="w-full">
              <a href="mailto:info@oculo.org?subject=Volunteer Application - Health Educator&body=Hi Oculo team,%0D%0A%0D%0AI'm interested in volunteering as a Health Educator.%0D%0A%0D%0AName: %0D%0AEmail: %0D%0ABackground: %0D%0AExperience: %0D%0A%0D%0ATell us about yourself: %0D%0A">
                Apply as Health Educator
              </a>
            </Button>

            <Button asChild variant="outline" className="w-full">
              <a href="mailto:info@oculo.org?subject=Volunteer Application - Other&body=Hi Oculo team,%0D%0A%0D%0AI'm interested in volunteering with Oculo.%0D%0A%0D%0AName: %0D%0AEmail: %0D%0AHow I can help: %0D%0ASkills: %0D%0A%0D%0ATell us about yourself: %0D%0A">
                Other Ways to Help
              </a>
            </Button>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            These will open your email client with pre-filled volunteer applications.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          We're building a vibrant community of volunteers, partners, and supporters to collaborate on our mission.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="gap-2">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Instagram Community
          </Button>
        </div>
      </div>
    </div>
  )
}
